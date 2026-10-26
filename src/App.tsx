// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import { products } from "./data/products";
import Navbar from "./components/Navbar";
// import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";
import StatsBar from "./components/StatsBar";

function App() {
  const dealsUnder20 = products.filter(p => p.price < 20);
  const topRated = products.filter(p => p.stock > 0 && p.rating >= 4.5);
  const furniture = products.filter(p => p.category === "furniture");
  const luxury = products.filter(p => p.price > 5000);

  return (
    <div>
      <main className="min-h-screen bg-gray-50 p-8">
        {/* <h1 className="text-3xl font-bold">SummitGear Market</h1>
        <p className="text-gray-600">Open the tickets folder to get started.</p> */}
        <Navbar companyName="SummitGear Market" />
        <StatsBar products={products} />
        {/* <ProductGrid products={products} /> */}
        <ProductSection title="Deals under $20" products={dealsUnder20} />
        <ProductSection title="Top rated" products={topRated} />
        <ProductSection title="Furniture" products={furniture} />
        <ProductSection title="Luxury (over $5,000)" products={luxury} />
        <Footer companyName="SummitGear Market" />
      </main> 
    </div>
  );
}

export default App;
