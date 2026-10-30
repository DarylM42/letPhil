function SearchBar({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Search products..."
            className="border p-2 rounded w-full mb-4"
        />
    );
}

export default SearchBar;