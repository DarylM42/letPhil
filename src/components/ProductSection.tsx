import type { Product } from "../types/product";
import type { CartItem } from "../types/cart";
import ProductGrid from "./ProductGrid";

function ProductSection({ 
    category, 
    count, 
    products,
    favorites,
    onToggleFavorite,
    cart,
    onAddToCart
}: { 
    category: string,
    count: number; 
    products: Product[]; 
    favorites: number[];
    onToggleFavorite: (id: number) => void;
    cart: CartItem[];
    onAddToCart: (product: Product) => void;
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
                cart={cart}
                onAddToCart={onAddToCart}
            />
        </div>
    );
}

export default ProductSection;