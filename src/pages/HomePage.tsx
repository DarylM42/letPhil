import { useState } from "react";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";
import EmptyState from "../components/EmptyState";
import SkeletonCard from "../components/SkeletonCard";
import Stats from "../components/Stats";
import { groupByCategory } from "../utils/groupByCategory";
import { useAppContext } from "../context/AppContext";

function HomePage() {
  const { products, loading, error, retryFetch } = useAppContext();
  const [searchText, setSearchText] = useState("");

  const grouped = groupByCategory(products);
  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const topRated = filteredProducts.filter(p => p.stock > 0 && p.rating >= 4.5);
  const luxury = filteredProducts.filter(p => p.price > 5000);

  return (
    <>
      <SearchBar value={searchText} onChange={(e) => setSearchText(e.target.value)} />

      {loading ? (
        <div>
          <h2 className="font-bold text-lg p-2">Loading products...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 rounded p-8 text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <h3 className="text-lg font-bold text-red-600 mb-2">We couldn't load products</h3>
          <p className="text-red-600 mb-6">Something went wrong while talking to the server. Check your connection and try again.</p>
          <button onClick={retryFetch} className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
            Try again
          </button>
        </div>
      ) : searchText && filteredProducts.length === 0 ? (
        <EmptyState message={`Nothing matches "${searchText}". Try a different search.`} />
      ) : (
        <>
          <Stats products={searchText ? filteredProducts : products} />

          {/* Deals under $20 */}
          {(() => {
            const dealsUnder20 = (searchText ? filteredProducts : products).filter(p => p.price < 20);
            if (dealsUnder20.length > 0) {
              return (
                <div className="mb-8">
                  <h2 className="font-bold text-lg p-2">Deals under $20</h2>
                  <ProductGrid
                    products={dealsUnder20}
                  />
                </div>
              );
            }
          })()}

          {topRated.length > 0 && (
            <div className="mb-8">
              <h2 className="font-bold text-lg p-2">Top rated</h2>
              <ProductGrid products={topRated} />
            </div>
          )}

          {luxury.length > 0 && (
            <div className="mb-8">
              <h2 className="font-bold text-lg p-2">Luxury (over $5,000)</h2>
              <ProductGrid products={luxury} />
            </div>
          )}

          {Object.entries(grouped).map(([category, categoryProducts]) => {
            const categoryFiltered = searchText
              ? categoryProducts.filter(p => p.title.toLowerCase().includes(searchText.toLowerCase()))
              : categoryProducts;

            if (categoryFiltered.length === 0) return null;

            return (
              <div key={category} className="mb-8">
                <h2 className="font-bold text-lg p-2 capitalize">{category}</h2>
                <ProductGrid
                  products={categoryFiltered}
                />
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default HomePage;