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
 <section id="servicos" className="py-20">
 <div className="container mx-auto px-6 text-center">
 <h2 className="text-3xl font-bold text-center text-foreground mb-12">Nossos Serviços</h2>
 <Services /> {/* Use the Services component here */}
 </div> </section>      <section id="projetos">
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
      </section>      
      <section id="contato">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
