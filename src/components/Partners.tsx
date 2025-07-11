import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const partners = [
  { name: "Vega I.T.", logo: "/img/parceiros/Vegait.png", description: "A GR7 Tecnologia conta com a Vega I.T. como parceira estratégica para oferecer soluções completas em tecnologia voltadas à hotelaria, atuando em todas as etapas da jornada do hóspede." }, // Substitua pelos caminhos, nomes e descrições reais
  { name: "Ecxus", logo: "/img/parceiros/Ecxus.png", description: "A GR7 Tecnologia orgulha-se da parceria com a Ecxus Tecnologia, empresa brasileira com mais de 25 anos de expertise em automação para motéis. Juntas, entregamos soluções completas que transformam a experiência do hóspede e aumentam a eficiência operacional dos empreendimentos." }, // Substitua pelos caminhos, nomes e descrições reais
];

const Partners: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Parceiros</span>{" "}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Nossas parcerias estratégicas fortalecem nossas soluções
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <Card key={index} className="h-full flex flex-col items-center justify-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex flex-col items-center p-0">
                {/* Placeholder para o logo */}
                <img src={partner.logo} alt={`${partner.name} Logo`} className="w-42 h-42 object-contain mb-4 rounded-md" />
                <p className="text-lg font-semibold text-center text-foreground">{partner.name}</p>
                <p className="text-sm text-muted-foreground text-center mt-2">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;