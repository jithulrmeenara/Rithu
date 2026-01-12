import { Suspense } from "react";
import Link from "next/link";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
    return (
        <div className="space-y-6">
            <div className="text-center">
                <h1 className="font-heading text-2xl font-bold tracking-tight text-text-primary">
                    Welcome Back
                </h1>
                <p className="mt-2 text-sm text-text-secondary">
                    Sign in to access your wishlist and orders
                </p>
            </div>
            <Suspense fallback={<div>Loading form...</div>}>
                <LoginForm />
            </Suspense>

            <p className="text-center text-sm text-text-secondary">
                Don&apos;t have an account?{" "}
                <Link
                    href="/register"
                    className="font-medium text-accent hover:text-accent-dark transition-colors"
                >
                    Sign up
                </Link>
            </p>
        </div>
    );
}
