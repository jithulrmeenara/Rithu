import { Suspense } from "react";
import { ProductFilters } from "@/components/products/product-filters";
import { ProductCard } from "@/components/products/product-card";
import { getProducts } from "@/lib/actions/products";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export const metadata = {
    title: "Shop Luxury Jewelry | Rithu by AAha",
    description: "Browse our exclusive collection of handcrafted luxury jewelry.",
};

interface ShopPageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
    const params = await searchParams; // Next.js 15 requires awaiting searchParams

    const page = Number(params.page) || 1;
    const sort = (params.sort as string) || "newest";
    const minPrice = params.minPrice ? Number(params.minPrice) : undefined;
    const maxPrice = params.maxPrice ? Number(params.maxPrice) : undefined;
    const category = params.category as string | undefined;
    const collection = params.collection as string | undefined;

    const { products, pagination } = await getProducts({
        page,
        sort: sort as any,
        minPrice,
        maxPrice,
        category,
        collection,
    });

    return (
        <div className="container py-12">
            <div className="mb-10 flex flex-col justify-between gap-4 border-b border-primary-200 pb-6 md:flex-row md:items-center">
                <div>
                    <h1 className="font-heading text-3xl font-bold text-text-primary">All Products</h1>
                    <p className="mt-1 text-text-secondary">
                        Showing {products.length} of {pagination.total} results
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-sm text-text-secondary">Sort by:</span>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Select defaultValue={sort}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="newest">Newest Arrivals</SelectItem>
                                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                                <SelectItem value="featured">Featured</SelectItem>
                            </SelectContent>
                        </Select>
                    </Suspense>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
                <aside className="hidden lg:block">
                    <div className="sticky top-24">
                        <ProductFilters />
                    </div>
                </aside>

                <div className="lg:col-span-3">
                    {products.length > 0 ? (
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                            <h3 className="font-heading text-xl font-semibold text-text-primary">
                                No products found
                            </h3>
                            <p className="mt-2 text-text-secondary">
                                Try adjusting your filters.
                            </p>
                            <Button className="mt-6" variant="outline">
                                Clear Filters
                            </Button>
                        </div>
                    )}

                    {pagination.pages > 1 && (
                        <div className="mt-16 flex justify-center gap-2">
                            <Button variant="outline" disabled={page <= 1}>
                                Previous
                            </Button>
                            <Button variant="outline" disabled={page >= pagination.pages}>
                                Next
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
