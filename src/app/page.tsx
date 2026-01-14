import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Star, ShieldCheck, Truck, Sparkles, Mail, ChevronDown, Check, Crown, Diamond, Heart } from "lucide-react";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Modern Hero Section - Full Screen Immersive */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-fuchsia-600/20 to-amber-600/20 animate-gradient-xy" />

                {/* Animated Mesh Gradient */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                    <div className="absolute top-0 right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
                </div>

                {/* Hero Content */}
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            {/* Left Content */}
                            <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                                    <Crown className="w-4 h-4 text-amber-400" />
                                    <span className="text-xs font-medium text-white uppercase tracking-widest">
                                        Luxury Collection 2026
                                    </span>
                                </div>

                                {/* Main Heading */}
                                <div className="space-y-4">
                                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                                        <span className="bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent">
                                            Timeless
                                        </span>
                                        <br />
                                        <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-white bg-clip-text text-transparent">
                                            Elegance
                                        </span>
                                    </h1>
                                    <p className="text-xl md:text-2xl text-gray-300 font-light">
                                        Crafted for the Modern Connoisseur
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                    Discover our curated collection of handcrafted jewelry, where traditional artistry meets contemporary design. Each piece tells a unique story of luxury and exclusivity.
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                    <Link href="/shop">
                                        <Button size="lg" className="w-full sm:w-auto h-14 px-8 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-full shadow-lg shadow-amber-500/50 hover:shadow-xl hover:shadow-amber-500/60 transition-all duration-300 group">
                                            Explore Collection
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                    <Link href="/collections">
                                        <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 bg-white/5 backdrop-blur-md border-2 border-white/20 hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-300">
                                            View Collections
                                        </Button>
                                    </Link>
                                </div>

                                {/* Trust Indicators */}
                                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-emerald-400" />
                                        <span>Free Shipping</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-emerald-400" />
                                        <span>Lifetime Warranty</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-emerald-400" />
                                        <span>BIS Certified</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Content - Hero Image */}
                            <div className="relative lg:block animate-fade-in-up animation-delay-300">
                                {/* Glassmorphism Card */}
                                <div className="relative group">
                                    {/* Glowing Border Effect */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />

                                    {/* Image Container */}
                                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
                                        <Image
                                            src="/hero-modern.png"
                                            alt="Luxury Jewelry"
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            priority
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                                    </div>
                                </div>

                                {/* Floating Stats Cards */}
                                <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl hidden lg:block">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                                            <Star className="w-6 h-6 text-white fill-white" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-white">4.9</p>
                                            <p className="text-xs text-gray-400">Rating</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl hidden lg:block">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                                            <Diamond className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-white">10K+</p>
                                            <p className="text-xs text-gray-400">Happy Customers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-6 h-6 text-white/60" />
                </div>
            </section>

            {/* Features Section - Modern Cards */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-950 to-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Why Choose Us
                        </h2>
                        <p className="text-lg text-gray-400">
                            Excellence in every detail, from heritage to your hands
                        </p>
                    </div>

                    {/* Feature Cards Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {/* Card 1 */}
                        <div className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative space-y-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                                    <Crown className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">Premium Quality</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Crafted with the finest materials and unwavering attention to detail
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative space-y-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                                    <Heart className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">Handcrafted</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Our artisans bring decades of expertise to every unique piece
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative space-y-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                                    <Diamond className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">Timeless Design</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Classic elegance that transcends trends and time
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative space-y-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                                    <ShieldCheck className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">Certified Authentic</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    BIS hallmarked with guaranteed purity and authenticity
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collections Showcase - Split Screen */}
            <section className="relative py-24 lg:py-32 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Signature Collections
                        </h2>
                        <p className="text-lg text-gray-400">
                            Curated selections for life's special moments
                        </p>
                    </div>

                    {/* Collections Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Collection 1 */}
                        <Link href="/shop?category=rings" className="group relative overflow-hidden rounded-3xl aspect-[4/5] block">
                            <div className="absolute inset-0">
                                <Image
                                    src="/categories/rings.jpg"
                                    alt="Rings Collection"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                            </div>

                            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                                <div className="space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-4xl lg:text-5xl font-bold text-white">Rings</h3>
                                    <p className="text-gray-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Eternal symbols of love and commitment
                                    </p>
                                    <div className="flex items-center gap-2 text-amber-400 font-semibold">
                                        Explore Collection
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Collection 2 */}
                        <Link href="/shop?category=earrings" className="group relative overflow-hidden rounded-3xl aspect-[4/5] block">
                            <div className="absolute inset-0">
                                <Image
                                    src="/categories/earrings.jpg"
                                    alt="Earrings Collection"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                            </div>

                            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                                <div className="space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-4xl lg:text-5xl font-bold text-white">Earrings</h3>
                                    <p className="text-gray-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Sophisticated designs for every occasion
                                    </p>
                                    <div className="flex items-center gap-2 text-amber-400 font-semibold">
                                        Explore Collection
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* View All Button */}
                    <div className="text-center mt-12">
                        <Link href="/shop">
                            <Button size="lg" variant="outline" className="h-14 px-8 bg-white/5 backdrop-blur-md border-2 border-white/20 hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-300">
                                View All Collections
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Story Section - Side by Side */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Image Side */}
                        <div className="relative order-2 lg:order-1">
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-gradient-to-r from-amber-600 to-purple-600 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000" />
                                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                                    <Image
                                        src="/featured-necklace.png"
                                        alt="Our Heritage"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="order-1 lg:order-2 space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                                <Sparkles className="w-4 h-4 text-amber-400" />
                                <span className="text-xs font-medium text-white uppercase tracking-widest">
                                    Our Heritage
                                </span>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                    Crafting Beauty
                                    <span className="block mt-2 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                                        Since Generations
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                                <p>
                                    At Rithu by AAha, we blend traditional Indian craftsmanship with contemporary design philosophy to create jewelry that transcends time and celebrates individuality.
                                </p>
                                <p>
                                    Our journey began with a vision: to honor timeless traditions while embracing modern aesthetics. Today, each piece we craft tells a unique story of heritage, passion, and meticulous artistry.
                                </p>
                            </div>

                            <Link href="/about">
                                <Button size="lg" className="h-14 px-8 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-full shadow-lg shadow-amber-500/50 hover:shadow-xl hover:shadow-amber-500/60 transition-all duration-300 group">
                                    Discover Our Story
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Banner */}
            <section className="relative py-16 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center space-y-2">
                            <Star className="w-8 h-8 text-white mx-auto" />
                            <h4 className="font-semibold text-white">Lifetime Warranty</h4>
                            <p className="text-sm text-white/80">Quality guaranteed</p>
                        </div>
                        <div className="text-center space-y-2">
                            <ShieldCheck className="w-8 h-8 text-white mx-auto" />
                            <h4 className="font-semibold text-white">BIS Hallmarked</h4>
                            <p className="text-sm text-white/80">Certified purity</p>
                        </div>
                        <div className="text-center space-y-2">
                            <Truck className="w-8 h-8 text-white mx-auto" />
                            <h4 className="font-semibold text-white">Insured Shipping</h4>
                            <p className="text-sm text-white/80">Safe delivery</p>
                        </div>
                        <div className="text-center space-y-2">
                            <Sparkles className="w-8 h-8 text-white mx-auto" />
                            <h4 className="font-semibold text-white">Custom Design</h4>
                            <p className="text-sm text-white/80">Bespoke pieces</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section - Modern */}
            <section className="relative py-24 lg:py-32 bg-slate-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md rounded-3xl p-12 lg:p-16 border border-white/10">
                            {/* Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl -z-10" />

                            <div className="text-center space-y-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600">
                                    <Mail className="w-8 h-8 text-white" />
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                                        Join Our Exclusive Circle
                                    </h2>
                                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                        Be the first to discover new collections, exclusive previews, and timeless jewelry care insights
                                    </p>
                                </div>

                                <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="h-14 bg-white/5 backdrop-blur-md border-white/20 text-white placeholder:text-gray-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 rounded-full px-6"
                                        required
                                    />
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="h-14 px-8 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-full shadow-lg shadow-amber-500/50 hover:shadow-xl hover:shadow-amber-500/60 transition-all duration-300 whitespace-nowrap"
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

            {/* Custom CSS for Animations */}
            <style jsx>{`
                @keyframes gradient-xy {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(20px, -50px) scale(1.1); }
                    50% { transform: translate(-20px, 20px) scale(0.9); }
                    75% { transform: translate(50px, 50px) scale(1.05); }
                }
                
                @keyframes tilt {
                    0%, 100% { transform: rotate(0deg); }
                    50% { transform: rotate(1deg); }
                }
                
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-gradient-xy {
                    background-size: 400% 400%;
                    animation: gradient-xy 15s ease infinite;
                }
                
                .animate-blob {
                    animation: blob 7s infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                
                .animate-tilt {
                    animation: tilt 10s infinite linear;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out;
                }
                
                .animation-delay-300 {
                    animation-delay: 0.3s;
                }
            `}</style>
        </div>
    );
}
