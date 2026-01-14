import { NextResponse } from "next/server";

// MOCK MODE: Registration disabled for deployment without database
// This is a temporary measure for testing/demo purposes

export async function POST(request: Request) {
    return NextResponse.json(
        {
            error: "Registration is temporarily disabled in demo mode",
            message: "This demo deployment uses mock data. Authentication features are not available.",
        },
        { status: 503 }
    );
}
