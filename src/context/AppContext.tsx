import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Product, ProductsResponse } from "../types/product";

interface AppContextType {
  products: Product[];
  loading: boolean;
  error: string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch("https://dummyjson.com/products");

        if (!res.ok) {
          throw new Error("Failed to load products");
        }

        const data: ProductsResponse = await res.json();
        setProducts(data.products);
      } catch (err) {
        setError("Unable to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        products,
        loading,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
}