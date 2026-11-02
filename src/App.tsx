// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import { products } from "./data/products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";
import ProductGrid from "./components/ProductGrid";
// import StatsBar from "./components/StatsBar";
import { groupByCategory } from "./utils/groupByCategory";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import EmptyState from "./components/EmptyState";
import type { CartItem } from "./types/cart";
import type { Product } from "./types/product";
import CartPanel from "./components/CartPanel";

function App() {
  const grouped = groupByCategory(products);
  const [searchText, setSearchText] = useState("");
  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [favorites, setFavorites] = useState<number[]>([]);
  const toggleFavorite = (productId: number) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };
  const [cart, setCart] = useState<CartItem[]>([]);
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
  const [isCartOpen, setIsCartOpen] = useState(false);
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
      <main className="min-h-screen bg-gray-50 dark:bg-slate-950 text-black dark:text-white p-8">
        <Navbar 
          companyName="SummitGear Market"
          theme={theme}
          onThemeChange={setTheme}
          favorites={favorites}
          cart={cart}
          isCartOpen={isCartOpen}
          onOpenCart={() => setIsCartOpen(true)}
        />
        <SearchBar value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        {/* <StatsBar products={products} /> */}
        
        {searchText && filteredProducts.length === 0 ? (
          <EmptyState message={`Nothing matches "${searchText}". Try a different search.`} />
        ) : (
          <>
            <h2 className="font-bold text-lg p-2">All products</h2>
            <ProductGrid
              products={searchText ? filteredProducts : products}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              cart={cart}
              onAddToCart={addToCart}
            />
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
