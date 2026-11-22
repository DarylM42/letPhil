import { useOutletContext } from "react-router";
import ProductGrid from "../components/ProductGrid";
import { useAppContext } from "../context/AppContext";

type LayoutContext = {
    favorites: number[];
    setFavorites: (favorites: number[]) => void;
    isCartOpen: boolean;
    setIsCartOpen: (open: boolean) => void;
};

function FavoritesPage() {
    const { favorites, setFavorites } = useOutletContext<LayoutContext>();
    const { products } = useAppContext();

    const favoriteProducts = products.filter(p => favorites.includes(p.id));

    const toggleFavorite = (productId: number) => {
        if (favorites.includes(productId)) {
            setFavorites(favorites.filter((id) => id !== productId));
        } else {
            setFavorites([...favorites, productId]);
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
            />
        </>
    );
}

export default FavoritesPage;
