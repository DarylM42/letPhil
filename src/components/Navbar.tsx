import { NavLink } from "react-router";
import type { CartItem } from "../types/cart";

function Navbar({ 
    companyName,
    theme,
    onThemeChange,
    favorites,
    cart,
    isCartOpen,
    onOpenCart
 }: { 
    companyName: string;
    theme: "light" | "dark";
    onThemeChange: (theme: "light" | "dark") => void;
    favorites: number[];
    cart: CartItem[];
    isCartOpen: boolean;
    onOpenCart: () => void;
 }) {
  return (
    <nav className="flex justify-between p-4 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="flex items-center gap-2">
        <div className="bg-green-800 text-white rounded px-1 py-0.6 text-sm">▲</div>
        <div className="font-bold text-green-800">{companyName}</div>
      </div>  
      <div className="flex gap-6 text-gray-500 items-center">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "font-bold text-green-800 bg-green-100 px-3 py-1 rounded" : ""}
        >
          Shop
        </NavLink>

        <NavLink to="/suggest" className={({ isActive }) => isActive ? "font-bold text-green-800 bg-green-100 px-3 py-1 rounded" : ""}>
          Suggest
        </NavLink>

        <NavLink to="/favorites" className={({ isActive }) => isActive ? "font-bold text-green-800 bg-green-100 px-3 py-1 rounded" : ""}>
          Favorites <span className="bg-green-800 text-white rounded-full px-2 py-0.5 ml-1 text-sm">{favorites.length}</span>
        </NavLink>

        <NavLink to="/cart" onClick={(e) => { e.preventDefault(); onOpenCart(); }} className={({ isActive }) => isActive ? "font-bold text-green-800 bg-green-100 px-3 py-1 rounded" : ""}>
          Cart <span className="bg-green-800 text-white rounded-full px-2 py-0.5 ml-1 text-sm">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
        </NavLink>

        <button
          onClick={() => onThemeChange(theme === "light" ? "dark" : "light")}
          className="text-2xl border border-gray-300 rounded px-2 py-1"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;