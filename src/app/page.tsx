"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Star, ShieldCheck, Truck, Sparkles, Mail, Check, Crown, Diamond, Heart, Gem, Award, Leaf } from "lucide-react";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#FDFBF7]">
            {/* Modern Hero Section - Brand Colors */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#FDFBF7] to-[#F4F1EA]">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                    <div className="absolute top-40 right-10 w-72 h-72 bg-[#1a4749] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                    <div className="absolute bottom-20 left-40 w-72 h-72 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
                </div>

                {/* Hero Content */}
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            {/* Left Content */}
                            <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#D4AF37]/30 shadow-sm">
                                    <Crown className="w-4 h-4 text-[#D4AF37]" />
                                    <span className="text-xs font-semibold text-[#1a4749] uppercase tracking-[0.2em]">
                                        New Collection 2026
                                    </span>
                                </div>

                                {/* Main Heading */}
                                <div className="space-y-6">
                                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-light leading-[0.95] tracking-tight text-[#1a4749]">
                                        Timeless
                                        <span className="block mt-4 text-[#D4AF37] italic font-light">Elegance</span>
                                    </h1>
                                    <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide">
                                        Crafted for the Modern Connoisseur
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                                    Discover our curated collection of handcrafted jewelry, where traditional artistry meets contemporary design. Each piece tells a unique story of luxury and exclusivity.
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                    <Link href="/shop">
                                        <Button size="lg" className="w-full sm:w-auto h-16 px-10 bg-[#1a4749] hover:bg-[#1a4749]/90 text-white font-semibold rounded-full shadow-lg shadow-[#1a4749]/30 hover:shadow-xl hover:shadow-[#1a4749]/40 transition-all duration-300 group text-sm uppercase tracking-wider">
                                            Explore Collection
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                    <Link href="/collections">
                                        <Button size="lg" variant="outline" className="w-full sm:w-auto h-16 px-10 bg-white/80 backdrop-blur-sm border-2 border-[#1a4749] hover:bg-[#1a4749] text-[#1a4749] hover:text-white font-semibold rounded-full transition-all duration-300 text-sm uppercase tracking-wider">
                                            View Collections
                                        </Button>
                                    </Link>
                                </div>

                                {/* Trust Indicators */}
                                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-[#1a4749]" />
                                        </div>
                                        <span className="font-medium">Free Shipping</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-[#1a4749]" />
                                        </div>
                                        <span className="font-medium">Lifetime Warranty</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-[#1a4749]" />
                                        </div>
                                        <span className="font-medium">BIS Certified</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Content - Hero Image */}
                            <div className="relative lg:block animate-fade-in-up animation-delay-300">
                                {/* Modern Card with Shadow */}
                                <div className="relative group">
                                    {/* Glow Effect */}
                                    <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/20 to-[#1a4749]/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000" />

                                    {/* Image Container */}
                                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-white shadow-2xl">
                                        <Image
                                            src="/hero-modern.png"
                                            alt="Luxury Jewelry"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            priority
                                        />
                                        {/* Subtle Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a4749]/30 via-transparent to-transparent" />
                                    </div>
                                </div>

                                {/* Floating Stats Cards */}
                                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hidden lg:block">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#D4AF37]/80 flex items-center justify-center">
                                            <Star className="w-6 h-6 text-white fill-white" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-[#1a4749]">4.9</p>
                                            <p className="text-xs text-gray-500">Average Rating</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hidden lg:block">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a4749] to-[#1a4749]/80 flex items-center justify-center">
                                            <Diamond className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-[#1a4749]">10K+</p>
                                            <p className="text-xs text-gray-500">Happy Customers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section - Modern Grid */}
            <section className="relative py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-[#1a4749] tracking-tight">
                            Our Promise
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Excellence in every detail, from heritage to your hands
                        </p>
                    </div>

                    {/* Feature Cards Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1 */}
                        <div className="group relative p-10 rounded-2xl bg-gradient-to-br from-[#FDFBF7] to-white border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-2xl transition-all duration-500">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative space-y-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#D4AF37]/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-heading font-semibold text-[#1a4749]">Premium Quality</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Crafted with the finest materials and unwavering attention to detail
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative p-10 rounded-2xl bg-gradient-to-br from-[#FDFBF7] to-white border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-2xl transition-all duration-500">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative space-y-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a4749] to-[#1a4749]/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-heading font-semibold text-[#1a4749]">Handcrafted</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Our artisans bring decades of expertise to every unique piece
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative p-10 rounded-2xl bg-gradient-to-br from-[#FDFBF7] to-white border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-2xl transition-all duration-500">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative space-y-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#D4AF37]/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Gem className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-heading font-semibold text-[#1a4749]">Timeless Design</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Classic elegance that transcends trends and time
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="group relative p-10 rounded-2xl bg-gradient-to-br from-[#FDFBF7] to-white border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-2xl transition-all duration-500">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative space-y-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a4749] to-[#1a4749]/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Leaf className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-heading font-semibold text-[#1a4749]">Sustainable</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Ethically sourced with responsible craftsmanship practices
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collections Showcase */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-[#FDFBF7]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-[#1a4749] tracking-tight">
                            Signature Collections
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Curated selections for life's special moments
                        </p>
                    </div>

                    {/* Collections Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Collection 1 */}
                        <Link href="/shop?category=rings" className="group relative overflow-hidden rounded-3xl aspect-[4/5] block shadow-xl hover:shadow-2xl transition-shadow duration-500">
                            <div className="absolute inset-0">
                                <Image
                                    src="/categories/rings.jpg"
                                    alt="Rings Collection"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a4749]/90 via-[#1a4749]/40 to-transparent" />
                            </div>

                            <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-14">
                                <div className="space-y-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-5xl lg:text-6xl font-heading font-light text-white">Rings</h3>
                                    <p className="text-white/90 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Eternal symbols of love and commitment
                                    </p>
                                    <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">
                                        Explore Collection
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Collection 2 */}
                        <Link href="/shop?category=earrings" className="group relative overflow-hidden rounded-3xl aspect-[4/5] block shadow-xl hover:shadow-2xl transition-shadow duration-500">
                            <div className="absolute inset-0">
                                <Image
                                    src="/categories/earrings.jpg"
                                    alt="Earrings Collection"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a4749]/90 via-[#1a4749]/40 to-transparent" />
                            </div>

                            <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-14">
                                <div className="space-y-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-5xl lg:text-6xl font-heading font-light text-white">Earrings</h3>
                                    <p className="text-white/90 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Sophisticated designs for every occasion
                                    </p>
                                    <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">
                                        Explore Collection
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* View All Button */}
                    <div className="text-center mt-16">
                        <Link href="/shop">
                            <Button size="lg" variant="outline" className="h-16 px-10 bg-white border-2 border-[#1a4749] hover:bg-[#1a4749] text-[#1a4749] hover:text-white font-semibold rounded-full transition-all duration-300 text-sm uppercase tracking-wider shadow-lg">
                                View All Collections
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="relative py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Image Side */}
                        <div className="relative order-2 lg:order-1">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 to-[#1a4749]/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000" />
                                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/featured-necklace.png"
                                        alt="Our Heritage"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="order-1 lg:order-2 space-y-8">
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FDFBF7] border border-[#D4AF37]/30">
                                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                                <span className="text-xs font-semibold text-[#1a4749] uppercase tracking-[0.2em]">
                                    Our Heritage
                                </span>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-[#1a4749] leading-tight tracking-tight">
                                    Crafting Beauty
                                    <span className="block mt-3 text-[#D4AF37] italic font-light">Since Generations</span>
                                </h2>
                                <div className="w-20 h-1 bg-[#D4AF37]" />
                            </div>

                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    At Rithu by AAha, we blend traditional Indian craftsmanship with contemporary design philosophy to create jewelry that transcends time and celebrates individuality.
                                </p>
                                <p>
                                    Our journey began with a vision: to honor timeless traditions while embracing modern aesthetics. Today, each piece we craft tells a unique story of heritage, passion, and meticulous artistry.
                                </p>
                            </div>

                            <Link href="/about">
                                <Button size="lg" className="h-16 px-10 bg-[#1a4749] hover:bg-[#1a4749]/90 text-white font-semibold rounded-full shadow-lg shadow-[#1a4749]/30 hover:shadow-xl hover:shadow-[#1a4749]/40 transition-all duration-300 group text-sm uppercase tracking-wider">
                                    Discover Our Story
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Banner */}
            <section className="relative py-20 bg-gradient-to-br from-[#1a4749] via-[#1a4749] to-[#1a4749]/90">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="text-center space-y-4 group">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto group-hover:bg-[#D4AF37] transition-colors duration-300">
                                <Star className="w-7 h-7 text-white" />
                            </div>
                            <h4 className="font-heading font-semibold text-white text-lg">Lifetime Warranty</h4>
                            <p className="text-sm text-white/80">Quality guaranteed</p>
                        </div>
                        <div className="text-center space-y-4 group">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto group-hover:bg-[#D4AF37] transition-colors duration-300">
                                <ShieldCheck className="w-7 h-7 text-white" />
                            </div>
                            <h4 className="font-heading font-semibold text-white text-lg">BIS Hallmarked</h4>
                            <p className="text-sm text-white/80">Certified purity</p>
                        </div>
                        <div className="text-center space-y-4 group">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto group-hover:bg-[#D4AF37] transition-colors duration-300">
                                <Truck className="w-7 h-7 text-white" />
                            </div>
                            <h4 className="font-heading font-semibold text-white text-lg">Insured Shipping</h4>
                            <p className="text-sm text-white/80">Safe delivery</p>
                        </div>
                        <div className="text-center space-y-4 group">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto group-hover:bg-[#D4AF37] transition-colors duration-300">
                                <Sparkles className="w-7 h-7 text-white" />
                            </div>
                            <h4 className="font-heading font-semibold text-white text-lg">Custom Design</h4>
                            <p className="text-sm text-white/80">Bespoke pieces</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-b from-[#FDFBF7] to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative bg-gradient-to-br from-white to-[#FDFBF7] rounded-3xl p-12 lg:p-20 border border-gray-100 shadow-2xl">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#1a4749]/5 rounded-full blur-3xl" />

                            <div className="relative text-center space-y-10">
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#D4AF37]/80 shadow-lg">
                                    <Mail className="w-9 h-9 text-white" />
                                </div>

                                <div className="space-y-6">
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-[#1a4749] tracking-tight">
                                        Join Our Exclusive Circle
                                    </h2>
                                    <div className="w-20 h-1 bg-[#D4AF37] mx-auto" />
                                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                        Be the first to discover new collections, exclusive previews, and timeless jewelry care insights
                                    </p>
                                </div>

                                <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto pt-4">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="h-14 bg-white border-gray-200 text-[#1a4749] placeholder:text-gray-400 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 rounded-full px-6 text-base"
                                        required
                                    />
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="h-14 px-10 bg-[#1a4749] hover:bg-[#1a4749]/90 text-white font-semibold rounded-full shadow-lg shadow-[#1a4749]/30 hover:shadow-xl hover:shadow-[#1a4749]/40 transition-all duration-300 whitespace-nowrap text-sm uppercase tracking-wider"
                                    >
                                        Subscribe
                                    </Button>
                                </form>

                                <p className="text-xs text-gray-500">
                                    We respect your privacy. Unsubscribe at any time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
