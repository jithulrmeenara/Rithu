import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

// MOCK MODE: Auth disabled for deployment without database
// This is a temporary measure for testing/demo purposes

export const { auth, signIn, signOut, handlers } = NextAuth({
    pages: {
        signIn: "/login",
        newUser: "/register",
    },
    callbacks: {
        async session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            if (token.role && session.user) {
                session.user.role = token.role as "USER" | "ADMIN";
            }
            return session;
        },
        async jwt({ token }) {
            // Mock mode - no database lookup
            token.role = "USER";
            return token;
        },
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                // Mock mode - authentication disabled
                console.log("Auth disabled in mock mode");
                return null;
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET,
});
