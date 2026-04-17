import React from "react";

const resolveImg = (img: string) => (img.startsWith("/") ? img : `/img/${img}`);

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner container">
        <div className="hero-copy">
          <small className="eyebrow">Artesanal • Sustentável • Rápido</small>
          <h1 id="hero-title">Flores que transformam ambientes e sentimentos</h1>
          <p>Arranjos feitos com carinho, embalagens sustentáveis e entrega expressa na sua cidade.</p>
          <div className="hero-cta">
            <a className="btn-primary" href="#produtos">Ver coleções</a>
            <a className="btn-ghost" href="#contato" style={{ marginLeft: 12 }}>Contato</a>
          </div>
        </div>

        <div className="hero-media" aria-hidden="true">
          <img src={resolveImg("bouquet-9.jpg")} alt="Arranjo destaque" loading="lazy" />
        </div>
      </div>
    </section>
  );
}