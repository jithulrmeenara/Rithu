import { db } from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Collections | Rithu by AAha",
    description: "Explore our curated collections of handcrafted luxury jewelry.",
};

async function getCollections() {
    try {
        const collections = await db.collection.findMany({
            include: {
                _count: {
                    select: { products: true },
                },
            },
            orderBy: { name: "asc" },
        });
        return collections;
    } catch (error) {
        console.error("Error fetching collections:", error);
        return [];
    }
}

export default async function CollectionsPage() {
    const collections = await getCollections();

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <section className="bg-gradient-to-b from-white to-[#FDFBF7] py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto space-y-6">
                        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#1a4749]">
                            Our Collections
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                            Curated selections of exquisite jewelry, each collection tells a unique story of
                            craftsmanship and elegance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Collections Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    {collections.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {collections.map((collection) => (
                                <Link
                                    key={collection.id}
                                    href={`/collections/${collection.slug}`}
                                    className="group"
                                >
                                    <div className="relative overflow-hidden bg-[#FDFBF7] aspect-[4/5] mb-6">
                                        {collection.image ? (
                                            <Image
                                                src={collection.image}
                                                alt={collection.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FDFBF7] to-[#F5F1E8]">
                                                <span className="text-6xl text-[#D4AF37]/20 font-heading">
                                                    {collection.name.charAt(0)}
                                                </span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    <div className="space-y-3">
                                        <h2 className="font-heading text-2xl font-light text-[#1a4749] group-hover:text-[#D4AF37] transition-colors">
                                            {collection.name}
                                        </h2>

                                        {collection.description && (
                                            <p className="text-sm text-gray-600 line-clamp-2 font-light">
                                                {collection.description}
                                            </p>
                                        )}

                                        <div className="flex items-center justify-between pt-2">
                                            <span className="text-sm text-gray-500">
                                                {collection._count.products} {collection._count.products === 1 ? 'piece' : 'pieces'}
                                            </span>
                                            <span className="inline-flex items-center gap-1 text-sm text-[#1a4749] group-hover:text-[#D4AF37] transition-colors font-medium">
                                                Explore
                                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <h3 className="font-heading text-2xl font-light text-gray-600 mb-4">
                                No collections available yet
                            </h3>
                            <p className="text-gray-500 mb-8">
                                We're curating something special for you. Check back soon!
                            </p>
                            <Button asChild className="bg-[#1a4749] hover:bg-[#1a4749]/90 text-white">
                                <Link href="/shop">Browse All Products</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
