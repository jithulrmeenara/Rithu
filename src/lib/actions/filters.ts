"use server";

import { db } from "@/lib/db";

export async function getFilterData() {
    try {
        const [categories, collections] = await Promise.all([
            db.category.findMany({
                orderBy: { name: "asc" },
                select: {
                    id: true,
                    slug: true,
                    name: true,
                },
            }),
            db.collection.findMany({
                orderBy: { name: "asc" },
                select: {
                    id: true,
                    slug: true,
                    name: true,
                },
            }),
        ]);

        return { categories, collections };
    } catch (error) {
        console.error("Error fetching filter data:", error);
        return { categories: [], collections: [] };
    }
}
