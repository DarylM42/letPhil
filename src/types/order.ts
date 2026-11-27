import type { CartItem } from "./cart";

export type Order = {
    orderNumber: string;
    name: string;
    items: CartItem[];
    total: number;
};