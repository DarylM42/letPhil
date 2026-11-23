import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import type { Product, ProductsResponse } from "../types/product";

interface AppContextType {
  products: Product[];
  loading: boolean;
  error: string;
  retryFetch: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = useCallback(async () => {
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
  }, []);

    useEffect(() => {
      fetchProducts();
    }, [fetchProducts]);

  return (
    <AppContext.Provider
      value={{
        products,
        loading,
        error,
        retryFetch: fetchProducts,
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