import { useOutletContext } from "react-router";
import ProductGrid from "../components/ProductGrid";
import { useAppContext } from "../context/AppContext";
import type { CartItem } from "../types/cart";
import type { Product } from "../types/product";

type LayoutContext = {
    cart: CartItem[];
    setCart: (cart: CartItem[]) => void;
    favorites: number[];
    setFavorites: (favorites: number[]) => void;
    isCartOpen: boolean;
    setIsCartOpen: (open: boolean) => void;
};

function FavoritesPage() {
    const { cart, setCart, favorites, setFavorites } = useOutletContext<LayoutContext>();
    const { products } = useAppContext();

    const favoriteProducts = products.filter(p => favorites.includes(p.id));

    const toggleFavorite = (productId: number) => {
        if (favorites.includes(productId)) {
            setFavorites(favorites.filter((id) => id !== productId));
        } else {
            setFavorites([...favorites, productId]);
        }
    };

    const addToCart = (product: Product) => {
        const existingItem = cart.find(item => item.product.id === product.id);
        if (existingItem) {
            if (existingItem.quantity < product.stock) {
                setCart(cart.map(item =>
                    item.product.id === product.id
                    ? {...item, quantity: item.quantity + 1 }
                    : item
                ));
            }
        } else {
            setCart([...cart, { product, quantity: 1 }]);
        }
    };

    return (
        <>
            <h2 className="font-bold text-2xl mb-2">Your favorites</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{favoriteProducts.length} saved products</p>
            <ProductGrid 
                products={favoriteProducts}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                cart={cart}
                onAddToCart={addToCart}
            />
        </>
    );
}

export default FavoritesPage;
