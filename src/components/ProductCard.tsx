import type { Product } from "../types/product";

function ProductCard({ product }: { product: Product }) {
    return (
        <div className="border rounded-lg p-4 shadow-md max-w-xs relative">
            <img src={product.thumbnail} alt="Product image" />
            {product.brand && <div>{product.brand}</div>}
            <div className="font-bold text-black-600">{product.title}</div>
            <div className="flex justify-between">
                <div className="font-bold text-green-600">${product.price.toFixed(2)}</div>
                <div className="text-gray-500">★ {product.rating}</div>
            </div>
            {product.stock < 10 && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                    Low stock
                </div>
            )}
        </div>
    );
}

export default ProductCard;