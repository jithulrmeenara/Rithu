
import Image from "next/image";

export function Logo({ className, variant = 'light' }: { className?: string; variant?: 'light' | 'dark' }) {
    const darkFilter = "brightness(0) saturate(100%) invert(20%) sepia(21%) saturate(2335%) hue-rotate(136deg) brightness(97%) contrast(92%)";

    return (
        <div className={`relative h-12 w-auto ${className}`}>
            <Image
                src="/logo.png"
                alt="Rithu by AAha"
                width={150}
                height={50}
                className="h-full w-auto object-contain"
                style={variant === 'dark' ? { filter: darkFilter } : undefined}
                priority
            />
        </div>
    );
}
