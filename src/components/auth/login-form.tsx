"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams?.get("callbackUrl") || "/account";

    const [email, setEmail] = useState("admin@rithubyaaha.com");
    const [password, setPassword] = useState("admin123456");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        console.log("[LOGIN] Starting login...", { email, callbackUrl });

        try {
            const result = await signIn("credentials", {
                redirect: false,
                email: email,
                password: password,
            });

            console.log("[LOGIN] SignIn result:", result);

            if (result?.error) {
                console.error("[LOGIN] Error:", result.error);
                setError("Invalid email or password");
                setIsLoading(false);
                return;
            }

            if (result?.ok) {
                console.log("[LOGIN] Success! Redirecting to:", callbackUrl);
                // Use window.location instead of router.push to avoid Fast Refresh issues
                window.location.href = callbackUrl;
                return;
            }

            // Unexpected state
            console.warn("[LOGIN] Unexpected result:", result);
            setError("Login failed. Please try again.");
            setIsLoading(false);
        } catch (err: any) {
            console.error("[LOGIN] Exception:", err);
            setError("An error occurred: " + err.message);
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
                <div className="rounded-md bg-red-50 p-3 text-sm text-red-600 border border-red-200">
                    {error}
                </div>
            )}

            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    required
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#1a4749] focus:outline-none focus:ring-1 focus:ring-[#1a4749]"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    required
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#1a4749] focus:outline-none focus:ring-1 focus:ring-[#1a4749]"
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1a4749] text-white py-3 rounded-md hover:bg-[#1a4749]/90 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
                {isLoading ? "Signing In..." : "Sign In"}
            </button>

            <p className="text-xs text-center text-gray-500 mt-4">
                Check browser console (F12) for debugging info
            </p>
        </form>
    );
}
