import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card"; // Import Card and CardContent
import ServicesSection from "@/components/ServicesSection"; // Import the new ServicesSection component
import About from "@/components/About";
import ProjectsSection from "@/components/ProjectsSection"; // Import the new ProjectsSection component
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
      <ServicesSection /> {/* Use the ServicesSection component here */}
      <ProjectsSection />
      
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
