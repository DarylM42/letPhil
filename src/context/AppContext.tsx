import { createContext, useContext, useState, type ReactNode } from "react";
import type { CartItem } from "../types/cart";

interface AppContextType {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
  favorites: number[];
  setFavorites: (favorites: number[]) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <AppContext.Provider value={{ theme, setTheme, cart, setCart, favorites, setFavorites, isCartOpen, setIsCartOpen }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
}