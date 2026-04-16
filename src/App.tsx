import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductsCarousel from "./components/ProductsCarousel";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
        <Header />
        <main>
        <Hero />
        <section className="container section" id="produtos">
        <h2 className="section-title">Nossas coleções</h2>
        <p className="section-sub">
        Flores e arranjos pensados para cada ocasião.
        </p>
        <ProductsCarousel />
        </section>
        
        <section className="container section" id="vantagens">
        <h2 className="section-title">Por que escolher Florecer</h2>
        <Features />
        </section>
        
        <section className="container section" id="depoimentos">
        <h2 className="section-title">Depoimentos</h2>
        <Testimonials />
        </section>
        
        <section className="container section contact" id="contato">
        <h2 className="section-title">Fale conosco</h2>
        <p className="section-sub">
        Pedidos, parcerias ou dúvidas — respondo rápido.
        </p>
        <a
        className="btn-primary"
        href="mailto:contato@florecer.ex"
        >
        Enviar e-mail
        </a>
        </section>
        </main>
        <Footer />
        </>
    );
}