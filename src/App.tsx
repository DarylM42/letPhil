// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import { products } from "./data/products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";
import ProductGrid from "./components/ProductGrid";
import StatsBar from "./components/StatsBar";
import { groupByCategory } from "./utils/groupByCategory";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import EmptyState from "./components/EmptyState";

function App() {
  const grouped = groupByCategory(products);
  const [searchText, setSearchText] = useState("");
  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <main className="min-h-screen bg-gray-50 p-8">
        <Navbar companyName="SummitGear Market" />
        <StatsBar products={products} />
        <SearchBar value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        
        {searchText ? (
          filteredProducts.length === 0 ? (
            <EmptyState message={`Nothing matches "${searchText}". Try a different search.`} />
          ) : (
            <>
              <p className="text-gray-600 mb-4">
                Showing {filteredProducts.length} of {products.length} products
              </p>
              <ProductGrid products={filteredProducts} />
            </>
          )
        ) : (
          <>
            {Object.entries(grouped).map(([category, categoryProducts]) => (
              <ProductSection key={category} category={category} count={categoryProducts.length} products={categoryProducts} />
            ))}
          </>
        )}
        <Footer companyName="SummitGear Market" />
      </main> 
    </div>
  );
}

export default App;
