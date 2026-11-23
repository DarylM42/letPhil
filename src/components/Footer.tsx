function Footer({ companyName }: { companyName: string }) {
    return (
        <footer className="flex justify-between p-5 border-t border-gray-300 dark:border-slate-700 mt-8">
            <div className="font-bold text-gray-400">© {new Date().getFullYear()} {companyName}</div>
            <div className="font-bold text-gray-400">Prices in USD</div>
        </footer>
    );
}

export default Footer;