"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { User, Package, Settings, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

const items = [
    {
        title: "Account Overview",
        href: "/account",
        icon: User,
    },
    {
        title: "My Orders",
        href: "/account/orders",
        icon: Package,
    },
    {
        title: "Profile Settings",
        href: "/account/profile",
        icon: Settings,
    },
];

export function AccountNav() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-col gap-2">
            {items.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                        "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-primary-50",
                        pathname === item.href
                            ? "bg-primary-50 text-accent"
                            : "text-text-secondary hover:text-text-primary"
                    )}
                >
                    <item.icon className="h-4 w-4" />
                    {item.title}
                </Link>
            ))}
            <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-destructive transition-colors hover:bg-red-50"
            >
                <LogOut className="h-4 w-4" />
                Sign Out
            </button>
        </nav>
    );
}
