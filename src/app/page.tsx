import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Star, ShieldCheck, Truck, Sparkles, Mail, Award, Heart, Gem, Leaf } from "lucide-react";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Maximum Light & Airy */}
            <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#FDFBF7]">
                <div className="container mx-auto px-6 lg:px-12 py-32 lg:py-40">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                        {/* Text Content - Refined Typography */}
                        <div className="space-y-10 text-center lg:text-left">
                            <div className="inline-block">
                                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full text-[10px] font-semibold text-[#1a4749] tracking-[0.2em] uppercase border border-[#E8E8E8]/50 shadow-sm">
                                    <Sparkles className="h-3 w-3 text-[#D4AF37]" strokeWidth={2} />
                                    New Collection 2026
                                </span>
                            </div>

                            <div className="space-y-6">
                                <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-extralight leading-[0.95] tracking-tight text-[#1a4749]">
                                    Timeless
                                    <span className="block mt-3 text-[#D4AF37] italic font-light">Elegance</span>
                                </h1>
                                <p className="text-xl md:text-2xl font-light text-gray-500 tracking-wide">
                                    for the Modern Woman
                                </p>
                            </div>

                            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
                                Discover handcrafted jewelry that tells your unique story. Each piece is meticulously designed to celebrate life's precious moments with unparalleled artistry.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
                                <Button
                                    size="lg"
                                    className="h-14 bg-[#1a4749] hover:bg-[#1a4749]/90 text-white font-medium tracking-[0.15em] px-12 rounded-none shadow-none hover:shadow-md transition-all duration-300 text-xs uppercase"
                                    asChild
                                >
                                    <Link href="/shop">Explore Collection</Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-14 bg-white border-2 border-[#1a4749] text-[#1a4749] hover:bg-[#1a4749] hover:text-white font-medium px-12 rounded-none transition-all duration-300 text-xs uppercase tracking-[0.15em]"
                                    asChild
                                >
                                    <Link href="/about">Our Story</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Hero Image - More Breathing Room */}
                        <div className="relative h-[550px] lg:h-[700px] w-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-sm overflow-hidden">
                                <Image
                                    src="/hero-modern.png"
                                    alt="Luxury Jewelry Collection"
                                    fill
                                    className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
                                    priority
                                />
                            </div>
                            {/* Subtle shadow overlay for depth */}
                            <div className="absolute -bottom-8 -right-8 w-full h-full bg-[#FDFBF7]/30 rounded-sm -z-10" />
                        </div>
                    </div>
                </div>
            </section >

            {/* Brand Values Section - Ultra Refined */}
            < section className="py-32 lg:py-40 bg-white" >
                <div className="container mx-auto px-6 lg:px-12">
                    {/* Section Header */}
                    <div className="text-center mb-20 max-w-3xl mx-auto space-y-6">
                        <h2 className="font-heading text-5xl md:text-6xl text-[#1a4749] font-light tracking-tight">
                            Our Promise
                        </h2>
                        <div className="w-16 h-px bg-[#D4AF37] mx-auto" />
                        <p className="text-gray-500 text-lg font-light leading-relaxed">
                            Excellence in every detail, from our heritage to your hands
                        </p>
                    </div>

                    {/* Value Cards - More Spacing */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                        {/* Value Card 1 */}
                        <div className="group text-center space-y-6 p-10 bg-[#FDFBF7]/50 hover:bg-white border border-transparent hover:border-[#E8E8E8] rounded-sm transition-all duration-500 hover:shadow-lg">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full border border-[#E8E8E8] group-hover:border-[#D4AF37] transition-all duration-500 mx-auto">
                                <Award className="h-9 w-9 text-[#D4AF37]" strokeWidth={1.5} />
                            </div>
                            <div className="space-y-3">
                                <h3 className="font-heading text-xl text-[#1a4749] font-semibold tracking-wide">Premium Quality</h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-light">
                                    Crafted with the finest materials and unwavering attention to detail
                                </p>
                            </div>
                        </div>

                        {/* Value Card 2 */}
                        <div className="group text-center space-y-6 p-10 bg-[#FDFBF7]/50 hover:bg-white border border-transparent hover:border-[#E8E8E8] rounded-sm transition-all duration-500 hover:shadow-lg">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full border border-[#E8E8E8] group-hover:border-[#D4AF37] transition-all duration-500 mx-auto">
                                <Heart className="h-9 w-9 text-[#D4AF37]" strokeWidth={1.5} />
                            </div>
                            <div className="space-y-3">
                                <h3 className="font-heading text-xl text-[#1a4749] font-semibold tracking-wide">Handcrafted</h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-light">
                                    Our artisans bring decades of expertise to every unique piece
                                </p>
                            </div>
                        </div>

                        {/* Value Card 3 */}
                        <div className="group text-center space-y-6 p-10 bg-[#FDFBF7]/50 hover:bg-white border border-transparent hover:border-[#E8E8E8] rounded-sm transition-all duration-500 hover:shadow-lg">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full border border-[#E8E8E8] group-hover:border-[#D4AF37] transition-all duration-500 mx-auto">
                                <Gem className="h-9 w-9 text-[#D4AF37]" strokeWidth={1.5} />
                            </div>
                            <div className="space-y-3">
                                <h3 className="font-heading text-xl text-[#1a4749] font-semibold tracking-wide">Timeless Design</h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-light">
                                    Classic elegance that transcends trends and time
                                </p>
                            </div>
                        </div>

                        {/* Value Card 4 */}
                        <div className="group text-center space-y-6 p-10 bg-[#FDFBF7]/50 hover:bg-white border border-transparent hover:border-[#E8E8E8] rounded-sm transition-all duration-500 hover:shadow-lg">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full border border-[#E8E8E8] group-hover:border-[#D4AF37] transition-all duration-500 mx-auto">
                                <Leaf className="h-9 w-9 text-[#D4AF37]" strokeWidth={1.5} />
                            </div>
                            <div className="space-y-3">
                                <h3 className="font-heading text-xl text-[#1a4749] font-semibold tracking-wide">Sustainable</h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-light">
                                    Ethically sourced with responsible craftsmanship practices
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Featured Collections - Sophisticated Layout */}
            < section className="py-32 lg:py-40 bg-[#FDFBF7]" >
                <div className="container mx-auto px-6 lg:px-12">
                    {/* Section Header */}
                    <div className="text-center mb-20 max-w-3xl mx-auto space-y-6">
                        <h2 className="font-heading text-5xl md:text-6xl text-[#1a4749] font-light tracking-tight">
                            Signature Collections
                        </h2>
                        <div className="w-16 h-px bg-[#D4AF37] mx-auto" />
                        <p className="text-gray-500 text-lg font-light leading-relaxed">
                            Curated selections of exquisite jewelry for life's special moments
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                        {/* Collection Card 1 */}
                        <Link href="/shop?category=earrings" className="group relative overflow-hidden rounded-sm">
                            <div className="relative h-[500px] w-full">
                                <Image
                                    src="/categories/earrings.jpg"
                                    alt="Earrings Collection"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />

                                <div className="absolute bottom-0 left-0 right-0 p-10 text-white space-y-4">
                                    <h3 className="font-heading text-4xl font-light tracking-wide">Earrings</h3>
                                    <p className="text-white/80 text-base font-light tracking-wide">Sophisticated designs for every occasion</p>
                                    <div className="pt-2">
                                        <span className="inline-flex items-center text-sm font-light text-[#D4AF37] tracking-wider group-hover:gap-3 gap-2 transition-all">
                                            EXPLORE COLLECTION
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Collection Card 2 */}
                        <Link href="/shop?category=rings" className="group relative overflow-hidden rounded-sm">
                            <div className="relative h-[500px] w-full">
                                <Image
                                    src="/categories/rings.jpg"
                                    alt="Rings Collection"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />

                                <div className="absolute bottom-0 left-0 right-0 p-10 text-white space-y-4">
                                    <h3 className="font-heading text-4xl font-light tracking-wide">Rings</h3>
                                    <p className="text-white/80 text-base font-light tracking-wide">Eternal symbols of love and commitment</p>
                                    <div className="pt-2">
                                        <span className="inline-flex items-center text-sm font-light text-[#D4AF37] tracking-wider group-hover:gap-3 gap-2 transition-all">
                                            EXPLORE COLLECTION
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="text-center pt-8">
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 bg-white border-2 border-[#1a4749] text-[#1a4749] hover:bg-[#1a4749] hover:text-white font-medium px-12 rounded-none transition-all duration-300 text-xs uppercase tracking-[0.15em]"
                            asChild
                        >
                            <Link href="/shop">
                                View All Collections
                                <ArrowRight className="ml-3 h-4 w-4" strokeWidth={1.5} />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section >

            {/* Story Section - Elegant Symmetry */}
            < section className="py-32 lg:py-40 bg-white" >
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                        {/* Image */}
                        <div className="relative h-[550px] lg:h-[650px] w-full order-2 lg:order-1">
                            <div className="absolute inset-0 rounded-sm overflow-hidden">
                                <Image
                                    src="/featured-necklace.png"
                                    alt="Our Heritage"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Subtle depth element */}
                            <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#FDFBF7] rounded-sm -z-10" />
                        </div>

                        {/* Content */}
                        <div className="space-y-10 order-1 lg:order-2">
                            <div className="inline-block">
                                <span className="px-5 py-2.5 bg-[#FDFBF7] rounded-full text-[10px] font-semibold text-[#1a4749] tracking-[0.2em] uppercase border border-[#E8E8E8]">
                                    Our Heritage
                                </span>
                            </div>

                            <div className="space-y-6">
                                <h2 className="font-heading text-5xl md:text-6xl text-[#1a4749] leading-tight font-light tracking-tight">
                                    Crafting Beauty
                                    <span className="block mt-3 text-[#D4AF37] italic font-light">Since Generations</span>
                                </h2>
                                <div className="w-16 h-px bg-[#D4AF37]" />
                            </div>

                            <div className="space-y-6 text-gray-500 leading-relaxed font-light">
                                <p className="text-lg">
                                    At Rithu by AAha, we blend traditional Indian craftsmanship with contemporary design philosophy to create jewelry that transcends time and celebrates individuality.
                                </p>

                                <p>
                                    Our journey began with a vision: to honor timeless traditions while embracing modern aesthetics. Today, each piece we craft tells a unique story of heritage, passion, and meticulous artistry.
                                </p>
                            </div>

                            <div className="pt-4">
                                <Button
                                    size="lg"
                                    className="h-14 bg-[#1a4749] hover:bg-[#1a4749]/90 text-white font-medium px-12 rounded-none shadow-none hover:shadow-md transition-all duration-300 text-xs uppercase tracking-[0.15em]"
                                    asChild
                                >
                                    <Link href="/about">
                                        Discover Our Story
                                        <ArrowRight className="ml-3 h-4 w-4" strokeWidth={1.5} />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Service Highlights - Minimalist Excellence */}
            < section className="py-24 lg:py-32 bg-[#FDFBF7] border-t border-[#E8E8E8]" >
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                        <div className="text-center space-y-5 group">
                            <div className="inline-flex items-center justify-center w-16 h-16 mx-auto">
                                <Star className="h-10 w-10 text-[#D4AF37] transition-transform group-hover:scale-110 duration-300" strokeWidth={1.5} />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-heading font-semibold text-lg text-[#1a4749] tracking-wide">Lifetime Warranty</h4>
                                <p className="text-sm text-gray-500 font-light leading-relaxed">Guaranteed quality and lasting craftsmanship</p>
                            </div>
                        </div>

                        <div className="text-center space-y-5 group">
                            <div className="inline-flex items-center justify-center w-16 h-16 mx-auto">
                                <ShieldCheck className="h-10 w-10 text-[#D4AF37] transition-transform group-hover:scale-110 duration-300" strokeWidth={1.5} />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-heading font-semibold text-lg text-[#1a4749] tracking-wide">BIS Hallmarked</h4>
                                <p className="text-sm text-gray-500 font-light leading-relaxed">Certified purity and authenticity</p>
                            </div>
                        </div>

                        <div className="text-center space-y-5 group">
                            <div className="inline-flex items-center justify-center w-16 h-16 mx-auto">
                                <Truck className="h-10 w-10 text-[#D4AF37] transition-transform group-hover:scale-110 duration-300" strokeWidth={1.5} />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-heading font-semibold text-lg text-[#1a4749] tracking-wide">Insured Shipping</h4>
                                <p className="text-sm text-gray-500 font-light leading-relaxed">Safe and secure delivery worldwide</p>
                            </div>
                        </div>

                        <div className="text-center space-y-5 group">
                            <div className="inline-flex items-center justify-center w-16 h-16 mx-auto">
                                <Sparkles className="h-10 w-10 text-[#D4AF37] transition-transform group-hover:scale-110 duration-300" strokeWidth={1.5} />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-heading font-semibold text-lg text-[#1a4749] tracking-wide">Custom Design</h4>
                                <p className="text-sm text-gray-500 font-light leading-relaxed">Bespoke pieces crafted for you</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Newsletter Section - Ultimate Sophistication */}
            < section className="py-32 lg:py-40 bg-white" >
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative bg-gradient-to-br from-[#FDFBF7] to-white rounded-sm p-16 lg:p-20 border border-[#E8E8E8] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            {/* Decorative corner accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-bl-full" />

                            <div className="relative text-center space-y-10">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full border border-[#E8E8E8] shadow-sm">
                                    <Mail className="h-9 w-9 text-[#D4AF37]" strokeWidth={1.5} />
                                </div>

                                <div className="space-y-6">
                                    <h2 className="font-heading text-4xl md:text-5xl text-[#1a4749] font-light tracking-tight">
                                        Join Our Circle
                                    </h2>
                                    <div className="w-16 h-px bg-[#D4AF37] mx-auto" />
                                    <p className="text-gray-500 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                                        Be the first to discover new collections, exclusive previews, and timeless jewelry care insights
                                    </p>
                                </div>

                                <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto pt-6">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="h-14 bg-white border-[#E8E8E8] text-[#1a4749] placeholder:text-gray-400 focus:border-[#1a4749] focus:ring-1 focus:ring-[#1a4749] rounded-none text-base font-light"
                                        required
                                    />
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="h-14 bg-[#1a4749] hover:bg-[#1a4749]/90 text-white font-medium tracking-[0.15em] px-12 rounded-none shadow-none hover:shadow-md transition-all duration-300 whitespace-nowrap text-xs uppercase"
                                    >
                                        Subscribe
                                    </Button>
                                </form>

                                <p className="text-xs text-gray-400 font-light tracking-wide">
                                    We respect your privacy. Unsubscribe at any time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}
