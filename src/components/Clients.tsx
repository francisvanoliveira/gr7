import React from 'react';
// Assume this is your carousel component - replace with the actual import path if different
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
const partners = [
  { name: "Ancho", logo: "/img/clientes/Ancho.png" }, // Replace with actual paths
  { name: "Aphrodite Park Motel", logo: "/img/clientes/Aphrodite.png" },
  { name: "Grupo Bringel", logo: "/img/clientes/Bringel.png" },
  { name: "Chateau Moteu", logo: "/img/clientes/Chateau.png" },
  { name: "DaVinci Hotel", logo: "/img/clientes/Davinci.png" },
  { name: "Eros Motel", logo: "/img/clientes/Eros.png" },
  { name: "Marinha do Brasil", logo: "/img/clientes/Marinha.png" },
  { name: "Tahiti Motel", logo: "/img/clientes/Tahiti.png" },
  { name: "Winner", logo: "/img/clientes/Winner.png" },
];

const Clients: React.FC = () => {
  return (
    <section className="py-20"> {/* Adicionado padding vertical */}
      <div className="container mx-auto px-6"> {/* Container centralizado com padding horizontal */}
        <div className="text-center mb-16"> {/* Alinhamento central e margem inferior para o título */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4"> {/* Estilo para o título */}
            Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Clientes</span>{" "} {/* Exemplo de destaque com gradiente */}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"> {/* Subtítulo */}
            Tecnologia, expertise e parceria para soluções completas e de alto desempenho
          </p>
        </div>

        {/* Carrossel de Parceiros */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3"> {/* Adjust basis for responsive items */}
                <div className="p-1">
                  <Card className="h-full flex flex-col items-center justify-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300"> {/* Card styling */}
                    <CardContent className="flex flex-col items-center p-0">
                      {/* Placeholder da Logo - Substitua pela sua imagem real */}
                      <img src={partner.logo} alt={`${partner.name} Logo`} className="w-42 h-42 object-contain mb-4 rounded-md" /> {/* Image styling */}
                      <p className="text-lg font-semibold text-center text-foreground">{partner.name}</p> {/* Name styling */}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Clients;