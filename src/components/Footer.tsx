import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-col about">
          <a className="brand" href="#home">Florecer</a>
          <p className="muted">Flores artesanais • Embalagens sustentáveis • Entrega expressa</p>
          <small className="muted">© {new Date().getFullYear()} Florecer. Todos os direitos reservados.</small>
        </div>

        <div className="footer-col links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#produtos">Shop</a></li>
            <li><a href="#sobre">About</a></li>
            <li><a href="#vantagens">Services</a></li>
            <li><a href="#depoimentos">Testimonials</a></li>
          </ul>
        </div>

        <div className="footer-col support">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#contato">Contact Us</a></li>
            <li><a href="#contato">Shipping & Returns</a></li>
            <li><a href="#contato">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-col contact">
          <h4>Contact</h4>
          <address>
            <div>Rua das Flores, 123 • Cidade</div>
            <div>Tel: <a href="tel:+5511999999999">+55 11 99999-9999</a></div>
            <div>Email: <a href="mailto:contato@florecer.ex">contato@florecer.ex</a></div>
          </address>

          <div className="social">
            <a href="#" aria-label="Instagram" className="social-link">
              {/* Instagram SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#" aria-label="Facebook" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 2h-3a4 4 0 0 0-4 4v3H8v3h3v7h3v-7h2.5l.5-3H14V6a1 1 0 0 1 1-1h3V2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#" aria-label="Whatsapp" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 3a11 11 0 0 0-19.8 6.1L1 21l11-2.9A11 11 0 0 0 21 3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 3c-1.5 1-2.7 2.7-3 4.5-.3 1.8 0 3.4 1 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}