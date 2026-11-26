import { useNavigate } from "react-router";
import { useCartStore } from "../store/cartStore";

function CartPage() {
  const navigate = useNavigate();
  const cart = useCartStore((s) => s.items);
  const increase = useCartStore((s) => s.increase);
  const decrease = useCartStore((s) => s.decrease);
  const removeFromCart = useCartStore((s) => s.removeFromCart);

  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const isEmpty = cart.length === 0;

  return (
    <>
      <h2 className="font-bold text-2xl mb-2">Your cart</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{cart.length} items</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {isEmpty ? (
            <p className="text-gray-600 dark:text-gray-400">Your cart is empty</p>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.product.id} className="flex gap-4 pb-6 border-b border-gray-200 dark:border-slate-700">
                  <img
                    src={item.product.thumbnail}
                    alt={item.product.title}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold">{item.product.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      ${item.product.price} each {item.quantity === item.product.stock && <span className="font-bold text-orange-600">• max reached</span>}
                    </p>
                    <div className="flex items-start gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decrease(item.product.id)}
                          className="px-2 py-1 border border-gray-300 dark:border-slate-600 rounded"
                        >
                          −
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => increase(item.product.id)}
                          className="px-2 py-1 border border-gray-300 dark:border-slate-600 rounded"
                        >
                          +
                        </button>
                      </div>
                      <div className="ml-auto flex flex-col items-end">
                        <p className="font-bold mb-2">${(item.product.price * item.quantity).toFixed(2)}</p>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-600 text-sm font-semibold"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Subtotal: always rendered so the Checkout button can be disabled when the cart is empty */}
        <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded h-fit">
          <h3 className="font-bold text-lg mb-4">Subtotal</h3>
          <p className="text-2xl font-bold mb-2">${subtotal.toFixed(2)}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Shipping & taxes calculated at checkout</p>
          <button
            onClick={() => navigate("/checkout")}
            disabled={isEmpty}
            className="w-full bg-green-700 text-white py-3 rounded font-semibold hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default CartPage;
