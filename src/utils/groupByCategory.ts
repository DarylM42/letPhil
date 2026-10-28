import type { Product } from "../types/product";

export function groupByCategory(products: Product[]): Record<string, Product[]> {
    return products.reduce((acc, product) => {
        const category = product.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {} as Record<string, Product[]>);
}
