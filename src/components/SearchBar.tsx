import { useState } from "react";

function SearchBar({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    const [isFocused, setIsFocused] = useState(false);
    
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="🔍 Search products..."
            className={`p-2 rounded w-full mb-4 bg-white dark:bg-slate-900 dark:text-white placeholder-gray-400 focus:ring-0 focus:outline-none ${
                isFocused
                    ? "border-4 border-green-700"
                    : "border-2 border-gray-300"
            }`}
        />
    );
}

export default SearchBar;