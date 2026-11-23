import type { Product } from "../types/product";

function StatsBar({ products }: { products: Product[] }) {
    const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
    const totalValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0);
    const totalRating = products.reduce((sum, p) => sum + p.rating, 0);
    const avgRating = (totalRating / products.length).toFixed(1);
    const lowStockCount = products.reduce((count, p) =>
        p.stock < 10 ? count + 1 : count, 0
    );

    return (
        <div className="grid grid-cols-4 gap-4 w-full mb-8">
            <div className="border p-4 rounded bg:white dark:bg-slate-800 dark:border-slate-700">
                <p className="text-gray-500 dark:text-gray-400">UNITS IN STOCK</p>
                <p className="text-2xl font-bold">{totalStock.toLocaleString()}</p>
            </div>
            <div className="border p-4 rounded bg:white dark:bg-slate-800 dark:border-slate-700">
                <p className="text-gray-500 dark:text-gray-400">INVENTORY VALUE</p>
                <p className="text-2xl font-bold">${totalValue.toLocaleString('en-US', {
                    minimumFractionDigits: 2, maximumFractionDigits: 2
                })}</p>
            </div>
            <div className="border p-4 rounded bg:white dark:bg-slate-800 dark:border-slate-700">
                <p className="text-gray-500 dark:text-gray-400">AVERAGE RATING</p>
                <p className="text-2xl font-bold">★ {avgRating}</p>
            </div>
            <div className="border p-4 rounded bg:white dark:bg-slate-800 dark:border-slate-700">
                <p className="text-gray-500 dark:text-gray-400">LOW STOCK</p>
                <p className="text-2xl font-bold text-orange-500">{lowStockCount} Products</p>
            </div>
        </div>
    )
}

export default StatsBar;