import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "a.jpg","b.jpg","c.jpg","d.jpg","e.jpg","f.jpg","g.jpg","h.jpg","i.jpg","k.jpg","l.jpg","m.jpg"
];

export default function ProductsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setInterval(() => {
      setIndex(i => (i + 1) % IMAGES.length);
    }, 3500);
    return () => { if (timer.current) window.clearInterval(timer.current); };
  }, [paused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function prev() { setIndex(i => (i - 1 + IMAGES.length) % IMAGES.length); }
  function next() { setIndex(i => (i + 1) % IMAGES.length); }

  return (
    <section
      className="carousel"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {IMAGES.map((name, i) => (
          <div className="carousel-item" key={name} aria-hidden={i !== index}>
            <img src={`/img/${name}`} alt={`Produto ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <button className="carousel-btn prev" onClick={prev} aria-label="Anterior">‹</button>
      <button className="carousel-btn next" onClick={next} aria-label="Próximo">›</button>

      <div className="carousel-dots" role="tablist" aria-label="Navegação do carrossel">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-selected={i === index}
            role="tab"
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}