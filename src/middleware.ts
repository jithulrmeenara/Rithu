import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    const { nextUrl } = req;

    const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth");
    const isAuthRoute = nextUrl.pathname.startsWith("/login") || nextUrl.pathname.startsWith("/register");
    const isAdminRoute = nextUrl.pathname.startsWith("/admin");
    const isCheckoutRoute = nextUrl.pathname.startsWith("/checkout");
    const isAccountRoute = nextUrl.pathname.startsWith("/account");

    // Always allow API auth routes
    if (isApiAuthRoute) {
        return NextResponse.next();
    }

    // Redirect to /shop if logged in and trying to access auth pages
    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL("/shop", nextUrl));
        }
        return NextResponse.next();
    }

    // Protect admin, checkout, and account routes
    if (!isLoggedIn && (isAdminRoute || isCheckoutRoute || isAccountRoute)) {
        let callbackUrl = nextUrl.pathname;
        if (nextUrl.search) {
            callbackUrl += nextUrl.search;
        }

        const encodedCallbackUrl = encodeURIComponent(callbackUrl);
        return NextResponse.redirect(
            new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl)
        );
    }

    // Protect Admin routes for non-admin users
    if (isAdminRoute && req.auth?.user?.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/", nextUrl));
    }

    return NextResponse.next();
});

// Invoked on these paths
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
