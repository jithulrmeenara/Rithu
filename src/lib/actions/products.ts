"use server";

import { db } from "@/lib/db";
import { type Product, Prisma } from "@prisma/client";

// Serialized product type for client components (Decimal converted to number)
export type ProductWithRelations = Omit<Product, 'price' | 'compareAtPrice' | 'cost'> & {
    price: number;
    compareAtPrice: number | null;
    cost: number | null;
    category: { name: string; slug: string } | null;
    collection: { name: string; slug: string } | null;
};

export type GetProductsParams = {
    page?: number;
    limit?: number;
    query?: string;
    category?: string;
    collection?: string;
    sort?: "price-asc" | "price-desc" | "newest" | "featured";
    minPrice?: number;
    maxPrice?: number;
};

export async function getProducts({
    page = 1,
    limit = 12,
    query,
    category,
    collection,
    sort = "newest",
    minPrice,
    maxPrice,
}: GetProductsParams = {}) {
    const skip = (page - 1) * limit;

    const where: Prisma.ProductWhereInput = {
        active: true,
        AND: [
            query
                ? {
                    OR: [
                        { name: { contains: query, mode: "insensitive" } },
                        { description: { contains: query, mode: "insensitive" } },
                    ],
                }
                : {},
            category ? { category: { slug: category } } : {},
            collection ? { collection: { slug: collection } } : {},
            minPrice ? { price: { gte: minPrice } } : {},
            maxPrice ? { price: { lte: maxPrice } } : {},
        ],
    };

    const orderBy: Prisma.ProductOrderByWithRelationInput = (() => {
        switch (sort) {
            case "price-asc":
                return { price: "asc" };
            case "price-desc":
                return { price: "desc" };
            case "featured":
                return { featured: "desc" };
            case "newest":
            default:
                return { createdAt: "desc" };
        }
    })();

    try {
        const [products, total] = await Promise.all([
            db.product.findMany({
                where,
                take: limit,
                skip,
                orderBy,
                include: {
                    category: { select: { name: true, slug: true } },
                    collection: { select: { name: true, slug: true } },
                },
            }),
            db.product.count({ where }),
        ]);

        // Convert Decimal fields to numbers for client components
        const serializedProducts = products.map((product) => ({
            ...product,
            price: Number(product.price),
            compareAtPrice: product.compareAtPrice ? Number(product.compareAtPrice) : null,
            cost: product.cost ? Number(product.cost) : null,
        }));

        return {
            products: serializedProducts as ProductWithRelations[],
            pagination: {
                total,
                pages: Math.ceil(total / limit),
                page,
                limit,
            },
        };
    } catch (error) {
        console.error("Error fetching products:", error);
        return { products: [], pagination: { total: 0, pages: 0, page: 1, limit } };
    }
}

export async function getProductBySlug(slug: string) {
    try {
        const product = await db.product.findUnique({
            where: { slug },
            include: {
                category: true,
                collection: true,
                reviews: {
                    include: { user: { select: { name: true, image: true } } },
                    orderBy: { createdAt: "desc" },
                    take: 5,
                },
            },
        });

        if (!product) return null;

        // Convert Decimal fields to numbers
        return {
            ...product,
            price: Number(product.price),
            compareAtPrice: product.compareAtPrice ? Number(product.compareAtPrice) : null,
            cost: product.cost ? Number(product.cost) : null,
        };
    } catch (error) {
        console.error(`Error fetching product ${slug}:`, error);
        return null;
    }
}

export async function getFeaturedProducts() {
    try {
        const products = await db.product.findMany({
            where: { active: true, featured: true },
            take: 8,
            orderBy: { createdAt: "desc" },
            include: {
                category: { select: { name: true, slug: true } },
            },
        });

        // Convert Decimal fields to numbers
        const serializedProducts = products.map((product) => ({
            ...product,
            price: Number(product.price),
            compareAtPrice: product.compareAtPrice ? Number(product.compareAtPrice) : null,
            cost: product.cost ? Number(product.cost) : null,
        }));

        return serializedProducts as ProductWithRelations[];
    } catch (error) {
        console.error("Error fetching featured products:", error);
        return [];
    }
}
