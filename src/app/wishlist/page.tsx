// MOCK MODE: Authentication and wishlist disabled for deployment without database
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, X } from "lucide-react";

export const metadata = {
    title: "My Wishlist | Rithu by AAha",
    description: "Your saved jewelry pieces - beautiful items you love.",
};

async function getWishlist(userId?: string) {
    // Mock mode - return empty wishlist
    return [];
}

export default async function WishlistPage() {
    // Mock mode - no authentication, just show empty wishlist
    // In production with database, this would check auth and redirect
    const wishlistItems = await getWishlist();

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <section className="bg-gradient-to-b from-white to-[#FDFBF7] py-16">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FDFBF7] mb-4">
                            <Heart className="h-8 w-8 text-[#D4AF37]" />
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#1a4749]">
                            My Wishlist
                        </h1>
                        <p className="text-lg text-gray-600 font-light">
                            {wishlistItems.length === 0
                                ? "Your wishlist is empty. Start adding pieces you love!"
                                : `You have ${wishlistItems.length} ${wishlistItems.length === 1 ? 'item' : 'items'} in your wishlist`}
                        </p>
                    </div>
                </div>
            </section>

            {/* Wishlist Items */}
            <section className="py-16">
                <div className="container mx-auto px-6 lg:px-12">
                    {wishlistItems.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {wishlistItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="group relative bg-white border border-gray-200 overflow-hidden transition-shadow hover:shadow-lg"
                                >
                                    {/* Remove Button */}
                                    <button
                                        className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-gray-600 hover:text-red-600 hover:bg-white transition-all shadow-md"
                                        aria-label="Remove from wishlist"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>

                                    {/* Product Image */}
                                    <Link href={`/products/${item.product.slug}`} className="block">
                                        <div className="relative aspect-square bg-[#FDFBF7] overflow-hidden">
                                            <Image
                                                src={item.product.thumbnail || "/placeholder-jewelry.jpg"}
                                                alt={item.product.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </Link>

                                    {/* Product Info */}
                                    <div className="p-5 space-y-3">
                                        {item.product.category && (
                                            <p className="text-xs text-gray-500 uppercase tracking-wider">
                                                {item.product.category.name}
                                            </p>
                                        )}
                                        <Link href={`/products/${item.product.slug}`}>
                                            <h3 className="font-heading text-lg font-light text-[#1a4749] leading-tight line-clamp-2 hover:text-[#D4AF37] transition-colors">
                                                {item.product.name}
                                            </h3>
                                        </Link>

                                        {/* Price */}
                                        <div className="flex items-baseline gap-2">
                                            {item.product.compareAtPrice &&
                                                item.product.compareAtPrice > item.product.price && (
                                                    <span className="text-sm text-gray-400 line-through">
                                                        ₹{item.product.compareAtPrice.toLocaleString("en-IN")}
                                                    </span>
                                                )}
                                            <span className="font-heading text-xl font-medium text-[#1a4749]">
                                                ₹{item.product.price.toLocaleString("en-IN")}
                                            </span>
                                        </div>

                                        {/* Stock Status */}
                                        {item.product.stock > 0 ? (
                                            <p className="text-sm text-green-600">In Stock</p>
                                        ) : (
                                            <p className="text-sm text-red-600">Out of Stock</p>
                                        )}

                                        {/* Add to Cart Button */}
                                        <Button
                                            className="w-full bg-[#1a4749] hover:bg-[#1a4749]/90 text-white rounded-none h-11 mt-3"
                                            disabled={item.product.stock <= 0}
                                        >
                                            <ShoppingBag className="h-4 w-4 mr-2" />
                                            Add to Cart
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* Empty State */
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#FDFBF7] mb-6">
                                <Heart className="h-12 w-12 text-gray-400" />
                            </div>
                            <h2 className="font-heading text-3xl font-light text-gray-600 mb-4">
                                Your Wishlist is Empty
                            </h2>
                            <p className="text-gray-500 mb-8 max-w-md mx-auto">
                                Explore our collections and save your favorite pieces for later.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-[#1a4749] hover:bg-[#1a4749]/90 text-white h-14 px-10 rounded-none"
                                    asChild
                                >
                                    <Link href="/shop">Browse Products</Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-14 px-10 rounded-none border-2 border-gray-300"
                                    asChild
                                >
                                    <Link href="/collections">View Collections</Link>
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Recommendations Section (if wishlist has items) */}
            {wishlistItems.length > 0 && (
                <section className="py-16 bg-[#FDFBF7]">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="text-center mb-12">
                            <h2 className="font-heading text-3xl md:text-4xl font-light text-[#1a4749]">
                                You Might Also Like
                            </h2>
                        </div>
                        <div className="text-center py-10">
                            <p className="text-gray-500">Recommendations coming soon...</p>
                            <Button className="mt-6 bg-[#1a4749] hover:bg-[#1a4749]/90 text-white rounded-none" asChild>
                                <Link href="/shop">Continue Shopping</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
