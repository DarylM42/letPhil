// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import { products } from "./data/products";
import Navbar from "./components/Navbar";
// import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";
import StatsBar from "./components/StatsBar";
import { groupByCategory } from "./utils/groupByCategory";

function App() {
  const grouped = groupByCategory(products);

  return (
    <div>
      <main className="min-h-screen bg-gray-50 p-8">
        <Navbar companyName="SummitGear Market" />
        <StatsBar products={products} />
        
        {Object.entries(grouped).map(([category, categoryProducts]) => (
          <ProductSection
            key={category}
            category={category}
            count={categoryProducts.length}
            products={categoryProducts}
          />
        ))}
        <Footer companyName="SummitGear Market" />
      </main> 
    </div>
  );
}

export default App;
