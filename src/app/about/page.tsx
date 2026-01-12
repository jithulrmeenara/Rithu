import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Award, Heart, Gem, Leaf, Users, Shield } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "About Us | Rithu by AAha",
    description: "Discover the story behind Rithu by AAha - crafting timeless jewelry with passion and precision since 1995.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-white to-[#FDFBF7] py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-4xl mx-auto space-y-8">
                        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#1a4749]">
                            Our Story
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                            Crafting timeless elegance through three decades of artistry,
                            passion, and an unwavering commitment to excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Brand Story */}
            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="space-y-6">
                                <h2 className="font-heading text-4xl font-light text-[#1a4749]">
                                    A Legacy of Excellence
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Founded in 1995, Rithu by AAha began as a small family workshop in Mumbai with a simple
                                    vision: to create jewelry that tells stories, celebrates moments, and becomes cherished
                                    heirlooms for generations to come.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    For over three decades, we've been at the forefront of jewelry craftsmanship, blending
                                    traditional techniques with contemporary designs. Our master artisans pour their hearts
                                    into every piece, ensuring that each creation meets our exacting standards of quality
                                    and beauty.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Today, Rithu by AAha stands as a symbol of luxury, trust, and timeless elegance,
                                    serving discerning customers across the globe who appreciate the finest in jewelry design.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 aspect-[4/5] bg-[#FDFBF7] relative overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800"
                                alt="Jewelry craftsmanship"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-[#FDFBF7]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-4xl md:text-5xl font-light text-[#1a4749] mb-6">
                            Our Values
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="bg-white p-8 text-center space-y-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FDFBF7]">
                                <Gem className="h-8 w-8 text-[#D4AF37]" />
                            </div>
                            <h3 className="font-heading text-xl font-light text-[#1a4749]">
                                Uncompromising Quality
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Every piece undergoes rigorous quality checks, ensuring only the finest materials
                                and craftsmanship reach our customers.
                            </p>
                        </div>

                        <div className="bg-white p-8 text-center space-y-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FDFBF7]">
                                <Heart className="h-8 w-8 text-[#D4AF37]" />
                            </div>
                            <h3 className="font-heading text-xl font-light text-[#1a4749]">
                                Passion & Artistry
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our master artisans bring decades of experience and genuine passion to every design,
                                creating true works of art.
                            </p>
                        </div>

                        <div className="bg-white p-8 text-center space-y-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FDFBF7]">
                                <Leaf className="h-8 w-8 text-[#D4AF37]" />
                            </div>
                            <h3 className="font-heading text-xl font-light text-[#1a4749]">
                                Ethical Sourcing
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                We're committed to responsible practices, sourcing conflict-free diamonds and
                                ethically-mined precious metals.
                            </p>
                        </div>

                        <div className="bg-white p-8 text-center space-y-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FDFBF7]">
                                <Users className="h-8 w-8 text-[#D4AF37]" />
                            </div>
                            <h3 className="font-heading text-xl font-light text-[#1a4749]">
                                Customer First
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Your satisfaction is our priority. We provide personalized service and lifetime
                                support for all our creations.
                            </p>
                        </div>

                        <div className="bg-white p-8 text-center space-y-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FDFBF7]">
                                <Award className="h-8 w-8 text-[#D4AF37]" />
                            </div>
                            <h3 className="font-heading text-xl font-light text-[#1a4749]">
                                Award-Winning Design
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our innovative designs have earned recognition from prestigious jewelry associations
                                worldwide.
                            </p>
                        </div>

                        <div className="bg-white p-8 text-center space-y-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FDFBF7]">
                                <Shield className="h-8 w-8 text-[#D4AF37]" />
                            </div>
                            <h3 className="font-heading text-xl font-light text-[#1a4749]">
                                Trust & Transparency
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Full certification, transparent pricing, and honest communication in every transaction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                        <div className="text-center">
                            <div className="font-heading text-5xl md:text-6xl font-light text-[#D4AF37] mb-2">30+</div>
                            <p className="text-gray-600">Years of Excellence</p>
                        </div>
                        <div className="text-center">
                            <div className="font-heading text-5xl md:text-6xl font-light text-[#D4AF37] mb-2">50K+</div>
                            <p className="text-gray-600">Happy Customers</p>
                        </div>
                        <div className="text-center">
                            <div className="font-heading text-5xl md:text-6xl font-light text-[#D4AF37] mb-2">100+</div>
                            <p className="text-gray-600">Master Artisans</p>
                        </div>
                        <div className="text-center">
                            <div className="font-heading text-5xl md:text-6xl font-light text-[#D4AF37] mb-2">15</div>
                            <p className="text-gray-600">Design Awards</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-b from-white to-[#FDFBF7]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto space-y-8">
                        <h2 className="font-heading text-4xl md:text-5xl font-light text-[#1a4749]">
                            Experience the Rithu Difference
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Visit our showroom or explore our collections online to discover jewelry that captures
                            your unique story and celebrates life's precious moments.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button
                                size="lg"
                                className="bg-[#1a4749] hover:bg-[#1a4749]/90 text-white h-14 px-10 rounded-none"
                                asChild
                            >
                                <Link href="/shop">Explore Collections</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-14 px-10 rounded-none border-2 border-[#1a4749] text-[#1a4749] hover:bg-[#1a4749] hover:text-white"
                                asChild
                            >
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
