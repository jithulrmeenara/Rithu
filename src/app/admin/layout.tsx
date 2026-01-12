import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { AdminSidebar } from "@/components/admin/sidebar";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    // Protect admin routes - only ADMIN role can access
    if (!session?.user || session.user.role !== "ADMIN") {
        redirect("/login");
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <AdminSidebar />
            <main className="lg:pl-64">
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
