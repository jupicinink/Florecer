import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Florecer — Flores & Arranjos</div>
        <div className="footer-links">
          <a href="#produtos">Produtos</a>
          <a href="#contato">Contato</a>
          <a href="https://instagram.com" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}