import { useEffect } from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PromoBanner from "../components/PromoBanner";
import { useThemeStore } from "../store/themeStore";
import { useCartStore } from "../store/cartStore";

function Layout() {
  const theme = useThemeStore((s) => s.theme);
  const cartCount = useCartStore((s) => 
    s.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  useEffect(() => {
    document.title =
      cartCount === 0 ? "SummitGear Market" : `SummitGear Market (${cartCount})`;
  }, [cartCount]);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <PromoBanner />
      <main className="flex flex-col justify-between min-h-screen bg-gray-50 dark:bg-slate-950 text-black dark:text-white p-8">
        <Navbar companyName="SummitGear Market" />
        <Outlet />
        <Footer companyName="SummitGear Market" />
      </main>
    </div>
  );
}

export default Layout;
