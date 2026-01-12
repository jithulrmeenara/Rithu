"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { getFilterData } from "@/lib/actions/filters";

export function ProductFilters() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [categories, setCategories] = useState<{ id: string; slug: string; name: string }[]>([]);
    const [collections, setCollections] = useState<{ id: string; slug: string; name: string }[]>([]);
    const [priceMin, setPriceMin] = useState(0);
    const [priceMax, setPriceMax] = useState(500000);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedCollection, setSelectedCollection] = useState("");

    // Load filter data from database
    useEffect(() => {
        getFilterData().then((data) => {
            console.log("[FILTERS] Loaded data:", data);
            setCategories(data.categories);
            setCollections(data.collections);
        });
    }, []);

    // Sync with URL params
    useEffect(() => {
        const category = searchParams?.get("category") || "";
        const collection = searchParams?.get("collection") || "";
        const min = searchParams?.get("minPrice");
        const max = searchParams?.get("maxPrice");

        setSelectedCategory(category);
        setSelectedCollection(collection);
        if (min) setPriceMin(Number(min));
        if (max) setPriceMax(Number(max));
    }, [searchParams]);

    const handleApplyFilters = () => {
        console.log("[FILTERS] Applying filters:", {
            category: selectedCategory,
            collection: selectedCollection,
            priceMin,
            priceMax
        });

        const params = new URLSearchParams(searchParams?.toString() || "");

        // Category filter
        if (selectedCategory) {
            params.set("category", selectedCategory);
        } else {
            params.delete("category");
        }

        // Collection filter
        if (selectedCollection) {
            params.set("collection", selectedCollection);
        } else {
            params.delete("collection");
        }

        // Price filter
        if (priceMin > 0 || priceMax < 500000) {
            params.set("minPrice", priceMin.toString());
            params.set("maxPrice", priceMax.toString());
        } else {
            params.delete("minPrice");
            params.delete("maxPrice");
        }

        // Reset page
        params.set("page", "1");

        const newUrl = `${pathname}?${params.toString()}`;
        console.log("[FILTERS] Navigating to:", newUrl);
        router.push(newUrl);
    };

    const handleClearFilters = () => {
        console.log("[FILTERS] Clearing all filters");
        setSelectedCategory("");
        setSelectedCollection("");
        setPriceMin(0);
        setPriceMax(500000);
        router.push(pathname || "/shop");
    };

    const hasFilters = selectedCategory || selectedCollection || priceMin > 0 || priceMax < 500000;

    return (
        <div className="space-y-8 bg-white p-6 border border-gray-200">
            <h3 className="font-heading text-xl font-light text-[#1a4749]">Filters</h3>

            {/* Categories */}
            <div>
                <h4 className="mb-4 font-medium text-gray-900">Categories</h4>
                <div className="space-y-3">
                    {categories.map((category) => (
                        <div key={category.id} className="flex items-center space-x-2">
                            <Checkbox
                                id={`cat-${category.slug}`}
                                checked={selectedCategory === category.slug}
                                onCheckedChange={(checked) => {
                                    console.log("[FILTERS] Category changed:", category.slug, checked);
                                    setSelectedCategory(checked ? category.slug : "");
                                }}
                            />
                            <Label
                                htmlFor={`cat-${category.slug}`}
                                className="cursor-pointer text-sm text-gray-700"
                            >
                                {category.name}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            <Separator />

            {/* Price Range */}
            <div>
                <h4 className="mb-4 font-medium text-gray-900">Price Range</h4>
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <input
                            type="number"
                            value={priceMin}
                            onChange={(e) => {
                                const val = Number(e.target.value);
                                console.log("[FILTERS] Min price changed:", val);
                                setPriceMin(val);
                            }}
                            placeholder="Min"
                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                        />
                        <input
                            type="number"
                            value={priceMax}
                            onChange={(e) => {
                                const val = Number(e.target.value);
                                console.log("[FILTERS] Max price changed:", val);
                                setPriceMax(val);
                            }}
                            placeholder="Max"
                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                        />
                    </div>
                </div>
            </div>

            <Separator />

            {/* Collections */}
            <div>
                <h4 className="mb-4 font-medium text-gray-900">Collections</h4>
                <div className="space-y-3">
                    {collections.map((collection) => (
                        <div key={collection.id} className="flex items-center space-x-2">
                            <Checkbox
                                id={`col-${collection.slug}`}
                                checked={selectedCollection === collection.slug}
                                onCheckedChange={(checked) => {
                                    console.log("[FILTERS] Collection changed:", collection.slug, checked);
                                    setSelectedCollection(checked ? collection.slug : "");
                                }}
                            />
                            <Label
                                htmlFor={`col-${collection.slug}`}
                                className="cursor-pointer text-sm text-gray-700"
                            >
                                {collection.name}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-4">
                <Button
                    onClick={() => {
                        console.log("[FILTERS] Apply button clicked");
                        handleApplyFilters();
                    }}
                    className="w-full bg-[#1a4749] hover:bg-[#1a4749]/90 text-white rounded-none h-11"
                >
                    Apply Filters
                </Button>
                {hasFilters && (
                    <Button
                        onClick={() => {
                            console.log("[FILTERS] Clear button clicked");
                            handleClearFilters();
                        }}
                        variant="outline"
                        className="w-full border-gray-300 rounded-none h-11"
                    >
                        Clear All
                    </Button>
                )}
            </div>

            <div className="text-xs text-gray-500 pt-4">
                <p>Active filters:</p>
                <p>Category: {selectedCategory || "None"}</p>
                <p>Collection: {selectedCollection || "None"}</p>
                <p>Price: ₹{priceMin.toLocaleString()} - ₹{priceMax.toLocaleString()}</p>
            </div>
        </div>
    );
}
