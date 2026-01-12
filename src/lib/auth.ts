import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

async function getUser(email: string) {
    try {
        const user = await db.user.findUnique({
            where: { email },
        });
        return user;
    } catch (error) {
        console.error("Failed to fetch user:", error);
        throw new Error("Failed to fetch user.");
    }
}

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
            if (!token.sub) return token;

            const user = await getUser(token.email!);
            if (!user) return token;

            token.role = user.role;
            return token;
        },
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    if (!user || !user.passwordHash) return null;

                    const passwordsMatch = await bcrypt.compare(password, user.passwordHash);
                    if (passwordsMatch) return user;
                }

                console.log("Invalid credentials");
                return null;
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.AUTH_SECRET,
});
