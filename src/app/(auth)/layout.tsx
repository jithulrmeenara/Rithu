import Link from "next/link";
import Image from "next/image";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="grid min-h-screen lg:grid-cols-2">
            <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24 bg-primary-50">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div className="text-center mb-8">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/logo.png"
                                alt="Rithu by AAha"
                                width={140}
                                height={48}
                                className="h-12 w-auto mx-auto"
                            />
                        </Link>
                    </div>
                    {children}
                </div>
            </div>
            <div className="hidden lg:block relative bg-cover bg-center" style={{ backgroundImage: "url('/auth-bg.jpg')" }}>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-4xl font-heading text-white font-bold text-center px-8 drop-shadow-md">
                        "Jewelry is the most transformative thing you can wear."
                    </h2>
                </div>
            </div>
        </div>
    );
}
