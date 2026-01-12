import { auth } from "@/lib/auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function AccountPage() {
    const session = await auth();

    return (
        <div className="space-y-6">
            <div>
                <h1 className="font-heading text-2xl font-bold text-text-primary">Account Overview</h1>
                <p className="text-text-secondary">Welcome back, {session?.user?.name}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Profile Details</CardTitle>
                        <CardDescription>Manage your personal information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-3 gap-2 text-sm">
                            <span className="font-medium text-text-secondary">Name:</span>
                            <span className="col-span-2 text-text-primary">{session?.user?.name}</span>

                            <span className="font-medium text-text-secondary">Email:</span>
                            <span className="col-span-2 text-text-primary">{session?.user?.email}</span>
                        </div>
                        <Link href="/account/profile">
                            <Button variant="outline" className="w-full">Edit Profile</Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Recent Orders</CardTitle>
                        <CardDescription>View your purchase history</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="py-4 text-center text-sm text-text-secondary">No recent orders found.</p>
                        <Link href="/account/orders">
                            <Button variant="outline" className="w-full">View All Orders</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
