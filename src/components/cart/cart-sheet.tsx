"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/store/cart";
import { formatPrice } from "@/lib/utils";

export function CartSheet() {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();
    const itemCount = cart.items.reduce((acc, item) => acc + item.quantity, 0);

    // Prevent hydration mismatch
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
            </Button>
        );
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative group hover:bg-white/10">
                    <ShoppingBag className="h-5 w-5 text-white transition-colors group-hover:text-accent-light" />
                    {itemCount > 0 && (
                        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-[#1a4749]">
                            {itemCount}
                        </span>
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
                <SheetHeader className="px-1">
                    <SheetTitle className="font-heading text-2xl font-bold">Your Cart ({itemCount})</SheetTitle>
                </SheetHeader>
                <Separator className="my-4" />

                {cart.items.length === 0 ? (
                    <div className="flex h-full flex-col items-center justify-center space-y-2">
                        <ShoppingBag className="h-12 w-12 text-primary-300" />
                        <span className="text-lg font-medium text-text-secondary">Your cart is empty</span>
                        <Button variant="link" className="text-accent" asChild>
                            <Link href="/shop">Start Shopping</Link>
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className="flex-1 overflow-y-auto pr-6">
                            <ul className="space-y-6">
                                {cart.items.map((item) => (
                                    <li key={item.product.id} className="flex gap-4">
                                        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md border border-primary-200">
                                            <Image
                                                src={(item.product.images as string[])?.[0] || "/placeholder-jewelry.jpg"}
                                                alt={item.product.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between">
                                            <div className="space-y-1">
                                                <h4 className="font-heading font-medium text-text-primary line-clamp-1">
                                                    <Link href={`/products/${item.product.slug}`} className="hover:text-accent">
                                                        {item.product.name}
                                                    </Link>
                                                </h4>
                                                <p className="text-sm font-bold text-text-primary">
                                                    {formatPrice(Number(item.product.price))}
                                                </p>
                                                {/* Variant logic could go here */}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-2 rounded-md border border-primary-200 p-1">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6 rounded-sm"
                                                        onClick={() => cart.updateQuantity(item.product.id, item.quantity - 1)}
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </Button>
                                                    <span className="w-4 text-center text-xs font-medium">{item.quantity}</span>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6 rounded-sm"
                                                        onClick={() => cart.updateQuantity(item.product.id, item.quantity + 1)}
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 text-text-secondary hover:text-destructive"
                                                    onClick={() => cart.removeItem(item.product.id)}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4 pr-6 pt-6 mb-6">
                            <Separator />
                            <div className="flex justify-between text-base font-medium text-text-primary">
                                <span>Subtotal</span>
                                <span>{formatPrice(cart.getCartTotal())}</span>
                            </div>
                            <p className="text-[11px] text-text-secondary">
                                Shipping and taxes calculated at checkout.
                            </p>
                            <div className="grid gap-2">
                                <Link href="/checkout">
                                    <Button className="w-full" size="lg">Checkout</Button>
                                </Link>
                                <Link href="/cart">
                                    <Button variant="outline" className="w-full">View Cart</Button>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
}
