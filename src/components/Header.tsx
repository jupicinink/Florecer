import React, { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/">Florecer</a>

        <nav className={`site-nav ${open ? "open" : ""}`} aria-label="Menu principal">
          <a href="#produtos">Coleções</a>
          <a href="#vantagens">Vantagens</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="actions">
          <a className="btn-ghost" href="#contato">Pedir</a>
          <button className="hamburger" onClick={() => setOpen(o => !o)} aria-expanded={open} aria-label="Abrir menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}