import { NextResponse } from "next/server";
import { type CartItem } from "@/lib/store/cart";

// MOCK MODE: Payment disabled for deployment without database
// This is a temporary measure for testing/demo purposes

export async function POST(req: Request) {
    try {
        const { items } = await req.json();

        if (!items || items.length === 0) {
            return NextResponse.json({ error: "No items in cart" }, { status: 400 });
        }

        const total = items.reduce((acc: number, item: CartItem) => {
            return acc + Number(item.product.price) * item.quantity;
        }, 0);

        // Mock response - no actual payment processing
        const amount = Math.round(total * 100);

        return NextResponse.json({
            orderId: `mock_order_${Date.now()}`,
            amount: amount,
            currency: "INR",
            message: "This is a demo mode. No actual payment will be processed.",
        });
    } catch (error: any) {
        console.error("Order Error:", error);
        return NextResponse.json(
            { error: error.message || "Something went wrong" },
            { status: 500 }
        );
    }
}
