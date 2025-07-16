import React, { useRef, useEffect, useState } from 'react';
import { Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card"; // Garante a importação de Card e CardContent
import Autoplay from 'embla-carousel-autoplay';
import type { EmblaCarouselType } from 'embla-carousel'; // Importe o tipo, se necessário

const partners = [
  { name: "Ancho", logo: "/img/clientes/Ancho.png" },
  { name: "Aphrodite Park Motel", logo: "/img/clientes/Aphrodite.png" },
  { name: "Grupo Bringel", logo: "/img/clientes/Bringel.png" },
  { name: "Chateau Motel", logo: "/img/clientes/Chateau.png" },
  { name: "DaVinci Hotel", logo: "/img/clientes/Davinci.png" },
  { name: "Eros Motel", logo: "/img/clientes/Eros.png" },
  { name: "Marinha do Brasil", logo: "/img/clientes/Marinha.png" }, // Corrigido nome duplicado
  { name: "Tahiti Motel", logo: "/img/clientes/Tahiti.png" }, // Corrigido nome duplicado
  { name: "Winner Despachos", logo: "/img/clientes/Winner.png" }, // Corrigido nome duplicado
];

const Clients: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  useEffect(() => {
    if (!api) {
      return;
    }

    // Os listeners para pausar e resetar o autoplay na interação são tratados pelo plugin Autoplay quando passado para a propriedade plugins.
    // Não é necessário adicioná-los manualmente aqui.
    return () => {
      // Função de limpeza vazia, pois os listeners são gerenciados pelo plugin.
    };
  }, []); // Executa apenas uma vez após a montagem do componente

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Clientes</span>{" "}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Tecnologia, expertise e parceria para soluções completas e de alto desempenho
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplay.current]} // Passe a instância do plugin aqui
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full flex flex-col items-center justify-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="flex flex-col items-center p-0">
                      <img src={partner.logo} alt={`${partner.name} Logo`} className="w-42 h-42 object-contain mb-4 rounded-md" />
                      <p className="text-lg font-semibold text-center text-foreground">{partner.name}</p>
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
