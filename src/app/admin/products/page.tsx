// MOCK MODE: Admin products page with mock data
import { getAllProducts } from "@/lib/mockData";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { ProductsTable } from "@/components/admin/products-table";

async function getProducts() {
    const mockProducts = getAllProducts();
    return mockProducts.map(p => ({
        ...p,
        stock: 10,
        active: true,
        thumbnail: p.images[0] || null,
        category: { name: p.category, slug: p.category.toLowerCase() },
        collection: null,
    }));
}

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-heading font-light text-[#1a4749]">
                        Products
                    </h1>
                    <p className="text-sm text-gray-600 mt-1">
                        Manage your jewelry catalog
                    </p>
                </div>
                <Link href="/admin/products/new">
                    <Button className="bg-[#1a4749] hover:bg-[#1a4749]/90 text-white">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Product
                    </Button>
                </Link>
            </div>

            {/* Products Table */}
            <Card>
                <CardHeader>
                    <CardTitle className="font-heading font-light text-xl">All Products</CardTitle>
                </CardHeader>
                <CardContent>
                    <ProductsTable products={products} />
                </CardContent>
            </Card>
        </div>
    );
}
