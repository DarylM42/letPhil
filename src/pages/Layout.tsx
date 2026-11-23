import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useThemeStore } from "../store/themeStore";

function Layout() {
  const theme = useThemeStore((s) => s.theme);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <main className="flex flex-col justify-between min-h-screen bg-gray-50 dark:bg-slate-950 text-black dark:text-white p-8">
        <Navbar companyName="SummitGear Market" />
        <Outlet />
        <Footer companyName="SummitGear Market" />
      </main>
    </div>
  );
}

export default Layout;
