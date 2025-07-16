import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Monitor, 
  Shield, 
  Network, 
  Wifi, 
  Building, 
  HeadphonesIcon,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "suporte-ti",
      icon: Monitor,
      title: "Suporte de T.I.",
      description: "Suporte técnico especializado para manter seus sistemas funcionando perfeitamente. Atendimento rápido e eficiente para resolver qualquer problema tecnológico.",
      features: ["Suporte remoto e presencial", "Manutenção preventiva", "Consultoria técnica"]
    },
    {
      id: "cftv",
      icon: Shield,
      title: "CFTV",
      description: "Sistemas de circuito fechado de televisão para garantir a segurança do seu negócio com monitoramento 24h e gravação em alta definição.",
      features: ["Câmeras HD/4K", "Monitoramento remoto", "Armazenamento em nuvem"]
    },
    {
      id: "infraestrutura",
      icon: Network,
      title: "Infraestrutura",
      description: "Implementação completa de infraestrutura de TI, desde cabeamento estruturado até servidores e data centers empresariais.",
      features: ["Cabeamento estruturado", "Servidores", "Data centers"]
    },
    {
      id: "rede-wifi",
      icon: Wifi,
      title: "Rede e WiFi",
      description: "Soluções completas de conectividade para empresas. Redes cabeadas e wireless de alta performance e segurança.",
      features: ["WiFi empresarial", "Redes cabeadas", "Segurança de rede"]
    },
    {
      id: "hoteis",
      icon: Building,
      title: "Hotéis e Motéis",
      description: "Soluções tecnológicas específicas para o setor hoteleiro, incluindo sistemas de gestão, conectividade e segurança.",
      features: ["Sistema de gestão", "Internet para hóspedes", "Segurança integrada"]
    },
    {
      id: "suporte-especializado",
      icon: HeadphonesIcon,
      title: "Suporte Especializado",
      description: "Atendimento técnico especializado com equipe qualificada para resolver demandas complexas de forma rápida e eficiente.",
      features: ["Atendimento 24/7", "Equipe certificada", "SLA garantido"]
    }
  ];

  return (
    <section className="relative py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia para impulsionar seu negócio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-card transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={`/servico/${service.id}`}>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Saber Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;