function Navbar({ 
    companyName,
    theme,
    onThemeChange
 }: { 
    companyName: string;
    theme: "light" | "dark";
    onThemeChange: (theme: "light" | "dark") => void;
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
            <div className="flex gap-6 text-gray-500">
                {navLinks.map(link => (
                    <a key={link.href} href={link.href}>
                        {link.label}
                    </a>
                ))}
                <button
                    onClick={() => onThemeChange(theme === "light" ? "dark" : "light")}
                    className="text-2xl"
                >
                    {theme === "light" ? "🌙" : "☀️"}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;