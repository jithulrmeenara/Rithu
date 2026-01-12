import { db } from "../src/lib/db";
import bcrypt from "bcryptjs";

async function createAdminUser() {
    const email = "admin@rithubyaaha.com";
    const password = "admin123456"; // Change this!

    // Check if admin exists
    const existing = await db.user.findUnique({
        where: { email },
    });

    if (existing) {
        console.log("❌ Admin user already exists!");
        return;
    }

    // Create admin user
    const passwordHash = await bcrypt.hash(password, 12);

    const admin = await db.user.create({
        data: {
            email,
            name: "Admin User",
            passwordHash,
            role: "ADMIN",
        },
    });

    console.log("✅ Admin user created successfully!");
    console.log("📧 Email:", email);
    console.log("🔑 Password:", password);
    console.log("🚀 You can now login at: http://localhost:3000/login");
}

createAdminUser()
    .catch(console.error)
    .finally(() => process.exit());
