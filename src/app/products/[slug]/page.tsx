import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Star, Truck, ShieldCheck, RefreshCw } from "lucide-react";
import { getProductBySlug, ProductWithRelations } from "@/lib/actions/products";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import { AddToCartButton } from "@/components/products/add-to-cart-button";

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
        return { title: "Product Not Found" };
    }

    return {
        title: `${product.name} | Rithu by AAha`,
        description: product.description.slice(0, 160),
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
        return notFound();
    }

    return (
        <div className="container py-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                {/* Product Images */}
                <div className="space-y-4">
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-primary-50">
                        {/* Main Image */}
                        <Image
                            src={(product.images as string[])[0] || "/placeholder-jewelry.jpg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {/* Thumbnail placeholders */}
                        {(product.images as string[]).slice(0, 4).map((img, i) => (
                            <div key={i} className="relative aspect-square cursor-pointer overflow-hidden rounded-md border border-primary-200 hover:border-accent">
                                <Image src={img} alt={`${product.name} ${i}`} fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className="flex flex-col">
                    <div>
                        {product.collection && (
                            <Link href={`/collections/${product.collection.slug}`} className="mb-2 inline-block text-sm font-medium text-accent hover:underline">
                                {product.collection.name}
                            </Link>
                        )}
                        <h1 className="font-heading text-4xl font-bold text-text-primary">{product.name}</h1>

                        <div className="mt-4 flex items-center gap-4">
                            <div className="flex items-center text-yellow-500">
                                <Star className="h-5 w-5 fill-current" />
                                <Star className="h-5 w-5 fill-current" />
                                <Star className="h-5 w-5 fill-current" />
                                <Star className="h-5 w-5 fill-current" />
                                <Star className="h-5 w-5 fill-current" />
                            </div>
                            <span className="text-sm text-text-secondary">
                                (4.9 stars) &bull; <a href="#reviews" className="hover:text-accent">128 reviews</a>
                            </span>
                        </div>

                        <div className="mt-6 flex items-end gap-4">
                            <span className="font-heading text-3xl font-bold text-text-primary">
                                {formatPrice(Number(product.price))}
                            </span>
                            {product.compareAtPrice && Number(product.compareAtPrice) > Number(product.price) && (
                                <span className="text-xl text-text-secondary line-through">
                                    {formatPrice(Number(product.compareAtPrice))}
                                </span>
                            )}
                            {product.compareAtPrice && Number(product.compareAtPrice) > Number(product.price) && (
                                <Badge variant="destructive" className="mb-1">Save 20%</Badge>
                            )}
                        </div>
                    </div>

                    <Separator className="my-8" />

                    <p className="text-lg leading-relaxed text-text-secondary">
                        {product.description}
                    </p>

                    <div className="mt-8 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center text-sm text-text-secondary">
                                <Truck className="mr-2 h-5 w-5 text-accent" />
                                Free Shipping
                            </div>
                            <div className="flex items-center text-sm text-text-secondary">
                                <ShieldCheck className="mr-2 h-5 w-5 text-accent" />
                                Lifetime Warranty
                            </div>
                            <div className="flex items-center text-sm text-text-secondary">
                                <RefreshCw className="mr-2 h-5 w-5 text-accent" />
                                30-Day Returns
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <AddToCartButton product={product as unknown as ProductWithRelations} />
                            <Button size="lg" variant="outline" className="w-16 px-0">
                                <span className="sr-only">Wishlist</span>
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </Button>
                        </div>
                    </div>

                    <Separator className="my-8" />

                    {/* Specifications Accordion (simplified as list for now) */}
                    <div className="space-y-4">
                        <h3 className="font-heading text-lg font-semibold">Product Details</h3>
                        <dl className="grid grid-cols-1 gap-y-4 sm:grid-cols-2">
                            <div>
                                <dt className="text-sm font-medium text-text-secondary">Material</dt>
                                <dd className="mt-1 text-text-primary">18K Gold</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-text-secondary">Gemstone</dt>
                                <dd className="mt-1 text-text-primary">VS1 Diamond</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-text-secondary">Weight</dt>
                                <dd className="mt-1 text-text-primary">4.2g</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-text-secondary">SKU</dt>
                                <dd className="mt-1 text-text-primary">{product.sku || "N/A"}</dd>
                            </div>
                        </dl>
                    </div>

                </div>
            </div>
        </div>
    );
}
