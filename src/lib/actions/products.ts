"use server";

import { getAllProducts, getProductById, getFeaturedProducts as getMockFeaturedProducts } from "@/lib/mockData";
import { type Product } from "@prisma/client";

// MOCK MODE: Using mock data instead of database for deployment

// Serialized product type for client components (Decimal converted to number)
export type ProductWithRelations = Omit<Product, 'price' | 'compareAtPrice' | 'cost'> & {
    price: number;
    compareAtPrice: number | null;
    cost: number | null;
    category: { name: string; slug: string } | null;
    collection: { name: string; slug: string } | null;
};

export type GetProductsParams = {
    page?: number;
    limit?: number;
    query?: string;
    category?: string;
    collection?: string;
    sort?: "price-asc" | "price-desc" | "newest" | "featured";
    minPrice?: number;
    maxPrice?: number;
};

export async function getProducts({
    page = 1,
    limit = 12,
    query,
    category,
    collection,
    sort = "newest",
    minPrice,
    maxPrice,
}: GetProductsParams = {}) {
    try {
        let products = getAllProducts();

        // Filter by query
        if (query) {
            const lowerQuery = query.toLowerCase();
            products = products.filter(p =>
                p.name.toLowerCase().includes(lowerQuery) ||
                p.description.toLowerCase().includes(lowerQuery)
            );
        }

        // Filter by category
        if (category) {
            products = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
        }

        // Filter by price range
        if (minPrice) {
            products = products.filter(p => p.price >= minPrice);
        }
        if (maxPrice) {
            products = products.filter(p => p.price <= maxPrice);
        }

        // Sort
        switch (sort) {
            case "price-asc":
                products.sort((a, b) => a.price - b.price);
                break;
            case "price-desc":
                products.sort((a, b) => b.price - a.price);
                break;
            case "featured":
                products.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
                break;
            case "newest":
            default:
                products.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
                break;
        }

        const total = products.length;
        const skip = (page - 1) * limit;
        const paginatedProducts = products.slice(skip, skip + limit);

        // Add required fields
        const serializedProducts = paginatedProducts.map(p => ({
            ...p,
            slug: p.name.toLowerCase().replace(/\s+/g, '-'),
            shortDescription: p.description,
            active: true,
            stock: 10,
            sku: `SKU-${p.id}`,
            barcode: null,
            tags: [],
            metaTitle: null,
            metaDescription: null,
            handle: p.name.toLowerCase().replace(/\s+/g, '-'),
            categoryId: '1',
            collectionId: null,
            category: { name: p.category, slug: p.category.toLowerCase() },
            collection: null,
            compareAtPrice: p.originalPrice !== p.price ? p.originalPrice : null,
            cost: null,
            trackInventory: false,
            thumbnail: p.images[0] || null,
            materials: p.material || null,
            dimensions: p.weight || null,
            specifications: null,
        }));

        return {
            products: serializedProducts as ProductWithRelations[],
            pagination: {
                total,
                pages: Math.ceil(total / limit),
                page,
                limit,
            },
        };
    } catch (error) {
        console.error("Error fetching products:", error);
        return { products: [], pagination: { total: 0, pages: 0, page: 1, limit } };
    }
}

export async function getProductBySlug(slug: string) {
    try {
        const products = getAllProducts();
        const product = products.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === slug);

        if (!product) return null;

        return {
            ...product,
            slug,
            shortDescription: product.description,
            active: true,
            stock: 10,
            sku: `SKU-${product.id}`,
            barcode: null,
            tags: [],
            metaTitle: null,
            metaDescription: null,
            handle: slug,
            categoryId: '1',
            collectionId: null,
            category: { name: product.category, slug: product.category.toLowerCase() },
            collection: null,
            compareAtPrice: product.originalPrice !== product.price ? product.originalPrice : null,
            cost: null,
            reviews: [],
        };
    } catch (error) {
        console.error(`Error fetching product ${slug}:`, error);
        return null;
    }
}

export async function getFeaturedProducts() {
    try {
        const products = getMockFeaturedProducts();

        const serializedProducts = products.map(p => ({
            ...p,
            slug: p.name.toLowerCase().replace(/\s+/g, '-'),
            shortDescription: p.description,
            active: true,
            stock: 10,
            sku: `SKU-${p.id}`,
            barcode: null,
            tags: [],
            metaTitle: null,
            metaDescription: null,
            handle: p.name.toLowerCase().replace(/\s+/g, '-'),
            categoryId: '1',
            collectionId: null,
            category: { name: p.category, slug: p.category.toLowerCase() },
            collection: null,
            compareAtPrice: p.originalPrice !== p.price ? p.originalPrice : null,
            cost: null,
            trackInventory: false,
            thumbnail: p.images[0] || null,
            materials: p.material || null,
            dimensions: p.weight || null,
            specifications: null,
        }));

        return serializedProducts as ProductWithRelations[];
    } catch (error) {
        console.error("Error fetching featured products:", error);
        return [];
    }
}
