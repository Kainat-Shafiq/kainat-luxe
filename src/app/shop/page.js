"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/Shop.css";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";
import Link from "next/link";

export default function ShopPage() {
  const { addToCart } = useCart();
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState("popular");
  const [page, setPage] = useState(1);

  let list = cat === "All" ? products : products.filter(p => p.category === cat);
  if (sort === "low") list = [...list].sort((a,b)=>a.price-b.price);
  if (sort === "high") list = [...list].sort((a,b)=>b.price-a.price);

  const perPage = 6;
  const show = list.slice((page-1)*perPage, page*perPage);

  return (
    <>
      <Navbar />
      <div className="shop-banner"><h1>Shop All</h1><span><Link href="/">Home</Link> / Shop</span></div>

      <div className="shop-wrap">
        <aside className="filters">
          <h3>Categories</h3>
          {[["Dresses",15],["Abayas",11],["Tops",9],["Bottoms",5],["Accessories",4]].map(([n,c])=>(
            <label key={n}><input type="checkbox" checked={cat===n} onChange={()=>{setCat(cat===n?"All":n); setPage(1)}} /> {n} ({c})</label>
          ))}

          <h3>Size</h3>
          {[["XS",6],["S",10],["M",12],["L",10],["XL",6]].map(([n,c])=>(
            <label key={n}><input type="checkbox" /> {n} ({c})</label>
          ))}

          <h3>Color</h3>
          {[["#000","Black"],["#fff","White"],["#d2b48c","Beige"],["#8b5a2b","Brown"],["#3b82f6","Blue"],["#ec4899","Pink"]].map(([code,name])=>(
            <div className="color-row" key={name}><span style={{background:code, border: name==="White"?"1px solid #ccc":"none"}}></span>{name}</div>
          ))}

          <h3>Price</h3>
          <p>$0 - $100</p>
          <input type="range" min="0" max="100" defaultValue="100" className="range" />
        </aside>

        <main className="shop-main">
          <div className="shop-top">
            <p>{list.length} Products</p>
            <select value={sort} onChange={e=>setSort(e.target.value)}>
              <option value="popular">Sort by: Popular</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>

          <div className="grid">
            {show.map(p=>(
              <div className="card" key={p.id}>
                <Link href={`/product/${p.id}`}>
                  <div className="img-box">
                    <img src={p.img} alt={p.name} />
                  </div>
                  <h4>{p.name}</h4>
                </Link>
                <button className="heart">♡</button>
                <p className="price">${p.price}</p>
                <div className="stars">★★★★★</div>
                <button className="add" onClick={()=>addToCart(p)}>Add to Cart</button>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button onClick={()=>setPage(Math.max(1,page-1))}>‹</button>
            {[1,2,3].map(n=><button key={n} className={page===n?"active":""} onClick={()=>setPage(n)}>{n}</button>)}
            <button onClick={()=>setPage(Math.min(3,page+1))}>›</button>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}