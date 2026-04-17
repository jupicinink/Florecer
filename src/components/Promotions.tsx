// ...new file...
import React from 'react';

export default function Promotions() {
  return (
    <section className="promo-banner container" aria-labelledby="promo-title">
      <div className="promo-copy">
        <h3 id="promo-title">Promoção da estação</h3>
        <p className="section-sub">Ganhe 10% em arranjos selecionados — presente perfeito para aniversários e celebrações.</p>
      </div>
      <div className="promo-cta">
        <a className="btn-primary" href="#produtos">Ver promoções</a>
      </div>
    </section>
  );
}