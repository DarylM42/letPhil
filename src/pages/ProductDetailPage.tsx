import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import type { Product } from "../types/product";
import { useCartStore } from "../store/cartStore";
import { useFavoritesStore } from "../store/favoritesStore";

function ProductDetailPage() {
    const { id } = useParams();

    const isFavorite = useFavoritesStore((s) => s.isFavorite(Number(id)));
    const toggleFavoriteInStore = useFavoritesStore((s) => s.toggleFavorite);
    const cart = useCartStore((s) => s.items);
    const addProductToCart = useCartStore((s) => s.addToCart);

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        const fetchProduct = async () => {
            setLoading(true);
            setError("");

            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`, {
                    signal: controller.signal,
                });

                if (!res.ok) {
                    throw new Error("Product not found");
                }

                const data: Product = await res.json();
                setProduct(data);
            } catch (err) {
                if (controller.signal.aborted) return;
                setProduct(null);
                setError(`We couldn't find a product with id ${id}.`);
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchProduct();

        return () => controller.abort();
    }, [id]);

    const cartItem = product ? cart.find((item) => item.product.id === product.id) : undefined;
    const cartQuantity = cartItem ? cartItem.quantity : 0;

    const toggleFavorite = () => {
        if (!product) return;
        toggleFavoriteInStore(product.id);
    };

    const addToCart = () => {
        if (!product) return;
        addProductToCart(product);
    };

    const backLink = (
        <Link to="/" className="text-green-700 dark:text-green-400 font-bold hover:underline mb-4 inline-block">
            ← Back to shop
        </Link>
    );

    if (loading) {
        return (
            <div className="py-8">
                {backLink}
                <p className="font-bold text-lg p-2">Loading product...</p>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="py-8">
                {backLink}
                <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
                    <div className="text-4xl mb-4">🔎</div>
                    <h3 className="text-lg font-bold text-red-700 mb-2">Product not found</h3>
                    <p className="text-red-700">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="py-8">
            {backLink}

            <div className="grid md:grid-cols-2 gap-8">
                {/* Large image */}
                <div className="bg-white dark:bg-slate-800 border rounded-lg p-4 flex items-center justify-center">
                    <img src={product.thumbnail} alt={product.title} className="max-h-96 object-contain" />
                </div>

                {/* Details */}
                <div className="flex flex-col gap-3">
                    {product.brand && (
                        <div className="uppercase text-sm font-bold text-gray-500 dark:text-gray-400">{product.brand}</div>
                    )}
                    <h1 className="text-3xl font-bold">{product.title}</h1>

                    {/* Pills: category, stock, rating */}
                    <div className="flex flex-wrap gap-2 text-sm font-bold">
                        <span className="capitalize bg-gray-100 dark:bg-slate-800 rounded-full px-3 py-1">
                            {product.category}
                        </span>
                        <span
                            className={`rounded-full px-3 py-1 ${
                                product.stock < 10
                                    ? "bg-yellow-100 text-orange-800"
                                    : "bg-green-50 text-green-700"
                            }`}
                        >
                            {product.stock < 10 ? "Low stock" : "In stock"} · {product.stock} left
                        </span>
                        <span className="bg-gray-100 dark:bg-slate-800 rounded-full px-3 py-1">
                            ★ {product.rating}
                        </span>
                    </div>

                    <div className="text-3xl font-bold text-green-700">${product.price.toFixed(2)}</div>

                    <p className="text-gray-700 dark:text-gray-300">{product.description}</p>

                    <div className="flex gap-3 mt-2">
                        <button
                            onClick={addToCart}
                            disabled={cartQuantity >= product.stock}
                            className="flex-1 bg-green-900 text-white font-bold py-3 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            Add to cart
                        </button>
                        <button
                            onClick={toggleFavorite}
                            className={`px-4 rounded border font-bold ${
                                isFavorite ? "text-red-600" : "text-gray-600 dark:text-gray-300"
                            } bg-white dark:bg-slate-800`}
                        >
                            {isFavorite ? "♥ Favorited" : "♡ Favorite"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;
