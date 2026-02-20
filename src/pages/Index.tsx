
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import About from "@/components/About";
import ProjectsSection from "@/components/ProjectsSection";
import Clients from "@/components/Clients";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet-async';
import StarlinkBanner from "@/components/StarlinkBanner"; // Importa o novo banner

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Helmet>
        <title>GR7 Tecnologia | Soluções em TI, Redes e Segurança em Manaus</title>
        <meta name="description" content="Especialistas em suporte de TI, infraestrutura de redes, CFTV, e internet empresarial com Starlink em Manaus. Transformamos a tecnologia da sua empresa com soluções personalizadas." />
        <link rel="canonical" href="https://gr7tecnologia.com.br/" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <StarlinkBanner /> {/* Adiciona o banner da Starlink */}
      <ServicesSection />
      <ProjectsSection />

      {/* Seção de Clientes */}
      <section id="clientes">
        <Clients />
      </section>
      <section id="parceiros">
        <Partners />
      </section>
      {/* Seção de Depoimentos */}
      <section id="depoimentos">
        <Testimonials />
      </section>
      <section id="contato">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
