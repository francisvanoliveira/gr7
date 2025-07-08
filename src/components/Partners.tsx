import React from 'react';
// Assume this is your carousel component - replace with the actual import path if different
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
const partners = [
  { name: "Parceiro 1", logo: "/placeholders/partner-logo-1.png" }, // Replace with actual paths
  { name: "Parceiro 2", logo: "/placeholders/partner-logo-2.png" },
  { name: "Parceiro 3", logo: "/placeholders/partner-logo-3.png" },
  { name: "Parceiro 4", logo: "/placeholders/partner-logo-4.png" },
  { name: "Parceiro 5", logo: "/placeholders/partner-logo-5.png" },
  { name: "Parceiro 6", logo: "/placeholders/partner-logo-6.png" },
];

const Partners: React.FC = () => {
  return (
    <section className="py-20"> {/* Adicionado padding vertical */}
      <div className="container mx-auto px-6"> {/* Container centralizado com padding horizontal */}
        <div className="text-center mb-16"> {/* Alinhamento central e margem inferior para o título */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4"> {/* Estilo para o título */}
            Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Parceiros</span>{" "} {/* Exemplo de destaque com gradiente */}
          </h2>
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
                      <img src={partner.logo} alt={`${partner.name} Logo`} className="w-24 h-24 object-contain mb-4 rounded-md" /> {/* Image styling */}
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

export default Partners;