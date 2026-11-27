import { Link, Navigate, useLocation } from "react-router";
import OrderSummary from "../components/OrderSummary";
import type { Order } from "../types/order";

function OrderConfirmationPage() {
    const location = useLocation();
    const order = location.state as Order | null;

    if (!order) {
        return <Navigate to="/" replace />;
    }

    const firstName = order.name.split(" ")[0];

    return (
        <div className="py-12 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-green-700 text-white flex items-center justify-center text-4xl mb-6">
                ✓
            </div>

            <h1 className="text-3xl font-bold mb-2">Thanks, {firstName}! Your order is in.</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
                Order <span className="font-bold">#{order.orderNumber}</span> · a confirmation was sent to your email
            </p>

            <div className="w-full max-w-xl text-left mb-8">
                <OrderSummary items={order.items} totalLabel="Total paid" />
            </div>

            <Link
                to="/"
                className="bg-green-700 text-white px-6 py-3 rounded font-semibold hover:bg-green-800"
            >
                Keep shopping
            </Link>
        </div>
    );
}

export default OrderConfirmationPage;