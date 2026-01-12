"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/store/cart";
import { ProductWithRelations } from "@/lib/actions/products";
import { Check } from "lucide-react";

interface AddToCartButtonProps {
    product: ProductWithRelations;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
    const cart = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        cart.addItem(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <Button
            size="lg"
            className="w-full text-base transition-all duration-300"
            onClick={handleAddToCart}
            disabled={isAdded}
        >
            {isAdded ? (
                <>
                    <Check className="mr-2 h-5 w-5" />
                    Added to Cart
                </>
            ) : (
                <>
                    Add to Cart
                </>
            )}
        </Button>
    );
}
