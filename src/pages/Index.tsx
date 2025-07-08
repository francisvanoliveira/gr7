import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <section id="servicos">
        <Services />
      </section>
      <section id="projetos">
        <Projects />
        <Partners />
      </section>
      <section id="contato">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
