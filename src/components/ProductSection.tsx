import type { Product } from "../types/product";
import ProductGrid from "./ProductGrid";

function ProductSection({ category, count, products }: { category: string, count: number; products: Product[] }) {
    return (
        <div>
            <h2 className="font-bold text-lg p-2">
                {category.charAt(0).toUpperCase() + category.slice(1)}
                <span className="text-gray-400"> ({count})</span>
            </h2>
            <ProductGrid products={products} />
        </div>
    );
}

export default ProductSection;