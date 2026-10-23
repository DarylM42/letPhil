function Navbar({ companyName }: { companyName: string }) {
    const navLinks = [
        { label: "Shop", href: "/" },
        { label: "Favorites", href: "/favorites" },
        { label: "Cart", href: "/cart" },
    ];

    return (
        <nav className="flex justify-between p-4 bg-white text-black">
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
            </div>
        </nav>
    );
}

export default Navbar;