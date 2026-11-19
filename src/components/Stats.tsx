import type { Product } from "../types/product";

function Stats({ products }: { products: Product[] }) {
  const unitsInStock = products.reduce((sum, p) => sum + p.stock, 0);
  const inventoryValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0);
  const averageRating = products.length > 0
    ? (products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(2)
    : 0;
  const lowStock = products.filter(p => p.stock < 10).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white dark:bg-slate-800 p-6 rounded border border-gray-200 dark:border-slate-700">
        <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-2">UNITS IN STOCK</p>
        <p className="text-3xl font-bold">{unitsInStock.toLocaleString()}</p>
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded border border-gray-200 dark:border-slate-700">
        <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-2">INVENTORY VALUE</p>
        <p className="text-3xl font-bold">${inventoryValue.toLocaleString('en-US', { maximumFractionDigits: 2 })}</p>
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded border border-gray-200 dark:border-slate-700">
        <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-2">AVERAGE RATING</p>
        <p className="text-3xl font-bold">★ {averageRating}</p>
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded border border-gray-200 dark:border-slate-700">
        <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-2">LOW STOCK</p>
        <p className="text-3xl font-bold text-orange-600">{lowStock} products</p>
      </div>
    </div>
  );
}

export default Stats;
