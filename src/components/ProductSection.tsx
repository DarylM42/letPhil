import type { Product } from "../types/product";
import ProductGrid from "./ProductGrid";

function ProductSection({ 
    category, 
    count, 
    products,
    favorites,
    onToggleFavorite
}: { 
    category: string,
    count: number; 
    products: Product[]; 
    favorites: number[];
    onToggleFavorite: (id: number) => void;
}) {
    return (
        <div>
            <h2 className="font-bold text-lg p-2">
                {category.charAt(0).toUpperCase() + category.slice(1)}
                <span className="text-gray-400"> ({count})</span>
            </h2>
            <ProductGrid 
                products={products} 
                favorites={favorites}
                onToggleFavorite={onToggleFavorite}
            />
        </div>
    );
}

export default ProductSection;