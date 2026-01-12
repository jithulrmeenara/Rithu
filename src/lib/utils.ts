import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with proper precedence
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Format price in Indian Rupees
 */
export function formatPrice(
    price: number | string,
    options?: {
        currency?: string;
        notation?: Intl.NumberFormatOptions["notation"];
    }
) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: options?.currency || "INR",
        notation: options?.notation || "standard",
    }).format(Number(price));
}

/**
 * Format date in readable format
 */
export function formatDate(date: Date | string, format: "long" | "short" = "long") {
    const d = typeof date === "string" ? new Date(date) : date;

    if (format === "short") {
        return new Intl.DateTimeFormat("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }).format(d);
    }

    return new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(d);
}

/**
 * Generate unique order number
 * Format: ORD-YYYY-XXXXX
 */
export function generateOrderNumber(): string {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 100000)
        .toString()
        .padStart(5, "0");
    return `ORD-${year}-${random}`;
}

/**
 * Calculate discount percentage
 */
export function calculateDiscount(originalPrice: number, salePrice: number): number {
    if (originalPrice <= salePrice) return 0;
    return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
}

/**
 * Slugify string for URLs
 */
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
}

/**
 * Check if value is empty
 */
export function isEmpty(value: unknown): boolean {
    if (value === null || value === undefined) return true;
    if (typeof value === "string") return value.trim().length === 0;
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === "object") return Object.keys(value).length === 0;
    return false;
}
