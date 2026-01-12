import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { AccountNav } from "./account-nav";

export default async function AccountLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="container py-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                <aside className="lg:w-64">
                    <div className="sticky top-24 space-y-4">
                        <div className="rounded-lg border border-primary-200 p-4">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 font-bold text-accent">
                                    {session.user?.name?.[0]?.toUpperCase() || "U"}
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="truncate text-sm font-medium text-text-primary">
                                        {session.user?.name || "User"}
                                    </p>
                                    <p className="truncate text-xs text-text-secondary">
                                        {session.user?.email}
                                    </p>
                                </div>
                            </div>
                            <AccountNav />
                        </div>
                    </div>
                </aside>
                <div className="flex-1">{children}</div>
            </div>
        </div>
    );
}
