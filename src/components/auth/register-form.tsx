"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

const registerFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    phone: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<typeof registerFormSchema>;

export function RegisterForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerFormSchema),
    });

    const onSubmit = async (data: RegisterFormValues) => {
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        try {
            // Call registration API
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    phone: data.phone,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Registration failed");
            }

            // Success - show message
            setSuccess(true);

            // Auto sign-in after successful registration
            const signInResult = await signIn("credentials", {
                redirect: false,
                email: data.email,
                password: data.password,
            });

            if (signInResult?.error) {
                setError("Account created, but auto-login failed. Please sign in manually.");
                setTimeout(() => router.push("/login"), 2000);
            } else {
                // Redirect to account or home
                setTimeout(() => router.push("/account"), 1500);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {error && (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            {success && (
                <Alert className="border-green-200 bg-green-50">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                        Account created successfully! Signing you in...
                    </AlertDescription>
                </Alert>
            )}

            <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    disabled={isLoading}
                    {...register("name")}
                />
                {errors.name && (
                    <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    disabled={isLoading}
                    {...register("email")}
                />
                {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    disabled={isLoading}
                    {...register("phone")}
                />
                {errors.phone && (
                    <p className="text-sm text-red-500">{errors.phone.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    disabled={isLoading}
                    {...register("password")}
                />
                {errors.password && (
                    <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    disabled={isLoading}
                    {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                    <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
                )}
            </div>

            <Button
                type="submit"
                className="w-full h-12 bg-[#1a4749] hover:bg-[#1a4749]/90 text-white font-medium tracking-wider rounded-none transition-all duration-300"
                disabled={isLoading}
            >
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating Account...
                    </>
                ) : (
                    "Create Account"
                )}
            </Button>

            <p className="text-xs text-center text-text-secondary">
                By creating an account, you agree to our Terms of Service and Privacy Policy
            </p>
        </form>
    );
}
