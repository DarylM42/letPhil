import { useState } from "react";
import { products } from "../data/products";
import { groupByCategory } from "../utils/groupByCategory";
import { useAppContext } from "../context/AppContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

function SuggestProductForm() {
    const { theme, setTheme, cart, favorites, isCartOpen, setIsCartOpen } = useAppContext();

    const [form, setForm] = useState({
        name: "",
        category: "",
        reason: ""
    });

    const [suggestions, setSuggestions] = useState<Array<{ name: string; category: string; reason: string }>>([]);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        if (!form.name.trim()) {
            setError("Please fill out the product name and reason before submitting.");
            return;
        }

        if (!form.reason.trim()) {
            setError("Why you'd love it is required");
            return;
        }

        setSuggestions([...suggestions, form]);

        setForm({ name: "", category: "", reason: "" });
    };

    return (
        <div className={theme === "dark" ? "dark" : ""}>
            <main className="flex flex-col justify-between min-h-screen bg-gray-50 dark:bg-slate-950 text-black dark:text-white p-8">
                <Navbar
                    companyName="SummitGear Market"
                    theme={theme}
                    onThemeChange={setTheme}
                    favorites={favorites}
                    cart={cart}
                    isCartOpen={isCartOpen}
                    onOpenCart={() => setIsCartOpen(true)}
                />

                <div className="max-w-3xl mx-auto mb-8">
                    <div className="p-8 bg-white dark:bg-slate-800 rounded border border-gray-300 dark:border-slate-700">
                        <h2 className="font-bold text-lg mb-2">Suggest a product</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">Tell us what you'd like to see in the store.</p>

                    {error && <p className="text-red-500 font-bold mb-4 bg-red-100 p-3 rounded">{error}</p>}

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block font-semibold mb-2">Product Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={`w-full border rounded p-2 dark:bg-slate-700 ${
                                      error.includes("name") ? "border-red-500 bg-red-50" : ""
                                    }`}
                                />
                                {error.includes("name") && (
                                  <p className="text-red-600 text-sm font-bold mt-1">Product name is required</p>
                                )}
                            </div>

                            <div>
                                <label className="block font-semibold mb-2">Category</label>
                                <select
                                    name="category"
                                    value={form.category}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 dark:bg-slate-700"
                                >
                                    <option value="">Select a category</option>
                                    {Object.keys(groupByCategory(products)).map(cat => (
                                        <option key={cat} value={cat}>{cat[0].toUpperCase() + cat.slice(1).toLowerCase()}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Why should we carry it?</label>
                            <div className="relative">
                                <textarea
                                    name="reason"
                                    value={form.reason}
                                    onChange={handleChange}
                                    maxLength={200}
                                    className={`w-full border rounded p-2 dark:bg-slate-700 focus:outline-none focus:border-green-700 focus:ring-2 focus:ring-green-200 ${
                                      error.includes("love") ? "border-red-500 bg-red-50" : ""
                                    }`}
                                    rows={4}
                                />
                                <p className="text-gray-600 text-sm mt-1 text-right">{form.reason.length}/200</p>
                            </div>
                        </div>

                        <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">
                            Suggest product
                        </button>
                    </form>
                    </div>

                    {suggestions.length > 0 && (
                        <div className="mt-8">
                            <h3 className="font-bold text-lg mb-4">Suggestions ({suggestions.length})</h3>
                            <div className="space-y-4">
                                {suggestions.map((suggestion, index) => (
                                    <div key={index} className="p-4 bg-white dark:bg-slate-800 rounded border border-gray-200 dark:border-slate-700">
                                        <div className="flex items-center gap-2 mb-2">
                                            <p className="font-bold">{suggestion.name}</p>
                                            {suggestion.category && (
                                                <span className="text-xs bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">{suggestion.category}</span>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{suggestion.reason}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <Footer companyName="SummitGear Market" />
            </main>
        </div>
    );
}

export default SuggestProductForm;
