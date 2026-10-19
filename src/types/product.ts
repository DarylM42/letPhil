// The shape of one product. Matches https://dummyjson.com/products
// Import it anywhere you need to type a product: import type { Product } from "../types/product";
export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  brand?: string; // some products don't have a brand
  thumbnail: string;
};
