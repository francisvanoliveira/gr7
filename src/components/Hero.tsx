import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Shield, Network } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-primary/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/8b3a65b0-1726-4017-bd86-0f4d45879701.png" 
              alt="GR7 Tecnologia" 
              className="mx-auto h-24 md:h-32 object-contain"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Soluções em
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Tecnologia
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-in">
            Transformando negócios através da inovação tecnológica. 
            Suporte especializado, infraestrutura robusta e projetos personalizados.
          </p>
          
          {/* Services Icons */}
          <div className="flex justify-center gap-8 mb-8 animate-slide-up">
            <div className="flex flex-col items-center text-primary-foreground/70">
              <Monitor className="h-8 w-8 mb-2" />
              <span className="text-sm">Suporte T.I.</span>
            </div>
            <div className="flex flex-col items-center text-primary-foreground/70">
              <Shield className="h-8 w-8 mb-2" />
              <span className="text-sm">CFTV</span>
            </div>
            <div className="flex flex-col items-center text-primary-foreground/70">
              <Network className="h-8 w-8 mb-2" />
              <span className="text-sm">Infraestrutura</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-elegant transition-all duration-300 transform hover:scale-105"
            >
              Conheça Nossos Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 text-[#101A35] hover:bg-primary-foreground/10 transition-all duration-300 hover:text-white hover:border-white"
            >
              Ver Projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;