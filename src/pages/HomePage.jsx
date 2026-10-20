import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function HomePage() {
  return (<><Hero /><div className="grid">{products.map(p => <ProductCard key={p.id} product={p} />)}</div></>);
}