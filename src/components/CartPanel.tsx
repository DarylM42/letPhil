import type { CartItem } from "../types/cart";
import EmptyState from "./EmptyState";

function CartPanel({
    cart,
    isOpen,
    onClose,
    onRemove,
    onUpdateQuantity
}: {
    cart: CartItem[];
    isOpen: boolean;
    onClose: () => void;
    onRemove: (productId: number) => void;
    onUpdateQuantity: (productId: number, quantity: number) => void;
}) {
    const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-black/60 pointer-events-none" onClick={onClose} />}
            <div className={`fixed right-0 top-0 h-screen w-96 bg-white dark:bg-slate-900 shadow-lg transform transition-transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}>
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="font-bold text-lg">Your Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})</h2>
                    <button onClick={onClose} className="text-2xl">X</button>
                </div>

                {cart.length === 0 ? (
                    <div className="p-4 flex flex-col items-center justify-center gap-4 py-12">
                        <EmptyState icon="🛒" title="Your cart is empty" message="Add something you love from the shop." />
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col h-full">
                            <div className="overflow-y-auto p-4" style={{ height: "calc(100vh - 200px)" }}>
                                {cart.map(item => (
                                    <div key={item.product.id} className="mb-4 pb-4 border-b">
                                        <div className="flex justify-between gap-4">
                                            <div className="flex gap-3 flex-1">
                                                <img src={item.product.thumbnail} alt={item.product.title} className="w-12 h-12 object-cover rounded" />
                                                <div className="flex-1">
                                                    <p className="font-bold text-sm">{item.product.title}</p>
                                                    <p className="text-gray-500 text-sm">
                                                        ${item.product.price.toFixed(2)} each
                                                        {item.quantity >= item.product.stock && <span className="text-orange-500 ml-2 font-bold">max reached</span>}
                                                    </p>
                                                    <div className="flex gap-2 mt-2">
                                                        <button onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)} className="px-1 py-0 bg-gray-200 rounded text-sm">-</button>
                                                        <span className="px-2 py-0 text-sm">{item.quantity}</span>
                                                        <button onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)} disabled={item.quantity >= item.product.stock} className="px-1 py-0 bg-gray-200 rounded text-sm">+</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end justify-between">
                                                <p className="font-bold">${(item.product.price * item.quantity).toFixed(2)}</p>
                                                <button onClick={() => onRemove(item.product.id)} className="text-red-500 font-bold text-sm">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-slate-900 flex justify-between items-center">
                            <p className="font-bold text-lg">Subtotal</p>
                            <p className="font-bold text-lg">${subtotal.toFixed(2)}</p>
                        </div>   
                    </div> 
                    </>
                )}
            </div>
        </>
    );
}

export default CartPanel;