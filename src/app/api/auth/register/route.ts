import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { z } from "zod";

const registerSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    phone: z.string().optional(),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate input
        const validatedData = registerSchema.parse(body);

        // Check if user already exists
        const existingUser = await db.user.findUnique({
            where: { email: validatedData.email },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "User with this email already exists" },
                { status: 400 }
            );
        }

        // Hash password
        const passwordHash = await bcrypt.hash(validatedData.password, 12);

        // Create user in database
        const user = await db.user.create({
            data: {
                name: validatedData.name,
                email: validatedData.email,
                passwordHash,
                phone: validatedData.phone || null,
                role: "USER",
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
            },
        });

        return NextResponse.json(
            {
                success: true,
                message: "Account created successfully",
                user,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Registration error:", error);

        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    error: "Validation failed",
                    details: error.errors,
                },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { error: "Failed to create account. Please try again." },
            { status: 500 }
        );
    }
}
