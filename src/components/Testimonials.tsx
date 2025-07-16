import React from 'react';
import { Card, CardContent } from "@/components/ui/card"; // Garantindo a importação de CardContent
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import Autoplay from 'embla-carousel-autoplay';
// Dados de exemplo para os depoimentos
const testimonials = [
  {
    text: "O Da Vinci Hotel e a Rede Pw Motéis sofriam constantemente com problemas recorrentes a TI nas empresas. A GR7 Tecnologia juntamente com a sua equipe veio para melhorar e muito nossos processos, fizeram um trabalho excepcional onde conseguiram identificar os gargalos e posteriormente seguimos com as recomendações nas empresas do grupo. Esse processo durou mais ou menos uns 6 (seis) meses até corrigirmos todas as falhas. Hoje a GR7 está atuando conosco em todo nosso grupo na Gestão de TI com Suporte aos usuários, Gestão de Redes, Gestão de Servidores, Gestão do sistema dos nossos motéis e CFTV. A GR7 hoje é um grande parceiro essencial para o bom funcionamento da rede.",
    name: "Petrônio Machado III",
    title: "Sócio Proprietário - Grupo PPM / Grupo PW",
    image: "/img/clientes/Petronio.jpeg", // Substitua pelo caminho real da imagem
  },
  {
    text: "Trabalhamos com a GR7 há um bom tempo, desde então tivemos a necessidade de firmarmos um contrato de prestação de serviços para suporte em TI. Tínhamos muitos problemas com relação a rede, computadores e sistemas, devido ao funcionamento 24 horas algumas vezes precisamos de suporte na madrugada e a GR7 responde a nossa demanda. Todas as vezes que o Tahiti Motel precisou de um suporte nunca nos foi negado, temos o suporte por acesso remoto ou aqui no local mesmo. O Tahiti Motel gosta muito do trabalho da GR7, que nos oferece um ótimo serviço, não temos o que reclamar. Muitos passaram por aqui, não resolviam nossos problemas e a recorrência era grande. A equipe do Sr. Guilherme está de parabéns e só temos a falar coisas positivas sobre eles.	",
    name: "Mara Mendes",
    title: "Gerente Geral - Tahiti Motel",
    image: "/img/clientes/Mara.jpeg", // Substitua pelo caminho real da imagem
  },
  {
    text: "Já trabalhamos a um tempo com a empresa GR7 e durante esses anos não tenho nada a reclamar, sempre fomos bem atendidos, obtivemos qualidade na prestação do serviço, pontualidade, além de um ótimo atendimento! Parabenizo a toda equipe pelo comprometimento e pela parceria de sempre. Obrigada a todos da GR7, Um forte abraço!	",
    name: "Elisangela Barcausca",
    title: "Gerente Administrativo - Yanmar",
    image: "/img/clientes/Elisangela.jpeg", // Substitua pelo caminho real da imagem
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100"> {/* Adicionado um background leve */}
      <div className="container mx-auto px-12 text-center"> {/* Adicionado um padding horizontal maior */}
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12"> {/* Título com cor primária */}
          O que dizem nossos clientes
        </h2>

        <Carousel
 plugins={[
 Autoplay({
 delay: 4000, // Tempo em milissegundos entre os slides (ex: 4 segundos)
 stopOnInteraction: true, // Pausar ao interagir com o carrossel
 }),
 ]}
          opts={{
            align: "start",
            loop: true,
 }}
          className="w-full max-w-4xl mx-auto"
 >
           <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                {/* Estrutura corrigida: Card -> div com fundo/padding -> CardContent -> Conteúdo */}
                <Card className="border-0 shadow-none outline-none border-transparent"> {/* Card sem borda/sombra */}
                  <div className="p-8 bg-[#F3F4F6] rounded-lg"> {/* Div com fundo e padding */}
                    <CardContent className="p-0"> {/* CardContent com padding 0 */}
                      <p className="text-lg italic text-muted-foreground mb-8 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center justify-center mt-4"> {/* Centralizando o conteúdo */}
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div className="text-left">
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-8" /> {/* Posição das setas ajustada */}
          <CarouselNext className="-right-8" /> {/* Posição das setas ajustada */}
        </Carousel>
      </div>
    </section>
  );
};

// Exportação padrão garantida
export default Testimonials;
