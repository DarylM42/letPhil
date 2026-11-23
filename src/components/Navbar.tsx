import { NavLink } from "react-router";
import { useCartStore } from "../store/cartStore";
import { useThemeStore } from "../store/themeStore";
import { useFavoritesStore } from "../store/favoritesStore";

function Navbar({
    companyName,
 }: {
    companyName: string;
 }) {
  const items = useCartStore((s) => s.items);
  const favoritesCount = useFavoritesStore((s) => s.ids.length);
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

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

        <NavLink to="/favorites" className={({ isActive }) => isActive ? "font-bold text-green-800 bg-green-100 px-3 py-1 rounded" : ""}>
          Favorites <span className="bg-green-800 text-white rounded-full px-2 py-0.5 ml-1 text-sm">{favoritesCount}</span>
        </NavLink>

        <NavLink to="/cart" className={({ isActive }) => isActive ? "font-bold text-green-800 bg-green-100 px-3 py-1 rounded" : ""}>
          Cart <span className="bg-green-800 text-white rounded-full px-2 py-0.5 ml-1 text-sm">{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
        </NavLink>
        
        <NavLink to="/suggest" className={({ isActive }) => isActive ? "font-bold text-green-800 bg-green-100 px-3 py-1 rounded" : ""}>
          Suggest
        </NavLink>

        <button
          onClick={toggleTheme}
          className="text-2xl border border-gray-300 rounded px-2 py-1"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;