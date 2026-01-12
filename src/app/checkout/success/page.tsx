import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function CheckoutSuccessPage() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <CheckCircle2 className="mb-4 h-16 w-16 text-green-500" />
            <h1 className="mb-2 font-heading text-3xl font-bold text-text-primary">
                Order Confirmed!
            </h1>
            <p className="mb-8 max-w-md text-text-secondary">
                Thank you for your purchase. We have received your order and sent a confirmation email to you.
            </p>
            <div className="flex gap-4">
                <Link href="/shop">
                    <Button variant="outline">Continue Shopping</Button>
                </Link>
                <Link href="/account/orders">
                    <Button>View Order</Button>
                </Link>
            </div>
        </div>
    );
}
