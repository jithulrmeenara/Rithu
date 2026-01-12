"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Search } from "lucide-react";

interface Product {
    id: string;
    name: string;
    price: any;
    stock: number;
    active: boolean;
    category: { name: string } | null;
    thumbnail: string | null;
}

interface ProductsTableProps {
    products: Product[];
}

export function ProductsTable({ products }: ProductsTableProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-4">
            {/* Search */}
            <div className="relative max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8"
                />
            </div>

            {/* Table */}
            <div className="border rounded-lg">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Product</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Stock</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredProducts.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell className="font-medium">
                                    {product.name}
                                </TableCell>
                                <TableCell>
                                    {product.category?.name || "Uncategorized"}
                                </TableCell>
                                <TableCell>
                                    ₹{Number(product.price).toLocaleString("en-IN")}
                                </TableCell>
                                <TableCell>
                                    <Badge variant={product.stock < 10 ? "destructive" : "default"}>
                                        {product.stock} units
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Badge variant={product.active ? "default" : "secondary"}>
                                        {product.active ? "Active" : "Inactive"}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right space-x-2">
                                    <Link href={`/admin/products/${product.id}/edit`}>
                                        <Button variant="ghost" size="icon">
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                    <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                        {filteredProducts.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center text-gray-500 py-8">
                                    No products found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
