import type { Product } from "../types/product";
import ProductGrid from "./ProductGrid";

function ProductSection({ title, products }: { title: string, products: Product[] }) {
    return (
        <div>
            <h2 className="font-bold text-lg p-2">{title}</h2>
            <ProductGrid products={products} />
        </div>
    );
}

export default ProductSection;