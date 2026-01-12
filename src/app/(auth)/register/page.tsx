import { Suspense } from "react";
import Link from "next/link";
import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
    return (
        <div className="space-y-6">
            <div className="text-center">
                <h1 className="font-heading text-3xl font-light tracking-tight text-[#1a4749]">
                    Create Account
                </h1>
                <p className="mt-2 text-sm text-gray-600">
                    Join Rithu by AAha for an exclusive jewelry experience
                </p>
            </div>

            <Suspense fallback={<div className="text-center py-8">Loading form...</div>}>
                <RegisterForm />
            </Suspense>

            <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                    href="/login"
                    className="font-medium text-[#D4AF37] hover:text-[#C4941F] transition-colors"
                >
                    Sign in
                </Link>
            </p>
        </div>
    );
}
