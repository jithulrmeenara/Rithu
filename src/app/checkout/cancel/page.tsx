import Link from "next/link";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

export default function CheckoutCancelPage() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <XCircle className="mb-4 h-16 w-16 text-destructive" />
            <h1 className="mb-2 font-heading text-3xl font-bold text-text-primary">
                Order Cancelled
            </h1>
            <p className="mb-8 max-w-md text-text-secondary">
                Your order has been cancelled and no payment has been processed. You can continue shopping or try checking out again.
            </p>
            <div className="flex gap-4">
                <Link href="/cart">
                    <Button>Return to Cart</Button>
                </Link>
                <Link href="/shop">
                    <Button variant="outline">Continue Shopping</Button>
                </Link>
            </div>
        </div>
    );
}
