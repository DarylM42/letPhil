import ProductGrid from "../components/ProductGrid";
import { useAppContext } from "../context/AppContext";
import { useFavoritesStore } from "../store/favoritesStore";

function FavoritesPage() {
    const ids = useFavoritesStore((s) => s.ids);
    const { products } = useAppContext();

    const favoriteProducts = products.filter(p => ids.includes(p.id));

    return (
        <>
            <h2 className="font-bold text-2xl mb-2">Your favorites</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{favoriteProducts.length} saved products</p>
            <ProductGrid products={favoriteProducts} />
        </>
    );
}

export default FavoritesPage;
