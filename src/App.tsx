// ...existing code...
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductsCarousel from "./components/ProductsCarousel";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FeaturedProducts from "./components/FeaturedProducts";
import Promotions from "./components/Promotions";

export default function App() {
    return (
        <>
        <Header />

        <main className="site-main">
          {/* HERO (keeps visual prominence) */}
          <section id="home" className="hero section" aria-labelledby="hero-title">
            <div className="container">
              <Hero />
            </div>
          </section>

          {/* PRODUCTS: promotions, featured grid, carousel */}
          <section id="produtos" className="section" aria-labelledby="produtos-title">
            <div className="container">
              <header className="section-header">
                <h2 id="produtos-title" className="section-title">Nossas coleções</h2>
                <p className="section-sub">Flores e arranjos pensados para cada ocasião — casamentos, aniversários e momentos especiais.</p>
              </header>

              <Promotions />

              <FeaturedProducts />

              <div className="spacer-l" />

              <div aria-label="Galeria de produtos">
                <ProductsCarousel />
              </div>
            </div>
          </section>

          {/* ABOUT / WHY US */}
          <section id="sobre" className="section bg-soft" aria-labelledby="sobre-title">
            <div className="container">
              <div className="about-grid">
                <div className="about-copy">
                  <h2 id="sobre-title" className="section-title">Sobre a Florecer</h2>
                  <p className="section-sub">
                    Floristas artesanais, materiais sustentáveis e embalagens pensadas para presentear. Projetamos arranjos com detalhe e carinho para cada momento.
                  </p>
                  <ul className="about-list">
                    <li><strong>Entrega rápida</strong> em horários combinados</li>
                    <li><strong>Embalagem ecológica</strong> e bonita</li>
                    <li><strong>Personalização</strong> para eventos e casamentos</li>
                  </ul>
                  <div className="spacer-s" />
                  <a className="btn-primary" href="#contato">Solicitar orçamento</a>
                </div>

                <div className="about-media" aria-hidden="true">
                  {/* If you have product images, place them here (public/img/bouquet-1.jpg) */}
                  <div className="media-placeholder">Foto do arranjo</div>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURES */}
          <section id="vantagens" className="section" aria-labelledby="vantagens-title">
            <div className="container">
              <h2 id="vantagens-title" className="section-title">Por que escolher Florecer</h2>
              <Features />
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section id="depoimentos" className="section" aria-labelledby="depoimentos-title">
            <div className="container">
              <h2 id="depoimentos-title" className="section-title">Depoimentos</h2>
              <Testimonials />
            </div>
          </section>

          {/* CONTACT */}
          <section id="contato" className="section" aria-labelledby="contato-title">
            <div className="container">
              <h2 id="contato-title" className="section-title">Fale conosco</h2>
              <p className="section-sub">Pedidos, parcerias ou dúvidas — respondo rápido.</p>
              <a className="btn-primary" href="mailto:contato@florecer.ex">Enviar e-mail</a>
            </div>
          </section>
        </main>

        <Footer />
        </>
    );
}
// ...existing code...