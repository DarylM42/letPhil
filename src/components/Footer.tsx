function Footer({ companyName }: { companyName: string }) {
    return (
        <footer className="flex justify-between p-5">
            <div className="font-bold text-gray-400">© {new Date().getFullYear()} {companyName}</div>
            <div className="font-bold text-gray-400">Prices in USD</div>
        </footer>
    );
}

export default Footer;