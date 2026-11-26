import { useCartStore } from "../store/cartStore";

type OrderSummaryProps = {
    title?: string;
};

function OrderSummary({ title = "Order summary" }: OrderSummaryProps) {
    const items = useCartStore((s) => s.items);
    const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    return (
        <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-6 h-fit">
            <h2 className="text-xl font-bold mb-4">{title}</h2>

            <div className="space-y-4">
                {items.map((item) => {
                    const maxReached = item.quantity === item.product.stock;

                    return (
                        <div
                            key={item.product.id}
                            className="flex items-center gap-4 pb-4 border-b border-gray-200 dark:border-slate-700"
                        >
                            <img
                                src={item.product.thumbnail}
                                alt={item.product.title}
                                className="w-14 h-14 object-cover rounded"
                            />
                            <div className="flex-1">
                                <p className="font-semibold">{item.product.title}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    ${item.product.price.toFixed(2)} each · qty {item.quantity}
                                    {maxReached && <span className="font-bold text-orange-600"> · max reached</span>}
                                </p>
                            </div>
                            <p className="font-bold">${(item.product.price * item.quantity).toFixed(2)}</p>
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-between mt-4 text-lg font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>
        </div>
    );
}

export default OrderSummary;
