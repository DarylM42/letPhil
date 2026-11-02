import type { Product } from "../types/product";
import type { CartItem } from "../types/cart";
import ProductCard from "../components/ProductCard";
import EmptyState from "./EmptyState";

function ProductGrid({ 
    products,
    favorites,
    onToggleFavorite,
    cart,
    onAddToCart
 }: { 
    products: Product[];
    favorites: number[];
    onToggleFavorite: (id: number) => void;
    cart: CartItem[];
    onAddToCart: (product: Product) => void;
 }) {
    if (products.length === 0) {
        return <EmptyState message="Nothing matches this section. Check back soon!" />
    }
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    isFavorite={favorites?.includes(product.id) || false}
                    onToggleFavorite={() => onToggleFavorite(product.id)}
                    cartQuantity={cart.find(item => item.product.id === product.id)?.quantity || 0}
                    onAddToCart={() => onAddToCart(product)}
                />
            ))}
        </div>
    );
}

export default ProductGrid;