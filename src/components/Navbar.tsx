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
    const navLinks = [
        { label: "Shop", href: "/" },
        { label: "Favorites", href: "/favorites" },
        { label: "Cart", href: "/cart" },
    ];

    return (
        <nav className="flex justify-between p-4 bg-white dark:bg-gray-900 text-black dark:text-white">
            <div className="flex items-center gap-2">
                <div className="bg-green-800 text-white rounded px-1 py-0.6 text-sm">▲</div>
                <div className="font-bold text-green-800">{companyName}</div>
            </div>  
            <div className="flex gap-6 text-gray-500 items-center">
                {navLinks.map(link => (
                    <a 
                        key={link.href} 
                        href={link.href === "Cart" ? "#" : link.href}
                        onClick={(e) => {
                            if (link.label === "Cart") {
                                e.preventDefault();
                                onOpenCart();
                            }
                        }}
                        className={link.label === "Shop" ? "font-bold text-green-800 bg-green-100 px-3 py-1 rounded" : ""}
                    >
                        {link.label === "Cart" ? (
                            <>
                                Cart{" "}
                                <span className="bg-green-800 text-white rounded-full px-2 py-0.5 ml-1 text-sm">
                                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                                </span>
                            </>
                        ) : link.label === "Favorites" ? (
                            <>
                                Favorites{" "}
                                <span className="bg-green-800 text-white rounded-full px-2 py-0.5 ml-1 text-sm">
                                    {favorites.length}
                                </span>
                            </>
                        ) : (
                            link.label
                        )}
                    </a>
                ))}
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