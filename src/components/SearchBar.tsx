function SearchBar({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Search products..."
            className="border border-teal-500 dark:border-teal-400 p-2 rounded w-full mb-4 bg-white dark:bg-slate-900 dark:text-white"
        />
    );
}

export default SearchBar;