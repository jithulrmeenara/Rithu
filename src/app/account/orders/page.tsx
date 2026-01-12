import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PackageSearch } from "lucide-react";

export default function OrdersPage() {
    // Mock data for now
    const orders: any[] = [];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="font-heading text-2xl font-bold text-text-primary">My Orders</h1>
                <p className="text-text-secondary">View and track your past purchases</p>
            </div>

            {orders.length === 0 ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed border-primary-200 bg-primary-50 p-8 text-center">
                    <PackageSearch className="mb-4 h-12 w-12 text-primary-300" />
                    <h3 className="text-lg font-medium text-text-primary">No orders yet</h3>
                    <p className="mb-6 max-w-sm text-text-secondary">
                        You haven't placed any orders yet. Start shopping to find something you love.
                    </p>
                    <Link href="/shop">
                        <Button>Start Shopping</Button>
                    </Link>
                </div>
            ) : (
                <div className="space-y-4">
                    {/* Order list would go here */}
                    <p>Orders list...</p>
                </div>
            )}
        </div>
    );
}
