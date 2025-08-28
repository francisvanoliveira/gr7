import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Shield, Network } from "lucide-react";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Particles from "react-tsparticles"; // Importe o componente Particles
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

const Hero = () => {
  const particlesInit = async (main: Engine) => {
    await loadSlim(main);
  };

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("tsParticles container loaded", container);
  };

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
        className="absolute inset-0 z-0 w-full h-full"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: false,
          },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#cccccc", // Cor cinza claro das partículas
            },
            links: {
              color: "#cccccc", // Cor cinza claro das linhas
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="container mx-auto px-6 relative z-10 min-h-[400px]">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-10 animate-fade-in">
            Soluções em
            <span className="text-blue-600 block">
              Tecnologia
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-in">
            Transformando negócios através da inovação tecnológica.
            Suporte especializado, infraestrutura robusta e projetos personalizados.
          </p>

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