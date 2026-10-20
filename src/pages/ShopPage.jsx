import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
export default function ShopPage() {
  return <div className="grid">{products.map(p => <ProductCard key={p.id} product={p} />)}</div>;
}