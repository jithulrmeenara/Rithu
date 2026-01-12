"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, User, Heart, Search, Menu, X } from "lucide-react";
import { CartSheet } from "@/components/cart/cart-sheet";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/icons/logo";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const navLinks = [
        { href: "/shop", label: "Shop" },
        { href: "/collections", label: "Collections" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-primary-200/20 bg-[#1a4749]">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/header-pattern.png')", backgroundSize: "300px" }} />
            <nav className="container mx-auto relative z-10">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
                        <Logo className="h-16 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="font-heading text-sm uppercase tracking-wider text-white/90 transition-colors hover:text-accent-light"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        {/* Search Toggle */}
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="rounded-full p-2 transition-colors hover:bg-white/10"
                            aria-label="Search"
                        >
                            <Search className="h-5 w-5 text-white" />
                        </button>

                        {/* Wishlist */}
                        <Link
                            href="/wishlist"
                            className="hidden rounded-full p-2 transition-colors hover:bg-white/10 md:block"
                            aria-label="Wishlist"
                        >
                            <Heart className="h-5 w-5 text-white" />
                        </Link>

                        {/* Account */}
                        <Link
                            href="/account"
                            className="hidden rounded-full p-2 transition-colors hover:bg-white/10 md:block"
                            aria-label="Account"
                        >
                            <User className="h-5 w-5 text-white" />
                        </Link>

                        {/* Cart */}
                        <CartSheet />

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="rounded-full p-2 transition-colors hover:bg-white/10 lg:hidden"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6 text-white" />
                            ) : (
                                <Menu className="h-6 w-6 text-white" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Search Bar (Expandable) */}
                {isSearchOpen && (
                    <div className="animate-slide-up border-t border-white/10 py-4 bg-[#1a4749]">
                        <div className="relative container mx-auto">
                            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60" />
                            <Input
                                type="search"
                                placeholder="Search for jewelry..."
                                className="pl-12 pr-4 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-accent"
                                autoFocus
                            />
                        </div>
                    </div>
                )}

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="animate-slide-up border-t border-white/10 py-6 lg:hidden bg-[#1a4749] absolute left-0 right-0 shadow-xl">
                        <div className="container">
                            <ul className="space-y-4">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block font-heading text-lg uppercase tracking-wider text-white transition-colors hover:text-accent-light"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}

                                {/* Mobile-only links */}
                                <li className="border-t border-white/10 pt-4">
                                    <Link
                                        href="/wishlist"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-3 font-heading text-lg uppercase tracking-wider text-white transition-colors hover:text-accent-light"
                                    >
                                        <Heart className="h-5 w-5" />
                                        Wishlist
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/account"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-3 font-heading text-lg uppercase tracking-wider text-white transition-colors hover:text-accent-light"
                                    >
                                        <User className="h-5 w-5" />
                                        Account
                                    </Link>
                                </li>
                            </ul>
                            <div className="mt-6 flex gap-4">
                                <Button variant="outline" className="flex-1 border-white text-white hover:bg-white hover:text-[#1a4749]" asChild>
                                    <Link href="/login">Login</Link>
                                </Button>
                                <Button className="flex-1 bg-accent hover:bg-accent-light text-[#1a4749]" asChild>
                                    <Link href="/register">Sign Up</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
