import React, { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 960) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="Florecer — Home">Florecer</a>

        <nav className={`site-nav ${open ? "open" : ""}`} role="navigation" aria-label="Main">
          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#produtos">Shop</a>
          <a className="nav-link" href="#sobre">About</a>
          <a className="nav-link" href="#vantagens">Services</a>
          <a className="nav-link" href="#contato">Contact</a>
        </nav>

        <div className="header-actions">
          <a className="btn-ghost" href="#contato">Order</a>
          <button
            className={`hamburger ${open ? "is-active" : ""}`}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile overlay to close menu when clicking outside */}
      {open && <div className="mobile-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}
    </header>
  );
}