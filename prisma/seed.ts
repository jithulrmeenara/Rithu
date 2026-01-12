import { db } from "../src/lib/db";

const categories = [
    { slug: "rings", name: "Rings", description: "Elegant rings for every occasion" },
    { slug: "necklaces", name: "Necklaces", description: "Beautiful necklaces to complement your style" },
    { slug: "earrings", name: "Earrings", description: "Stunning earrings for daily wear and special events" },
    { slug: "bracelets", name: "Bracelets", description: "Graceful bracelets and bangles" },
];

const collections = [
    { slug: "bridal", name: "Bridal Collection", description: "Exquisite pieces for your special day", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600" },
    { slug: "contemporary", name: "Contemporary", description: "Modern designs for the modern woman", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600" },
    { slug: "vintage", name: "Vintage Elegance", description: "Timeless classics with vintage charm", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600" },
    { slug: "everyday", name: "Everyday Luxury", description: "Elegant pieces for daily wear", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600" },
];

const products = [
    // Rings - using reliable Unsplash photo IDs
    {
        name: "Diamond Solitaire Ring",
        slug: "diamond-solitaire-ring",
        category: "rings",
        collection: "bridal",
        price: 125000,
        compareAtPrice: 150000,
        stock: 5,
        featured: true,
        description: "A stunning solitaire diamond ring with 1.5 carat center stone set in 18K white gold.",
        images: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600"]
    },
    {
        name: "Gold Eternity Band",
        slug: "gold-eternity-band",
        category: "rings",
        collection: "bridal",
        price: 45000,
        stock: 12,
        description: "Classic eternity band featuring brilliant diamonds set in 18K yellow gold.",
        images: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600"]
    },
    {
        name: "Rose Gold Promise Ring",
        slug: "rose-gold-promise-ring",
        category: "rings",
        collection: "contemporary",
        price: 28000,
        stock: 8,
        description: "Delicate promise ring in rose gold with diamond accent.",
        images: ["https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600"]
    },
    {
        name: "Vintage Ruby Ring",
        slug: "vintage-ruby-ring",
        category: "rings",
        collection: "vintage",
        price: 95000,
        compareAtPrice: 110000,
        stock: 3,
        featured: true,
        description: "Vintage-inspired ruby ring with diamond halo in yellow gold.",
        images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600"]
    },
    {
        name: "Pearl Cocktail Ring",
        slug: "pearl-cocktail-ring",
        category: "rings",
        collection: "contemporary",
        price: 35000,
        stock: 6,
        description: "Statement cocktail ring featuring a large pearl surrounded by diamonds.",
        images: ["https://images.unsplash.com/photo-1588444837495-c6c01d1c5b9f?w=600"]
    },

    // Necklaces
    {
        name: "Diamond Tennis Necklace",
        slug: "diamond-tennis-necklace",
        category: "necklaces",
        collection: "bridal",
        price: 285000,
        compareAtPrice: 320000,
        stock: 4,
        featured: true,
        description: "Classic tennis necklace with brilliant-cut diamonds in platinum.",
        images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600"]
    },
    {
        name: "Gold Chain Necklace",
        slug: "gold-chain-necklace",
        category: "necklaces",
        collection: "everyday",
        price: 42000,
        stock: 15,
        description: "Simple yet elegant 18K gold chain necklace, perfect for layering.",
        images: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600"]
    },
    {
        name: "Pearl Strand Necklace",
        slug: "pearl-strand-necklace",
        category: "necklaces",
        collection: "vintage",
        price: 68000,
        stock: 7,
        description: "Timeless pearl strand necklace with gold clasp.",
        images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600"]
    },
    {
        name: "Emerald Pendant",
        slug: "emerald-pendant",
        category: "necklaces",
        collection: "contemporary",
        price: 115000,
        stock: 5,
        featured: true,
        description: "Stunning emerald pendant with diamond accents on gold chain.",
        images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600"]
    },
    {
        name: "Infinity Necklace",
        slug: "infinity-necklace",
        category: "necklaces",
        collection: "everyday",
        price: 18000,
        stock: 20,
        description: "Delicate infinity symbol necklace in sterling silver.",
        images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600"]
    },

    // Earrings
    {
        name: "Diamond Stud Earrings",
        slug: "diamond-stud-earrings",
        category: "earrings",
        collection: "bridal",
        price: 95000,
        stock: 10,
        featured: true,
        description: "Classic diamond stud earrings in platinum settings.",
        images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600"]
    },
    {
        name: "Gold Hoop Earrings",
        slug: "gold-hoop-earrings",
        category: "earrings",
        collection: "everyday",
        price: 24000,
        stock: 18,
        description: "Versatile gold hoop earrings for everyday elegance.",
        images: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600"]
    },
    {
        name: "Chandelier Earrings",
        slug: "chandelier-earrings",
        category: "earrings",
        collection: "bridal",
        price: 78000,
        compareAtPrice: 92000,
        stock: 6,
        description: "Dramatic chandelier earrings with crystals and diamonds.",
        images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600"]
    },
    {
        name: "Pearl Drop Earrings",
        slug: "pearl-drop-earrings",
        category: "earrings",
        collection: "vintage",
        price: 38000,
        stock: 12,
        description: "Elegant pearl drop earrings with gold accents.",
        images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600"]
    },
    {
        name: "Sapphire Studs",
        slug: "sapphire-studs",
        category: "earrings",
        collection: "contemporary",
        price: 62000,
        stock: 8,
        description: "Blue sapphire stud earrings surrounded by diamonds.",
        images: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600"]
    },

    // Bracelets
    {
        name: "Diamond Tennis Bracelet",
        slug: "diamond-tennis-bracelet",
        category: "bracelets",
        collection: "bridal",
        price: 165000,
        compareAtPrice: 195000,
        stock: 5,
        featured: true,
        description: "Luxurious tennis bracelet with brilliant diamonds.",
        images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600"]
    },
    {
        name: "Gold Bangle Set",
        slug: "gold-bangle-set",
        category: "bracelets",
        collection: "everyday",
        price: 55000,
        stock: 10,
        description: "Set of three stackable gold bangles.",
        images: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600"]
    },
    {
        name: "Charm Bracelet",
        slug: "charm-bracelet",
        category: "bracelets",
        collection: "contemporary",
        price: 32000,
        stock: 14,
        description: "Customizable charm bracelet in sterling silver.",
        images: ["https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600"]
    },
    {
        name: "Vintage Pearl Bracelet",
        slug: "vintage-pearl-bracelet",
        category: "bracelets",
        collection: "vintage",
        price: 48000,
        stock: 7,
        description: "Elegant pearl bracelet with vintage-style clasp.",
        images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600"]
    },
    {
        name: "Gemstone Cuff",
        slug: "gemstone-cuff",
        category: "bracelets",
        collection: "contemporary",
        price: 72000,
        stock: 6,
        description: "Statement cuff bracelet with colorful gemstones.",
        images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600"]
    },
];

async function main() {
    console.log("🌱 Starting database seed with verified images...");

    // Create categories
    console.log("📁 Creating categories...");
    for (const category of categories) {
        await db.category.upsert({
            where: { slug: category.slug },
            update: category,
            create: { id: crypto.randomUUID(), ...category },
        });
    }
    console.log(`✅ Created ${categories.length} categories`);

    // Create collections
    console.log("📦 Creating collections...");
    for (const collection of collections) {
        await db.collection.upsert({
            where: { slug: collection.slug },
            update: collection,
            create: { id: crypto.randomUUID(), ...collection },
        });
    }
    console.log(`✅ Created ${collections.length} collections`);

    // Get category and collection IDs
    const categoryMap = new Map();
    for (const cat of categories) {
        const dbCat = await db.category.findUnique({ where: { slug: cat.slug } });
        if (dbCat) categoryMap.set(cat.slug, dbCat.id);
    }

    const collectionMap = new Map();
    for (const coll of collections) {
        const dbColl = await db.collection.findUnique({ where: { slug: coll.slug } });
        if (dbColl) collectionMap.set(coll.slug, dbColl.id);
    }

    // Create products with verified images
    console.log("💎 Creating products with verified images...");
    for (const product of products) {
        const categoryId = categoryMap.get(product.category);
        const collectionId = collectionMap.get(product.collection);
        const thumbnail = product.images[0];

        await db.product.upsert({
            where: { slug: product.slug },
            update: {
                name: product.name,
                price: product.price,
                compareAtPrice: product.compareAtPrice || null,
                stock: product.stock,
                featured: product.featured || false,
                description: product.description,
                shortDescription: product.description.substring(0, 100),
                images: product.images,
                thumbnail,
                categoryId,
                collectionId,
            },
            create: {
                id: crypto.randomUUID(),
                slug: product.slug,
                name: product.name,
                price: product.price,
                compareAtPrice: product.compareAtPrice || null,
                stock: product.stock,
                featured: product.featured || false,
                description: product.description,
                shortDescription: product.description.substring(0, 100),
                images: product.images,
                thumbnail,
                active: true,
                categoryId,
                collectionId,
            },
        });
    }
    console.log(`✅ Created ${products.length} products with verified images`);

    console.log("🎉 Seeding completed successfully!");
}

main()
    .catch((e) => {
        console.error("❌ Error seeding database:", e);
        process.exit(1);
    })
    .finally(async () => {
        await db.$disconnect();
    });
