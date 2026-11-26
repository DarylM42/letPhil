import { useState } from "react";
import type { ChangeEvent } from "react";
import { Link } from "react-router";
import { useCartStore } from "../store/cartStore";
import type { CheckoutErrors, CheckoutForm } from "../types/checkout";
import CheckoutSteps from "../components/CheckoutSteps";
import OrderSummary from "../components/OrderSummary";

const emptyForm: CheckoutForm = {
    name: "",
    address: "",
    city: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
};

function validateShipping(form: CheckoutForm): CheckoutErrors {
    const errors: CheckoutErrors = {};

    if (!form.name.trim()) errors.name = "Full name is required";
    if (!form.address.trim()) errors.address = "Address is required";
    if (!form.city.trim()) errors.city = "City is required";

    if (!form.zip.trim()) {
        errors.zip = "ZIP is required";
    } else if (!/^\d{5}$/.test(form.zip.trim())) {
        errors.zip = "ZIP must be 5 digits";
    }

    return errors;
}

function validatePayment(form: CheckoutForm): CheckoutErrors {
    const errors: CheckoutErrors = {};

    if (!form.cardName.trim()) errors.cardName = "Name on card is required";

    const digits = form.cardNumber.replace(/\s/g, "");
    if (!digits) {
        errors.cardNumber = "Card number is required";
    } else if (!/^\d{16}$/.test(digits)) {
        errors.cardNumber = "Card number must be 16 digits";
    }

    if (!form.expiry.trim()) {
        errors.expiry = "Expiry is required";
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(form.expiry.trim())) {
        errors.expiry = "Expiry must be MM/YY";
    }

    return errors;
}

function CheckoutPage() {
    const items = useCartStore((s) => s.items);

    const [step, setStep] = useState(1);
    const [form, setForm] = useState<CheckoutForm>(emptyForm);
    const [errors, setErrors] = useState<CheckoutErrors>({});

    const hasErrors = Object.keys(errors).length > 0;
    const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const lastFour = form.cardNumber.replace(/\s/g, "").slice(-4);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        let newErrors: CheckoutErrors = {};
        if (step === 1) newErrors = validateShipping(form);
        if (step === 2) newErrors = validatePayment(form);

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setStep(step + 1);
        }
    };

    const goToStep = (target: number) => {
        setErrors({});
        setStep(target);
    };

    const handleBack = () => goToStep(step - 1);

    const inputClass = (field: keyof CheckoutForm) =>
        `w-full border rounded px-3 py-2 bg-white dark:bg-slate-900 ${
            errors[field] ? "border-red-500" : "border-gray-300 dark:border-slate-600"
        }`;

    const cardClass = "bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-6";

    return (
        <div className="py-8">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>

            <CheckoutSteps current={step} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {step < 3 ? (
                    <>
                        {/* Steps 1-2: form on the left */}
                        <div className={`lg:col-span-2 ${cardClass}`}>
                            {hasErrors && (
                                <div className="bg-red-50 border border-red-200 text-red-700 rounded p-3 mb-4 font-semibold">
                                    Please fix the highlighted fields.
                                </div>
                            )}

                            {step === 1 && (
                                <>
                                    <h2 className="text-xl font-bold mb-4">Shipping address</h2>

                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block font-semibold mb-1">Full name</label>
                                            <input id="name" name="name" value={form.name} onChange={handleChange} className={inputClass("name")} />
                                            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="address" className="block font-semibold mb-1">Address</label>
                                            <input id="address" name="address" value={form.address} onChange={handleChange} className={inputClass("address")} />
                                            {errors.address && <p className="text-red-600 text-sm mt-1">{errors.address}</p>}
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="city" className="block font-semibold mb-1">City</label>
                                                <input id="city" name="city" value={form.city} onChange={handleChange} className={inputClass("city")} />
                                                {errors.city && <p className="text-red-600 text-sm mt-1">{errors.city}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="zip" className="block font-semibold mb-1">ZIP</label>
                                                <input id="zip" name="zip" value={form.zip} onChange={handleChange} className={inputClass("zip")} />
                                                {errors.zip && <p className="text-red-600 text-sm mt-1">{errors.zip}</p>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-between mt-6">
                                        <Link
                                            to="/cart"
                                            className="border border-gray-300 dark:border-slate-600 px-4 py-2 rounded font-semibold"
                                        >
                                            ← Back to cart
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={handleNext}
                                            className="bg-green-700 text-white px-4 py-2 rounded font-semibold hover:bg-green-800"
                                        >
                                            Next: Payment →
                                        </button>
                                    </div>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <h2 className="text-xl font-bold mb-4">Payment</h2>

                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="cardName" className="block font-semibold mb-1">Name on card</label>
                                            <input id="cardName" name="cardName" value={form.cardName} onChange={handleChange} className={inputClass("cardName")} />
                                            {errors.cardName && <p className="text-red-600 text-sm mt-1">{errors.cardName}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="cardNumber" className="block font-semibold mb-1">Card number</label>
                                            <input
                                                id="cardNumber"
                                                name="cardNumber"
                                                value={form.cardNumber}
                                                onChange={handleChange}
                                                inputMode="numeric"
                                                maxLength={19}
                                                placeholder="4242 4242 4242 4242"
                                                className={inputClass("cardNumber")}
                                            />
                                            {errors.cardNumber && <p className="text-red-600 text-sm mt-1">{errors.cardNumber}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="expiry" className="block font-semibold mb-1">Expiry</label>
                                            <input
                                                id="expiry"
                                                name="expiry"
                                                value={form.expiry}
                                                onChange={handleChange}
                                                maxLength={5}
                                                placeholder="MM/YY"
                                                className={inputClass("expiry")}
                                            />
                                            {errors.expiry && <p className="text-red-600 text-sm mt-1">{errors.expiry}</p>}
                                        </div>
                                    </div>

                                    <div className="flex justify-between mt-6">
                                        <button
                                            type="button"
                                            onClick={handleBack}
                                            className="border border-gray-300 dark:border-slate-600 px-4 py-2 rounded font-semibold"
                                        >
                                            ← Back
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleNext}
                                            className="bg-green-700 text-white px-4 py-2 rounded font-semibold hover:bg-green-800"
                                        >
                                            Next: Review →
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>

                        <OrderSummary />
                    </>
                ) : (
                    <>
                        {/* Step 3: items on the left */}
                        <div className="lg:col-span-2">
                            <OrderSummary title="Items" />
                        </div>

                        {/* Step 3: shipping, payment and actions on the right */}
                        <div className="flex flex-col gap-4">
                            <div className={cardClass}>
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-bold">Shipping to</h3>
                                    <button
                                        type="button"
                                        onClick={() => goToStep(1)}
                                        className="text-green-700 dark:text-green-400 font-semibold text-sm hover:underline"
                                    >
                                        Edit
                                    </button>
                                </div>
                                <p>{form.name}</p>
                                <p>{form.address}</p>
                                <p>{form.city}, {form.zip}</p>
                            </div>

                            <div className={cardClass}>
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-bold">Payment</h3>
                                    <button
                                        type="button"
                                        onClick={() => goToStep(2)}
                                        className="text-green-700 dark:text-green-400 font-semibold text-sm hover:underline"
                                    >
                                        Edit
                                    </button>
                                </div>
                                <p>Card ending in •••• {lastFour} · exp {form.expiry}</p>
                            </div>

                            <div className="flex justify-between gap-3">
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="border border-gray-300 dark:border-slate-600 px-4 py-2 rounded font-semibold"
                                >
                                    ← Back
                                </button>
                                {/* Placeholder: ticket 8.2 makes this create the order */}
                                <button
                                    type="button"
                                    className="flex-1 bg-green-700 text-white px-4 py-2 rounded font-semibold hover:bg-green-800"
                                >
                                    Place order · ${total.toFixed(2)}
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default CheckoutPage;
