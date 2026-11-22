import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppContext } from "../context/AppContext";
import { useThemeStore } from "../store/themeStore";

function Layout() {
  const { isCartOpen, setIsCartOpen } = useAppContext();
  const theme = useThemeStore((s) => s.theme);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <main className="flex flex-col justify-between min-h-screen bg-gray-50 dark:bg-slate-950 text-black dark:text-white p-8">
        <Navbar
          companyName="SummitGear Market"
          isCartOpen={isCartOpen}
          onOpenCart={() => setIsCartOpen(true)}
        />
        <Outlet />
        <Footer companyName="SummitGear Market" />
      </main>
    </div>
  );
}

export default Layout;
