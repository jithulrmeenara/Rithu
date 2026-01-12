"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Users,
    Settings,
    LogOut,
    Menu,
    X,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Products", href: "/admin/products", icon: Package },
    { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
    { name: "Customers", href: "/admin/customers", icon: Users },
    { name: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile menu button */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#1a4749] p-4 flex items-center justify-between">
                <h1 className="text-white font-heading text-xl">Admin Panel</h1>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white"
                >
                    {isOpen ? <X /> : <Menu />}
                </Button>
            </div>

            {/* Sidebar */}
            <div
                className={cn(
                    "fixed inset-y-0 left-0 z-40 w-64 bg-[#1a4749] transition-transform duration-300 ease-in-out lg:translate-x-0",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex h-full flex-col">
                    {/* Logo */}
                    <div className="flex h-16 items-center justify-center border-b border-white/10 px-6">
                        <h1 className="text-xl font-heading text-white tracking-wide">
                            Rithu by AAha
                        </h1>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-1 px-3 py-4">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href ||
                                (item.href !== "/admin" && pathname.startsWith(item.href));

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                        isActive
                                            ? "bg-white/10 text-white"
                                            : "text-white/70 hover:bg-white/5 hover:text-white"
                                    )}
                                >
                                    <item.icon className="h-5 w-5" />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Logout */}
                    <div className="border-t border-white/10 p-4">
                        <button
                            onClick={() => signOut({ callbackUrl: "/" })}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                        >
                            <LogOut className="h-5 w-5" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
