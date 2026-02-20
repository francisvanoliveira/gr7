
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection"; // Assuming this path
import { Settings } from "lucide-react"; // Import a relevant icon
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Serviços de TI e Infraestrutura | GR7 Tecnologia em Manaus</title>
        <meta name="description" content="Oferecemos um portfólio completo de serviços de TI em Manaus, incluindo suporte técnico, infraestrutura de redes, CFTV e soluções de internet empresarial com Starlink. Otimize sua tecnologia conosco." />
        <link rel="canonical" href="https://gr7tecnologia.com.br/servicos" />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
 <section className="py-20 bg-gradient-hero text-white text-center">
 <div className="w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-elegant">
 <Settings className="h-12 w-12 text-primary-foreground" /> {/* Added Services icon */}
 </div>
 <div className="container mx-auto px-6">
 <h1 className="text-5xl md:text-6xl font-bold mb-6">Nossos Serviços</h1>
 <p className="text-xl text-white/80 max-w-3xl mx-auto">
 Explore a gama completa de soluções tecnológicas que oferecemos para impulsionar o seu negócio.
 </p>
 </div>
 </section>
      <div className="container mx-auto px-6 py-8"> {/* Keep main content container */}
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
