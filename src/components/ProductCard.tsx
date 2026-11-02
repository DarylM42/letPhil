import type { Product } from "../types/product";

function ProductCard({ 
    product,
    isFavorite,
    onToggleFavorite,
    cartQuantity,
    onAddToCart
}: { 
    product: Product;
    isFavorite: boolean;
    onToggleFavorite: () => void; 
    cartQuantity: number;
    onAddToCart: () => void;
}) {
    return (
        <div className="border rounded-lg p-4 shadow-md max-w-xs relative bg-white dark:bg-slate-800">
            <div className="bg-gray-200 dark:bg-slate-700 rounded p-2 mb-2">
                <img src={product.thumbnail} alt="Product image" />
            </div>
            <button
                onClick={onToggleFavorite}
                className={`absolute top-6 right-6 text-2xl rounded-full w-8 h-8 flex items-center justify-center border-none cursor-pointer ${
                    isFavorite ? "bg-pink-100" : "bg-white"
                }`}
            >
                <span style={{ color: isFavorite ? "red" : "gray" }} className="text-2xl">
                    {isFavorite ? "♥" : "♡"}
                </span>
            </button>
            <button
                onClick={onAddToCart}
                disabled={cartQuantity >= product.stock}
                className="mt-2 w-full bg-green-900 text-white p-s rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
                Add to cart
            </button>
            {product.brand && <div>{product.brand}</div>}
            <div className="font-bold text-black-600">{product.title}</div>
            <div className="flex justify-between">
                <div className="font-bold text-green-600">${product.price.toFixed(2)}</div>
                <div className="text-gray-500">★ {product.rating}</div>
            </div>
            {product.stock < 10 && (
                <div className="absolute top-6 left-6 bg-yellow-100 text-orange-800 px-3 py-1 rounded-full text-sm font-bold">
                    Low stock
                </div>
            )}
        </div>
    );
}

export default ProductCard;