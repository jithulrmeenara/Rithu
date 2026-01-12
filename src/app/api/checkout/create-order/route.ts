import { NextResponse } from "next/server";
import { razorpay } from "@/lib/razorpay";
import { type CartItem } from "@/lib/store/cart";

export async function POST(req: Request) {
    try {
        const { items } = await req.json();

        if (!items || items.length === 0) {
            return NextResponse.json({ error: "No items in cart" }, { status: 400 });
        }

        const total = items.reduce((acc: number, item: CartItem) => {
            return acc + Number(item.product.price) * item.quantity;
        }, 0);

        // Razorpay expects amount in smallest currency unit (paise for INR)
        const amount = Math.round(total * 100);

        const options = {
            amount: amount,
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        return NextResponse.json({
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
        });
    } catch (error: any) {
        console.error("Razorpay Order Error:", error);
        return NextResponse.json(
            { error: error.message || "Something went wrong" },
            { status: 500 }
        );
    }
}
