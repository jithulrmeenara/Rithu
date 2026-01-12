"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/store/cart";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
    const cart = useCart();
    const subtotal = cart.getCartTotal();

    if (cart.items.length === 0) {
        return (
            <div className="container flex min-h-[60vh] flex-col items-center justify-center text-center">
                <h1 className="font-heading text-3xl font-bold text-text-primary">Your Cart is Empty</h1>
                <p className="mt-4 text-text-secondary">Looks like you haven't added anything to your cart yet.</p>
                <Link href="/shop" className="mt-8">
                    <Button size="lg">Start Shopping</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-12">
            <h1 className="mb-8 font-heading text-3xl font-bold text-text-primary">Shopping Cart</h1>

            <div className="grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-8">
                    <ul className="divide-y divide-primary-200 border-t border-b border-primary-200">
                        {cart.items.map((item) => (
                            <li key={item.product.id} className="flex py-6">
                                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md border border-primary-200 sm:h-32 sm:w-32">
                                    <Image
                                        src={(item.product.images as string[])?.[0] || "/placeholder-jewelry.jpg"}
                                        alt={item.product.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                        <div>
                                            <div className="flex justify-between">
                                                <h3 className="text-sm">
                                                    <Link
                                                        href={`/products/${item.product.slug}`}
                                                        className="font-medium text-text-primary hover:text-accent"
                                                    >
                                                        {item.product.name}
                                                    </Link>
                                                </h3>
                                            </div>
                                            <p className="mt-1 text-sm font-medium text-text-secondary">
                                                {formatPrice(Number(item.product.price))}
                                            </p>
                                        </div>

                                        <div className="mt-4 sm:mt-0 sm:pr-9">
                                            <div className="flex items-center space-x-2">
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                    onClick={() => cart.updateQuantity(item.product.id, item.quantity - 1)}
                                                >
                                                    <Minus className="h-3 w-3" />
                                                </Button>
                                                <span className="w-8 text-center text-sm">{item.quantity}</span>
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                    onClick={() => cart.updateQuantity(item.product.id, item.quantity + 1)}
                                                >
                                                    <Plus className="h-3 w-3" />
                                                </Button>
                                            </div>

                                            <div className="absolute right-0 top-0">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="-mr-2 text-text-secondary hover:text-destructive"
                                                    onClick={() => cart.removeItem(item.product.id)}
                                                >
                                                    <span className="sr-only">Remove</span>
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-4">
                    <div className="rounded-lg bg-primary-50 p-6 lg:p-8">
                        <h2 className="text-lg font-medium text-text-primary">Order Summary</h2>

                        <dl className="mt-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <dt className="text-sm text-text-secondary">Subtotal</dt>
                                <dd className="text-sm font-medium text-text-primary">{formatPrice(subtotal)}</dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-primary-200 pt-4">
                                <dt className="flex items-center text-sm text-text-secondary">
                                    <span>Shipping estimate</span>
                                </dt>
                                <dd className="text-sm font-medium text-text-primary">Free</dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-primary-200 pt-4">
                                <dt className="text-base font-medium text-text-primary">Order total</dt>
                                <dd className="text-base font-medium text-text-primary">{formatPrice(subtotal)}</dd>
                            </div>
                        </dl>

                        <div className="mt-6">
                            <Link href="/checkout">
                                <Button className="w-full" size="lg">
                                    Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
