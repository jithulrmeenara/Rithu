import { type DefaultSession } from "next-auth";

// Extend the built-in session types
declare module "next-auth" {
    interface Session {
        user: {
            role: "USER" | "ADMIN";
        } & DefaultSession["user"];
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        role: "USER" | "ADMIN";
    }
}
