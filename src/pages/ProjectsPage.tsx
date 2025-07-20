import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection"; // Assuming this path
import { FolderOpen } from "lucide-react"; // Import a relevant icon
import { Helmet } from 'react-helmet-async';

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
          <title>GR7 Tecnologia - Projetos</title> {/* Título para serviço não encontrado */}
        </Helmet>
      <Navbar />

      {/* Hero Section */}
 <section className="py-20 bg-gradient-hero text-white text-center">
 <div className="w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-elegant">
 <FolderOpen className="h-12 w-12 text-primary-foreground" /> {/* Changed icon to FolderOpen */}
 </div>
 <div className="container mx-auto px-6">
 <h1 className="text-5xl md:text-6xl font-bold mb-6">Nossos Projetos</h1>
 <p className="text-xl text-white/80 max-w-3xl mx-auto">
 Conheça nossos projetos e descubra como a inovação aplicada transforma ideias em soluções reais para diversos segmentos.
 </p>
 </div>
 </section>
      <div className="container mx-auto px-6 py-8"> {/* Keep main content container */}
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;