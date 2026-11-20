import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppContext } from "../context/AppContext";

function Layout() {
  const { theme, setTheme, cart, setCart, favorites, setFavorites, isCartOpen, setIsCartOpen } = useAppContext();

  return (
    <div className={theme === "dark" ? "dark" : ""}>
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
        <Outlet context={{ cart, setCart, favorites, setFavorites, isCartOpen, setIsCartOpen }} />
        <Footer companyName="SummitGear Market" />
      </main>
    </div>
  );
}

export default Layout;
