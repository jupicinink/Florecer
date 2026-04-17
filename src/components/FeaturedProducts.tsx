import React from "react";

const PRODUCTS = [
  { id: "b1", name: "Buquê Primavera", price: "R$ 149", img: "bouquet-1.jpg" },
  { id: "b2", name: "Arranjo Romântico", price: "R$ 189", img: "bouquet-2.jpg" },
  { id: "b3", name: "Bouquet de Casamento", price: "R$ 249", img: "bouquet-3.jpg" },
];

const resolveImg = (img: string) => (img.startsWith("/") ? img : `/img/${img}`);

export default function FeaturedProducts() {
  return (
    <section className="featured section-block" aria-labelledby="featured-title">
      <h3 id="featured-title" className="section-sub">Seleções escolhidas pelos nossos floristas</h3>

      <div className="featured-grid" role="list">
        {PRODUCTS.map((p) => (
          <article key={p.id} className="product-card" role="listitem" aria-label={p.name}>
            <div className="product-thumb-wrap">
              <img className="product-thumb" src={resolveImg(p.img)} alt={p.name} loading="lazy" />
            </div>
            <div className="product-meta">
              <div>
                <div className="product-title">{p.name}</div>
                <small className="muted">Floristas locais • Embalagem sustentável</small>
              </div>
              <div className="product-price">{p.price}</div>
            </div>
            <div className="product-actions">
              <a className="btn-ghost" href="#contato">Pedir</a>
              <a className="btn-primary" href="#contato">Personalizar</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}