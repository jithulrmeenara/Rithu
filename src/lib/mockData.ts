// Mock data for deployment without database
// This file contains all the mock data needed to run the site on Vercel

export const mockProducts = [
    {
        id: "1",
        name: "Diamond Solitaire Ring",
        description: "Exquisite 18K white gold ring featuring a brilliant cut diamond",
        price: 125000,
        originalPrice: 150000,
        category: "RINGS",
        images: ["/placeholder-ring-1.jpg"],
        inStock: true,
        featured: true,
        material: "18K White Gold",
        gemstone: "Diamond",
        weight: "3.5g",
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
    },
    {
        id: "2",
        name: "Emerald Earrings",
        description: "Stunning emerald drop earrings set in 22K yellow gold",
        price: 89000,
        originalPrice: 89000,
        category: "EARRINGS",
        images: ["/placeholder-earring-1.jpg"],
        inStock: true,
        featured: true,
        material: "22K Yellow Gold",
        gemstone: "Emerald",
        weight: "5.2g",
        createdAt: new Date("2024-01-05"),
        updatedAt: new Date("2024-01-05"),
    },
    {
        id: "3",
        name: "Ruby Necklace Set",
        description: "Traditional ruby necklace with matching earrings in 22K gold",
        price: 245000,
        originalPrice: 280000,
        category: "NECKLACES",
        images: ["/placeholder-necklace-1.jpg"],
        inStock: true,
        featured: true,
        material: "22K Yellow Gold",
        gemstone: "Ruby",
        weight: "45.8g",
        createdAt: new Date("2024-01-10"),
        updatedAt: new Date("2024-01-10"),
    },
    {
        id: "4",
        name: "Gold Bangles Pair",
        description: "Classic gold bangles with intricate design work",
        price: 185000,
        originalPrice: 185000,
        category: "BANGLES",
        images: ["/placeholder-bangle-1.jpg"],
        inStock: true,
        featured: false,
        material: "22K Yellow Gold",
        gemstone: "None",
        weight: "38.5g",
        createdAt: new Date("2024-01-15"),
        updatedAt: new Date("2024-01-15"),
    },
    {
        id: "5",
        name: "Sapphire Pendant",
        description: "Blue sapphire pendant in white gold chain",
        price: 67000,
        originalPrice: 75000,
        category: "PENDANTS",
        images: ["/placeholder-pendant-1.jpg"],
        inStock: true,
        featured: false,
        material: "18K White Gold",
        gemstone: "Sapphire",
        weight: "4.2g",
        createdAt: new Date("2024-01-20"),
        updatedAt: new Date("2024-01-20"),
    },
    {
        id: "6",
        name: "Pearl Bracelet",
        description: "Freshwater pearl bracelet with gold clasp",
        price: 45000,
        originalPrice: 50000,
        category: "BRACELETS",
        images: ["/placeholder-bracelet-1.jpg"],
        inStock: true,
        featured: false,
        material: "18K Yellow Gold",
        gemstone: "Pearl",
        weight: "12.5g",
        createdAt: new Date("2024-01-25"),
        updatedAt: new Date("2024-01-25"),
    },
];

export const mockCollections = [
    {
        id: "1",
        name: "Bridal Collection",
        description: "Exquisite pieces perfect for your special day",
        imageUrl: "/placeholder-collection-bridal.jpg",
        productCount: 12,
    },
    {
        id: "2",
        name: "Diamond Classics",
        description: "Timeless diamond jewelry for every occasion",
        imageUrl: "/placeholder-collection-diamond.jpg",
        productCount: 8,
    },
    {
        id: "3",
        name: "Gold Heritage",
        description: "Traditional gold jewelry with modern appeal",
        imageUrl: "/placeholder-collection-gold.jpg",
        productCount: 15,
    },
];

export const mockUsers = [
    {
        id: "1",
        name: "Test User",
        email: "test@example.com",
        role: "USER",
        createdAt: new Date("2024-01-01"),
    },
];

export const mockOrders = [
    {
        id: "1",
        userId: "1",
        total: 125000,
        status: "DELIVERED",
        createdAt: new Date("2024-01-15"),
        items: [
            {
                productId: "1",
                productName: "Diamond Solitaire Ring",
                quantity: 1,
                price: 125000,
            },
        ],
    },
];

export const mockWishlist = [
    {
        id: "1",
        userId: "1",
        productId: "2",
        createdAt: new Date("2024-01-20"),
    },
];

// Helper functions to simulate database queries

export function getProductById(id: string) {
    return mockProducts.find((p) => p.id === id) || null;
}

export function getAllProducts() {
    return mockProducts;
}

export function getFeaturedProducts() {
    return mockProducts.filter((p) => p.featured);
}

export function getProductsByCategory(category: string) {
    return mockProducts.filter((p) => p.category === category);
}

export function getAllCollections() {
    return mockCollections;
}

export function getCollectionById(id: string) {
    return mockCollections.find((c) => c.id === id) || null;
}

export function getUserById(id: string) {
    return mockUsers.find((u) => u.id === id) || null;
}

export function getUserOrders(userId: string) {
    return mockOrders.filter((o) => o.userId === userId);
}

export function getUserWishlist(userId: string) {
    const wishlistItems = mockWishlist.filter((w) => w.userId === userId);
    return wishlistItems.map((item) => {
        const product = getProductById(item.productId);
        return {
            ...item,
            product,
        };
    });
}
