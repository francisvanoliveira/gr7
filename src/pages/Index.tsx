import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Card, CardContent } from "@/components/ui/card"; // Import Card and CardContent
import About from "@/components/About";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <section id="servicos">
        <Services />
      </section>
      <section id="projetos">
        <Projects />
      </section>
      {/* Nossos Clientes Section */}
      <section id="clientes">
        <Clients />
      </section>
      <section id="parceiros">
        <Partners />
      </section>
      {/* Depoimentos Section */}
      <section id="depoimentos">
        <Testimonials />
      </section>      <section id="contato">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
