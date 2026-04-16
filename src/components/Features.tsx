import React from 'react';

export default function Features() {
  const items = [
    { title: "Entrega expressa", text: "Pedidos prontos em até 24h nas cidades atendidas." },
    { title: "Embalagem sustentável", text: "Materiais recicláveis e sem plástico desnecessário." },
    { title: "Seleção artesanal", text: "Flores escolhidas a mão por floristas locais." },
  ];

  return (
    <div className="features-grid">
      {items.map((f) => (
        <div className="feature" key={f.title}>
          <div className="feature-icon" aria-hidden="true">🌸</div>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </div>
      ))}
    </div>
  );
}