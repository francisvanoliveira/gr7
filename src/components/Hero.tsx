import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Shield, Network } from "lucide-react";
import { Link } from "react-router-dom"; // Importe Link
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Importe loadSlim

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-primary/20 rounded-full"></div>
      </div>
      
      {/* tsParticles */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0 w-full h-full" // Posiciona absolutamente, atrás do conteúdo e garante full width/height

        options={{
          fullScreen: {
            enable: false //Impede que ocupe a tela inteira
          },
          background: {
            color: {
              value: "transparent", // Fundo transparente
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#cccccc", // Cor cinza claro das partículas
            },
            links: {
              color: "#cccccc", // Cor cinza claro das linhas
              distance: 150,
              opacity: 0.3,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true, // Habilita o movimento das partículas
              random: true, // Adiciona um pouco de aleatoriedade ao movimento
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true, // Habilita a densidade para controlar a quantidade
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.1, // Diminuído ainda mais para deixar as partículas mais fracas
            },
            shape: {
              type: "circle", // Formato das partículas
            },
            size: { // Tamanho das partículas
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        init={async (engine: Engine) => {
          // Você pode carregar plugins aqui, se necessário:
          await loadSlim(engine); // por exemplo para o bundle "slim"
          // await loadBasic(engine); // ou para o bundle "basic"
        }}
        loaded={async (container: Container | undefined) => {
          // Container loaded
        }}
      />

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
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
            <Link to="/servicos">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-elegant transition-all duration-300 transform hover:scale-105"
              >
                Conheça Nossos Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
 </Button>
 </Link>
            <Link to="/projetos">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/30 text-[#101A35] hover:bg-transparent hover:text-white hover:border-white transition-all duration-300"
              >
              Ver Projetos
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;