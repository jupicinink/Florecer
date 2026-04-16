import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <small className="eyebrow">Artesanal • Sustentável • Rápido</small>
          <h1>Flores que transformam ambientes e sentimentos</h1>
          <p>Arranjos selecionados, embalagens sustentáveis e entrega expressa na sua cidade.</p>
          <div className="hero-cta">
            <a className="btn-primary" href="#produtos">Ver coleções</a>
            <a className="btn-ghost" href="#contato">Fazer pedido</a>
          </div>
        </div>

        <div className="hero-media" aria-hidden="true">
          <img src="/img/a.jpg" alt="Arranjo destacado" loading="lazy" />
        </div>
      </div>
    </section>
  );
}