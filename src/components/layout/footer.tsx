import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons/logo";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { label: "About Us", href: "/about" },
            { label: "Our Story", href: "/story" },
            { label: "Careers", href: "/careers" },
            { label: "Press", href: "/press" },
        ],
        customer: [
            { label: "Shipping Policy", href: "/shipping" },
            { label: "Returns & Exchanges", href: "/returns" },
            { label: "Size Guide", href: "/size-guide" },
            { label: "FAQ", href: "/faq" },
        ],
        legal: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms & Conditions", href: "/terms" },
            { label: "Cookie Policy", href: "/cookies" },
            { label: "Accessibility", href: "/accessibility" },
        ],
    };

    return (
        <footer className="relative border-t border-white/10 bg-[#1a4749] text-white">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/header-pattern.png')", backgroundSize: "300px" }} />

            <div className="container mx-auto py-16 relative z-10">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                            <Logo className="h-12 w-auto text-white" />
                        </Link>
                        <p className="mt-4 text-sm italic text-white/80 font-heading">
                            "Catering to your unique preferences"
                        </p>
                        <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
                            Discover exquisite handcrafted jewelry that tells your unique story. Each piece is
                            created with precision and passion.
                        </p>

                        {/* Social Links */}
                        <div className="mt-6 flex gap-3">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-white/10 p-2 text-white transition-all hover:bg-accent hover:text-white"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-white/10 p-2 text-white transition-all hover:bg-accent hover:text-white"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-white/10 p-2 text-white transition-all hover:bg-accent hover:text-white"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-light">
                            Company
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/70 transition-colors hover:text-accent-light"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-light">
                            Customer Service
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {footerLinks.customer.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/70 transition-colors hover:text-accent-light"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-light">
                            Legal
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/70 transition-colors hover:text-accent-light"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>



                {/* Copyright */}
                <div className="mt-12 border-t border-white/10 pt-8 text-center">
                    <p className="text-sm text-white/50">
                        © {currentYear} Rithu by AAha. All rights reserved.
                    </p>
                    <div className="mt-4 flex justify-center gap-4">
                        <div className="bg-white/10 rounded px-2 py-1">
                            <Image src="/payments/visa.png" alt="Visa" width={40} height={24} className="opacity-80 invert" />
                        </div>
                        <div className="bg-white/10 rounded px-2 py-1">
                            <Image src="/payments/mastercard.png" alt="Mastercard" width={40} height={24} className="opacity-80" />
                        </div>
                        <div className="bg-white/10 rounded px-2 py-1">
                            <Image src="/payments/upi.png" alt="UPI" width={40} height={24} className="opacity-80 invert" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
