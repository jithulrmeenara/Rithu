"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Star, ShieldCheck, Truck, Sparkles, Mail, Check, Crown, Diamond } from "lucide-react";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Exact Match */}
            <section className="relative min-h-screen bg-[#FDFBF7]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 min-h-screen items-center py-20">
                        {/* Left Content - Text */}
                        <div className="space-y-8">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200">
                                <Crown className="w-3 h-3 text-[#D4AF37]" />
                                <span className="text-[10px] font-semibold text-gray-700 uppercase tracking-[0.2em]">
                                    New Collection 2026
                                </span>
                            </div>

                            {/* Heading */}
                            <div className="space-y-2">
                                <h1 className="font-heading text-7xl lg:text-8xl font-light tracking-tight text-[#1a4749] leading-[1.1]">
                                    Timeless
                                </h1>
                                <h1 className="font-heading text-7xl lg:text-8xl font-light italic text-[#D4AF37] leading-[1.1]">
                                    Elegance
                                </h1>
                            </div>

                            {/* Subheading */}
                            <p className="text-lg text-gray-600 font-light">
                                Crafted for the Modern Connoisseur
                            </p>

                            {/* Description */}
                            <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                                Discover our curated collection of handcrafted jewelry, where traditional artistry meets contemporary design. Each piece tells a unique story of luxury and exclusivity.
                            </p>

                            {/* Buttons */}
                            <div className="flex gap-4 pt-4">
                                <Button
                                    asChild
                                    className="h-12 px-8 bg-[#1a4749] hover:bg-[#1a4749]/90 text-white text-xs font-semibold uppercase tracking-wider rounded-md"
                                >
                                    <Link href="/shop">
                                        Explore Collection
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="h-12 px-8 border-[#1a4749] text-[#1a4749] hover:bg-[#1a4749] hover:text-white text-xs font-semibold uppercase tracking-wider rounded-md"
                                >
                                    <Link href="/collections">View Collections</Link>
                                </Button>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex items-center gap-8 pt-8">
                                <div className="flex items-center gap-2">
                                    <Truck className="w-4 h-4 text-[#D4AF37]" />
                                    <span className="text-xs text-gray-600">Free Shipping</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star className="w-4 h-4 text-[#D4AF37]" />
                                    <span className="text-xs text-gray-600">Lifetime Warranty</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                                    <span className="text-xs text-gray-600">BIS Certified</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Image with Floating Cards */}
                        <div className="relative h-[600px] lg:h-[700px]">
                            {/* Main Image */}
                            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/hero-modern.png"
                                    alt="Luxury Jewelry Collection"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Card - Top Right */}
                            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#1a4749] flex items-center justify-center">
                                    <Diamond className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-[#1a4749]">10K+</p>
                                    <p className="text-[10px] text-gray-500">Happy Customers</p>
                                </div>
                            </div>

                            {/* Floating Card - Bottom Left */}
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center">
                                    <Star className="w-5 h-5 text-white fill-white" />
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-[#1a4749]">4.9</p>
                                    <p className="text-[10px] text-gray-500">Average Rating</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-5xl md:text-6xl font-heading font-light text-[#1a4749] mb-4">
                            Our Promise
                        </h2>
                        <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-6" />
                        <p className="text-gray-600">
                            Excellence in every detail, from heritage to your hands
                        </p>
                    </div>

                    {/* Feature Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Feature 1 */}
                        <div className="text-center space-y-4 p-8 rounded-xl bg-[#FDFBF7] hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mx-auto">
                                <Star className="w-8 h-8 text-[#D4AF37]" />
                            </div>
                            <h3 className="font-heading text-lg font-semibold text-[#1a4749]">Premium Quality</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Crafted with the finest materials and unwavering attention to detail
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="text-center space-y-4 p-8 rounded-xl bg-[#FDFBF7] hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mx-auto">
                                <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />
                            </div>
                            <h3 className="font-heading text-lg font-semibold text-[#1a4749]">Handcrafted</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Our artisans bring decades of expertise to every unique piece
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="text-center space-y-4 p-8 rounded-xl bg-[#FDFBF7] hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mx-auto">
                                <Diamond className="w-8 h-8 text-[#D4AF37]" />
                            </div>
                            <h3 className="font-heading text-lg font-semibold text-[#1a4749]">Timeless Design</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Classic elegance that transcends trends and time
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="text-center space-y-4 p-8 rounded-xl bg-[#FDFBF7] hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mx-auto">
                                <Sparkles className="w-8 h-8 text-[#D4AF37]" />
                            </div>
                            <h3 className="font-heading text-lg font-semibold text-[#1a4749]">Certified</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                BIS hallmarked with guaranteed purity and authenticity
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collections Showcase */}
            <section className="py-24 lg:py-32 bg-[#FDFBF7]">
                <div className="container mx-auto px-6 lg:px-12">
                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-5xl md:text-6xl font-heading font-light text-[#1a4749] mb-4">
                            Signature Collections
                        </h2>
                        <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-6" />
                        <p className="text-gray-600">
                            Curated selections for life's special moments
                        </p>
                    </div>

                    {/* Collections Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Collection Card 1 */}
                        <Link href="/shop?category=rings" className="group block">
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/categories/rings.jpg"
                                    alt="Rings Collection"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                    <h3 className="text-4xl font-heading font-light mb-2">Rings</h3>
                                    <p className="text-white/90 mb-4">Eternal symbols of love and commitment</p>
                                    <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-semibold">
                                        Explore Collection
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Collection Card 2 */}
                        <Link href="/shop?category=earrings" className="group block">
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/categories/earrings.jpg"
                                    alt="Earrings Collection"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                    <h3 className="text-4xl font-heading font-light mb-2">Earrings</h3>
                                    <p className="text-white/90 mb-4">Sophisticated designs for every occasion</p>
                                    <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-semibold">
                                        Explore Collection
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* View All Button */}
                    <div className="text-center">
                        <Button
                            asChild
                            variant="outline"
                            className="h-12 px-8 border-[#1a4749] text-[#1a4749] hover:bg-[#1a4749] hover:text-white text-xs font-semibold uppercase tracking-wider rounded-md"
                        >
                            <Link href="/shop">
                                View All Collections
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                            <Image
                                src="/featured-necklace.png"
                                alt="Our Heritage"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-8 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDFBF7] border border-gray-200">
                                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                                <span className="text-[10px] font-semibold text-gray-700 uppercase tracking-[0.2em]">
                                    Our Heritage
                                </span>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-5xl md:text-6xl font-heading font-light text-[#1a4749]">
                                    Crafting Beauty
                                    <span className="block text-[#D4AF37] italic mt-2">Since Generations</span>
                                </h2>
                                <div className="w-16 h-px bg-[#D4AF37]" />
                            </div>

                            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                                <p>
                                    At Rithu by AAha, we blend traditional Indian craftsmanship with contemporary design philosophy to create jewelry that transcends time and celebrates individuality.
                                </p>
                                <p>
                                    Our journey began with a vision: to honor timeless traditions while embracing modern aesthetics. Today, each piece we craft tells a unique story of heritage, passion, and meticulous artistry.
                                </p>
                            </div>

                            <Button
                                asChild
                                className="h-12 px-8 bg-[#1a4749] hover:bg-[#1a4749]/90 text-white text-xs font-semibold uppercase tracking-wider rounded-md"
                            >
                                <Link href="/about">
                                    Discover Our Story
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-[#1a4749]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div className="space-y-3">
                            <Star className="w-8 h-8 text-[#D4AF37] mx-auto" />
                            <h4 className="font-semibold text-white text-sm">Lifetime Warranty</h4>
                            <p className="text-xs text-white/80">Quality guaranteed</p>
                        </div>
                        <div className="space-y-3">
                            <ShieldCheck className="w-8 h-8 text-[#D4AF37] mx-auto" />
                            <h4 className="font-semibold text-white text-sm">BIS Hallmarked</h4>
                            <p className="text-xs text-white/80">Certified purity</p>
                        </div>
                        <div className="space-y-3">
                            <Truck className="w-8 h-8 text-[#D4AF37] mx-auto" />
                            <h4 className="font-semibold text-white text-sm">Insured Shipping</h4>
                            <p className="text-xs text-white/80">Safe delivery</p>
                        </div>
                        <div className="space-y-3">
                            <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto" />
                            <h4 className="font-semibold text-white text-sm">Custom Design</h4>
                            <p className="text-xs text-white/80">Bespoke pieces</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-24 lg:py-32 bg-[#FDFBF7]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white rounded-2xl p-12 lg:p-16 shadow-xl text-center">
                            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-8">
                                <Mail className="w-8 h-8 text-[#D4AF37]" />
                            </div>

                            <h2 className="text-4xl md:text-5xl font-heading font-light text-[#1a4749] mb-4">
                                Join Our Exclusive Circle
                            </h2>
                            <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-6" />
                            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                                Be the first to discover new collections, exclusive previews, and timeless jewelry care insights
                            </p>

                            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="h-12 px-6 bg-[#FDFBF7] border-gray-200 focus:border-[#D4AF37] rounded-md"
                                    required
                                />
                                <Button
                                    type="submit"
                                    className="h-12 px-8 bg-[#1a4749] hover:bg-[#1a4749]/90 text-white text-xs font-semibold uppercase tracking-wider rounded-md whitespace-nowrap"
                                >
                                    Subscribe
                                </Button>
                            </form>

                            <p className="text-xs text-gray-500 mt-6">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
