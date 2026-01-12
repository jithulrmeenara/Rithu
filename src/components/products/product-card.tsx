"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import type { ProductWithRelations } from "@/lib/actions/products";

interface ProductCardProps {
    product: ProductWithRelations;
}

export function ProductCard({ product }: ProductCardProps) {
    // Use first image or placeholder
    const mainImage = Array.isArray(product.images) && product.images.length > 0
        ? (product.images[0] as string)
        : "/placeholder-jewelry.jpg";

    return (
        <div className="group card-luxury relative flex h-full flex-col overflow-hidden p-0">
            {/* Badges */}
            <div className="absolute left-3 top-3 z-10 flex flex-col gap-2">
                {product.featured && <Badge className="bg-accent text-white">Featured</Badge>}
                {product.compareAtPrice && Number(product.compareAtPrice) > Number(product.price) && (
                    <Badge variant="secondary" className="text-destructive">Sale</Badge>
                )}
                {product.stock <= 0 && <Badge variant="destructive">Out of Stock</Badge>}
            </div>

            {/* Wishlist Button */}
            <button
                className="absolute right-3 top-3 z-10 rounded-full bg-white/80 p-2 text-text-secondary opacity-0 transition-opacity hover:bg-white hover:text-destructive group-hover:opacity-100"
                aria-label="Add to wishlist"
            >
                <Heart className="h-4 w-4" />
            </button>

            {/* Image */}
            <Link href={`/products/${product.slug}`} className="product-image-zoom relative aspect-square w-full bg-primary-50">
                <Image
                    src={mainImage}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Quick Add Overlay */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                    <Button className="w-full shadow-lg" size="sm">
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Quick Add
                    </Button>
                </div>
            </Link>

            {/* Content */}
            <div className="flex flex-1 flex-col p-4">
                {product.category && (
                    <p className="mb-1 text-xs text-text-secondary uppercase tracking-wider">
                        {product.category.name}
                    </p>
                )}
                <Link href={`/products/${product.slug}`} className="group-hover:text-accent">
                    <h3 className="font-heading text-lg font-medium leading-tight text-text-primary line-clamp-2">
                        {product.name}
                    </h3>
                </Link>
                <div className="mt-auto flex items-end justify-between pt-4">
                    <div className="flex flex-col">
                        {product.compareAtPrice && Number(product.compareAtPrice) > Number(product.price) && (
                            <span className="text-xs text-text-secondary line-through">
                                {formatPrice(Number(product.compareAtPrice))}
                            </span>
                        )}
                        <span className="font-heading text-lg font-bold text-text-primary">
                            {formatPrice(Number(product.price))}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
