import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard";
import EmptyState from "./EmptyState";

function ProductGrid({ products }: { products: Product[] }) {
    if (products.length === 0) {
        return <EmptyState message="Nothing matches this section. Check back soon!" />
    }
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductGrid;