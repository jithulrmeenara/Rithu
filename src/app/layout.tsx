import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// Heading Font: Cinzel (Elegant Serif)
const cinzel = Cinzel({
    subsets: ["latin"],
    variable: "--font-cinzel",
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

// Body Font: Lato (Modern Sans-serif)
const lato = Lato({
    subsets: ["latin"],
    variable: "--font-lato",
    weight: ["300", "400", "700"],
    display: "swap",
});

// Alternative Body Font: Geist Sans (Removed for now)
// const geistSans = localFont({
//     src: "./fonts/GeistVF.woff2", 
//     variable: "--font-geist-sans",
//     weight: "100 900",
// });

export const metadata: Metadata = {
    title: {
        default: "Rithu by AAha - Luxury Jewelry Collection",
        template: "%s | Rithu by AAha",
    },
    description:
        "Discover exquisite handcrafted jewelry that tells your unique story. Shop our curated collection of rings, necklaces, bracelets, and earrings.",
    keywords: [
        "luxury jewelry",
        "handcrafted jewelry",
        "gold jewelry",
        "diamond jewelry",
        "rings",
        "necklaces",
        "bracelets",
        "earrings",
    ],
    authors: [{ name: "Rithu by AAha" }],
    creator: "Rithu by AAha",
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://rithubyaaha.com",
        title: "Rithu by AAha - Luxury Jewelry Collection",
        description: "serving differences in your preferences",
        siteName: "Rithu by AAha",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Rithu by AAha",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Rithu by AAha - Luxury Jewelry Collection",
        description: "serving differences in your preferences",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={[
                    cinzel.variable,
                    lato.variable,
                    "antialiased",
                    "bg-primary",
                    "font-sans",
                    "text-text-primary",
                    "selection:bg-accent",
                    "selection:text-white"
                ].join(" ")}
                suppressHydrationWarning
            >
                <div className="flex min-h-screen flex-col">
                    <Navbar />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
