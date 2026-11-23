import { create } from "zustand";
import type { CartItem } from "../types/cart";
import type { Product } from "../types/product";

type CartState = { 
    items: CartItem[]; 
    addToCart: (product: Product) => void; 
    increase: (id: number) => void;
    decrease: (id: number) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
    items: [],

    addToCart: (product) => 
        set((state) => {
            const existing = state.items.find((item) => item.product.id === product.id);

            if (existing) {
                if (existing.quantity >= product.stock) {
                    return state;
                }
                return {
                    items: state.items.map((item) =>
                        item.product.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }

            return { items: [...state.items, { product, quantity: 1 }] };
        }),
    
    increase: (id) =>
        set((state) => ({
            items: state.items.map((item) =>
                item.product.id === id && item.quantity < item.product.stock
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ),
        })),

    decrease: (id) =>
        set((state) => ({
            items: state.items
                .map((item) =>
                    item.product.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0),
        })),

    removeFromCart: (id) =>
        set((state) => ({
            items: state.items.filter((item) => item.product.id !== id),
        })),

    clearCart: () => set({ items: [] }),
}));