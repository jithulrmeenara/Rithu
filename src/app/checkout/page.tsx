"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import Script from "next/script";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/store/cart";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";

// Razorpay type definition for TypeScript
declare global {
    interface Window {
        Razorpay: any;
    }
}

const checkoutSchema = z.object({
    email: z.string().email(),
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    address: z.string().min(5),
    city: z.string().min(2),
    postalCode: z.string().min(5),
    country: z.string().min(2),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
    const cart = useCart();
    const [isProcessing, setIsProcessing] = useState(false);
    const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

    const form = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutSchema),
        defaultValues: {
            email: "",
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            postalCode: "",
            country: "India",
        },
    });

    const subtotal = cart.getCartTotal();
    const shipping = 0;
    const total = subtotal + shipping;

    const handlePayment = async (data: CheckoutFormValues) => {
        if (!isRazorpayLoaded) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        setIsProcessing(true);

        try {
            // 1. Create Order on Server
            const res = await fetch("/api/checkout/create-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items: cart.items }),
            });

            const orderData = await res.json();

            if (!res.ok) {
                throw new Error(orderData.error || "Failed to create order");
            }

            // 2. Initialize Razorpay Checkout
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Add this to .env
                amount: orderData.amount,
                currency: orderData.currency,
                name: "Rithu by AAha",
                description: "Luxury Jewelry Purchase",
                image: "https://rithubyaaha.com/logo.png", // Replace with your logo URL
                order_id: orderData.orderId,
                handler: async function (response: any) {
                    // 3. Verify Payment
                    // In a real app, verify signature on backend: /api/checkout/verify-payment
                    // For now, redirect to success
                    /*
                    const verifyRes = await fetch("/api/checkout/verify", { ... });
                    */

                    console.log("Payment Success:", response);
                    window.location.href = `/checkout/success?payment_id=${response.razorpay_payment_id}`;
                    cart.clearCart();
                },
                prefill: {
                    name: `${data.firstName} ${data.lastName}`,
                    email: data.email,
                    contact: "", // You could add a phone field
                },
                notes: {
                    address: `${data.address}, ${data.city}, ${data.postalCode}`,
                },
                theme: {
                    color: "#Dfae58", // Accent color
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();

        } catch (error) {
            console.error("Payment Error:", error);
            alert("Something went wrong processing your payment.");
        } finally {
            setIsProcessing(false);
        }
    };

    if (cart.items.length === 0) {
        return (
            <div className="container flex min-h-[60vh] flex-col items-center justify-center">
                <h1 className="font-heading text-2xl font-bold">Your cart is empty</h1>
                <Link href="/shop" className="mt-4 text-accent hover:underline">
                    Return to Shop
                </Link>
            </div>
        );
    }

    return (
        <div className="container grid grid-cols-1 gap-12 py-12 lg:grid-cols-2">
            <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
                onLoad={() => setIsRazorpayLoaded(true)}
            />

            {/* Left Column: Form */}
            <div>
                <div className="mb-6 flex items-center gap-2">
                    <Link href="/cart" className="text-text-secondary hover:text-text-primary">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                    <h1 className="font-heading text-2xl font-bold">Checkout</h1>
                </div>

                <form onSubmit={form.handleSubmit(handlePayment)} className="space-y-6">
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold">Contact Information</h2>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" {...form.register("email")} />
                            {form.formState.errors.email && (
                                <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
                            )}
                        </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold">Shipping Address</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" {...form.register("firstName")} />
                                {form.formState.errors.firstName && (
                                    <p className="text-xs text-destructive">{form.formState.errors.firstName.message}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input id="lastName" {...form.register("lastName")} />
                                {form.formState.errors.lastName && (
                                    <p className="text-xs text-destructive">{form.formState.errors.lastName.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <Input id="address" {...form.register("address")} />
                            {form.formState.errors.address && (
                                <p className="text-xs text-destructive">{form.formState.errors.address.message}</p>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="city">City</Label>
                                <Input id="city" {...form.register("city")} />
                                {form.formState.errors.city && (
                                    <p className="text-xs text-destructive">{form.formState.errors.city.message}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="postalCode">Postal Code</Label>
                                <Input id="postalCode" {...form.register("postalCode")} />
                                {form.formState.errors.postalCode && (
                                    <p className="text-xs text-destructive">{form.formState.errors.postalCode.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>
                            <Input id="country" {...form.register("country")} disabled />
                        </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full mt-6" disabled={isProcessing || !isRazorpayLoaded}>
                        {isProcessing ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Processing...
                            </>
                        ) : (
                            `Pay ${formatPrice(total)}`
                        )}
                    </Button>
                    <p className="text-center text-xs text-text-secondary">Secured by Razorpay</p>
                </form>
            </div>

            {/* Order Summary */}
            <div className="rounded-lg bg-primary-50 p-6 lg:p-8 h-fit">
                <h2 className="mb-6 font-heading text-lg font-semibold">Order Summary</h2>
                <ul className="mb-6 space-y-4">
                    {cart.items.map((item) => (
                        <li key={item.product.id} className="flex gap-4">
                            <div className="relative h-16 w-16 overflow-hidden rounded-md border border-primary-200 bg-white">
                                <Image
                                    src={(item.product.images as string[])?.[0] || "/placeholder-jewelry.jpg"}
                                    alt={item.product.name}
                                    fill
                                    className="object-cover"
                                />
                                <span className="absolute right-0 top-0 flex h-5 w-5 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-text-secondary text-xs font-bold text-white">
                                    {item.quantity}
                                </span>
                            </div>
                            <div className="flex flex-1 items-start justify-between">
                                <div className="space-y-1">
                                    <h3 className="text-sm font-medium text-text-primary">{item.product.name}</h3>
                                    <p className="text-xs text-text-secondary">Size: Standard</p>
                                </div>
                                <p className="text-sm font-semibold text-text-primary">
                                    {formatPrice(Number(item.product.price) * item.quantity)}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>

                <Separator className="my-6" />

                <div className="space-y-2">
                    <div className="flex justify-between text-sm text-text-secondary">
                        <span>Subtotal</span>
                        <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-text-secondary">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                </div>

                <Separator className="my-6" />

                <div className="flex justify-between text-lg font-bold text-text-primary">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                </div>
            </div>
        </div>
    );
}
