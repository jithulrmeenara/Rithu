import { db } from "@/lib/db";
import { StatCard } from "@/components/admin/stat-card";
import { RevenueChart } from "@/components/admin/revenue-chart";
import { DollarSign, ShoppingCart, TrendingUp, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function getAnalytics() {
    const [orders, products, revenue] = await Promise.all([
        // Total orders
        db.order.count(),

        // Products count and low stock
        db.product.findMany({
            where: { active: true },
            select: { stock: true },
        }),

        // Revenue calculation
        db.order.aggregate({
            where: {
                paymentStatus: "SUCCEEDED",
            },
            _sum: {
                total: true,
            },
        }),
    ]);

    const lowStockProducts = products.filter(p => p.stock < 10).length;
    const totalRevenue = Number(revenue._sum.total || 0);
    const averageOrderValue = orders > 0 ? totalRevenue / orders : 0;

    return {
        totalOrders: orders,
        totalProducts: products.length,
        lowStockProducts,
        totalRevenue,
        averageOrderValue,
    };
}

async function getRecentOrders() {
    return await db.order.findMany({
        take: 5,
        include: {
            user: {
                select: {
                    name: true,
                    email: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });
}

export default async function AdminDashboard() {
    const analytics = await getAnalytics();
    const recentOrders = await getRecentOrders();

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-heading font-light text-[#1a4749]">
                    Dashboard
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                    Overview of your jewelry store performance
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Total Revenue"
                    value={`₹${analytics.totalRevenue.toLocaleString("en-IN")}`}
                    icon={DollarSign}
                    trend="+12.5%"
                />
                <StatCard
                    title="Total Orders"
                    value={analytics.totalOrders.toString()}
                    icon={ShoppingCart}
                    trend="+8.2%"
                />
                <StatCard
                    title="Avg Order Value"
                    value={`₹${Math.round(analytics.averageOrderValue).toLocaleString("en-IN")}`}
                    icon={TrendingUp}
                    trend="+4.1%"
                />
                <StatCard
                    title="Low Stock Items"
                    value={analytics.lowStockProducts.toString()}
                    icon={Package}
                    trend={analytics.lowStockProducts > 0 ? "warning" : "ok"}
                />
            </div>

            {/* Revenue Chart */}
            <Card>
                <CardHeader>
                    <CardTitle className="font-heading font-light text-xl">Revenue Trend</CardTitle>
                </CardHeader>
                <CardContent>
                    <RevenueChart />
                </CardContent>
            </Card>

            {/* Recent Orders */}
            <Card>
                <CardHeader>
                    <CardTitle className="font-heading font-light text-xl">Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {recentOrders.map((order) => (
                            <div
                                key={order.id}
                                className="flex items-center justify-between border-b pb-3 last:border-0"
                            >
                                <div>
                                    <p className="font-medium text-sm">{order.orderNumber}</p>
                                    <p className="text-xs text-gray-600">{order.user.name || order.user.email}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-sm">₹{Number(order.total).toLocaleString("en-IN")}</p>
                                    <p className="text-xs text-gray-600">{order.status}</p>
                                </div>
                            </div>
                        ))}
                        {recentOrders.length === 0 && (
                            <p className="text-sm text-gray-500 text-center py-4">No orders yet</p>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
