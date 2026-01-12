import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface CollectionPageProps {
    params: Promise<{ slug: string }>;
}

async function getCollection(slug: string) {
    try {
        const collection = await db.collection.findUnique({
            where: { slug },
            include: {
                products: {
                    where: { active: true },
                    include: {
                        category: { select: { name: true, slug: true } },
                    },
                    orderBy: { createdAt: "desc" },
                },
            },
        });
        return collection;
    } catch (error) {
        console.error(`Error fetching collection ${slug}:`, error);
        return null;
    }
}

export async function generateMetadata({ params }: CollectionPageProps) {
    const { slug } = await params;
    const collection = await getCollection(slug);

    if (!collection) {
        return {
            title: "Collection Not Found | Rithu by AAha",
        };
    }

    return {
        title: `${collection.name} Collection | Rithu by AAha`,
        description: collection.description || `Explore our ${collection.name} collection of handcrafted luxury jewelry.`,
    };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
    const { slug } = await params;
    const collection = await getCollection(slug);

    if (!collection) {
        notFound();
    }

    // Serialize Decimal fields for client components
    const serializedProducts = collection.products.map((product) => ({
        ...product,
        price: Number(product.price),
        compareAtPrice: product.compareAtPrice ? Number(product.compareAtPrice) : null,
        cost: product.cost ? Number(product.cost) : null,
        collection: {
            name: collection.name,
            slug: collection.slug,
        },
    }));

    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="bg-[#FDFBF7] py-4">
                <div className="container mx-auto px-6 lg:px-12">
                    <Link
                        href="/collections"
                        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#1a4749] transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Collections
                    </Link>
                </div>
            </div>

            {/* Collection Header */}
            <section className="bg-gradient-to-b from-[#FDFBF7] to-white py-16 lg:py-24">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden bg-[#FDFBF7]">
                            {collection.image ? (
                                <Image
                                    src={collection.image}
                                    alt={collection.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FDFBF7] to-[#F5F1E8]">
                                    <span className="text-9xl text-[#D4AF37]/20 font-heading">
                                        {collection.name.charAt(0)}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#1a4749]">
                                    {collection.name}
                                </h1>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">
                                    {collection.products.length} {collection.products.length === 1 ? 'Piece' : 'Pieces'}
                                </p>
                            </div>

                            {collection.description && (
                                <p className="text-lg text-gray-600 leading-relaxed font-light">
                                    {collection.description}
                                </p>
                            )}

                            <div className="pt-4">
                                <Button
                                    size="lg"
                                    className="bg-[#1a4749] hover:bg-[#1a4749]/90 text-white h-14 px-10 rounded-none"
                                    asChild
                                >
                                    <Link href="#products">View Products</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section id="products" className="py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    {serializedProducts.length > 0 ? (
                        <>
                            <div className="text-center mb-12">
                                <h2 className="font-heading text-3xl md:text-4xl font-light text-[#1a4749]">
                                    Explore the Collection
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {serializedProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-20">
                            <h3 className="font-heading text-2xl font-light text-gray-600 mb-4">
                                No products in this collection yet
                            </h3>
                            <p className="text-gray-500 mb-8">
                                We're adding new pieces soon. Explore our other collections in the meantime.
                            </p>
                            <Button asChild className="bg-[#1a4749] hover:bg-[#1a4749]/90 text-white">
                                <Link href="/collections">Browse Collections</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
