import React, { useState, useEffect, useRef } from "react";

/* Use images from public/img — update names to match public/img folder */
const SLIDES = [
  "bouquet-4.jpg",
  "bouquet-5.jpg",
  "bouquet-6.jpg",
  "bouquet-7.jpg",
  "bouquet-8.jpg"
];

const resolveImg = (img: string) => (img.startsWith("/") ? img : `/img/${img}`);

export default function ProductsCarousel() {
  const [index, setIndex] = useState(0);
  const timeout = useRef<number | null>(null);

  useEffect(() => {
    timeout.current = window.setTimeout(() => setIndex((i) => (i + 1) % SLIDES.length), 5000);
    return () => {
      if (timeout.current) window.clearTimeout(timeout.current);
    };
  }, [index]);

  return (
    <div className="carousel" role="region" aria-roledescription="carousel" aria-label="Produtos em destaque">
      <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {SLIDES.map((s, i) => (
          <div className="carousel-item" key={s}>
            <img src={resolveImg(s)} alt={`Destaque ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <button className="carousel-btn prev" onClick={() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)} aria-label="Anterior">‹</button>
      <button className="carousel-btn next" onClick={() => setIndex((i) => (i + 1) % SLIDES.length)} aria-label="Próximo">›</button>

      <div className="carousel-dots" role="tablist" aria-label="Navegar slides">
        {SLIDES.map((_, i) => (
          <button key={i} className={`dot ${i === index ? "active" : ""}`} onClick={() => setIndex(i)} aria-label={`Ir para slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}