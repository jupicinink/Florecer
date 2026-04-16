import React from 'react';

export default function Testimonials() {
  const t = [
    { name: "Mariana", text: "A entrega foi perfeita e as flores duraram muito — recomendo!" },
    { name: "Rodrigo", text: "Atendimento atencioso e arranjo lindo, superou expectativa." },
    { name: "Ana", text: "Embalagem sustentável e muito cuidado nos detalhes." },
  ];

  return (
    <div className="testimonials">
      {t.map((p, i) => (
        <blockquote key={i} className="testimonial">
          <p>“{p.text}”</p>
          <footer>- {p.name}</footer>
        </blockquote>
      ))}
    </div>
  );
}