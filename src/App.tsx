import Navbar from "./components/Navbar";
import PromoBanner from "./components/PromoBanner";
import Footer from "./components/Footer";
import ProductGrid from "./components/ProductGrid";
import Stats from "./components/Stats";
import { groupByCategory } from "./utils/groupByCategory";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import EmptyState from "./components/EmptyState";
import SkeletonCard from "./components/SkeletonCard";
import type { CartItem } from "./types/cart";
import type { Product } from "./types/product";
import type { ProductsResponse } from "./types/product";
import CartPanel from "./components/CartPanel";
import { useAppContext } from "./context/AppContext";

function App() {
  const { theme, setTheme, cart, setCart, favorites, setFavorites, isCartOpen, setIsCartOpen } = useAppContext();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [searchText, setSearchText] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://dummyjson.com/products");

      if (!res.ok) {
        throw new Error("We couldn't load Products");
      }

      const data: ProductsResponse = await res.json();
      setProducts(data.products);
    } catch (err) {
      setError("Unable to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };
    
  useEffect(() => {
  fetchProducts();
}, []);

  useEffect(() => {
    if (cart.length === 0) {
      document.title = "SummitGear Market";
    } else {
      document.title = `SummitGear Market (${cart.length})`;
    }
}, [cart]);

  const grouped = groupByCategory(products);
  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const toggleFavorite = (productId: number) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.product.id === product.id);

    if (existingItem) {
      if (existingItem.quantity < product.stock) {
        setCart(cart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      }
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.product.id === productId
        ? { ...item, quantity }
        : item
      ));
    }
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <PromoBanner />
      <main className="flex flex-col justify-between min-h-screen bg-gray-50 dark:bg-slate-950 text-black dark:text-white p-8">
        <Navbar 
          companyName="SummitGear Market"
          theme={theme}
          onThemeChange={(newTheme) => setTheme(newTheme)}
          favorites={favorites}
          cart={cart}
          isCartOpen={isCartOpen}
          onOpenCart={() => setIsCartOpen(true)}
        />
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
            <button onClick={fetchProducts} className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
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
                      favorites={favorites}
                      onToggleFavorite={toggleFavorite}
                      cart={cart}
                      onAddToCart={addToCart}
                    />
                  </div>
                );
              }
            })()}

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
                    favorites={favorites}
                    onToggleFavorite={toggleFavorite}
                    cart={cart}
                    onAddToCart={addToCart}
                  />
                </div>
              );
            })}
          </>
        )}
        <Footer companyName="SummitGear Market" />
        <CartPanel
          cart={cart}
          isOpen={isCartOpen}
          onClose={closeCart}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      </main> 
    </div>
  );
}

export default App;