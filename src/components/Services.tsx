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
      description: "Atendimento técnico especializado para manter sistemas funcionando com eficiência e segurança, com foco em prevenção e agilidade.",
      features: ["Suporte remoto e presencial", "Manutenção preventiva", "Consultoria técnica"]
    },
    {
      id: "cftv",
      icon: Shield,
      title: "CFTV",
      description: "Dimensionamento, configuração e instalação de sistemas de monitoramento com câmeras de alta resolução e tecnologia moderna.",
      features: ["Câmeras HD/4K", "Monitoramento remoto", "Instalação e configuração"]
    },
    {
      id: "infraestrutura",
      icon: Network,
      title: "Infraestrutura",
      description: "Projetos completos de infraestrutura de TI, com foco em organização, desempenho e segurança física e lógica.",
      features: ["Cabeamento estruturado", "Data centers", "Organização de data center"]
    },
    {
      id: "rede-wifi",
      icon: Wifi,
      title: "Rede e WiFi",
      description: "Conectividade de alto desempenho para ambientes corporativos, com redes cabeadas e Wi-Fi seguras e bem planejadas.",
      features: ["WiFi empresarial", "Segmentação de rede", "Segurança e desempenho"]
    },
    {
      id: "hoteis",
      icon: Building,
      title: "Hotéis",
      description: "Soluções tecnológicas específicas para o setor hoteleiro, incluindo sistemas de gestão, conectividade e segurança.",
      features: ["Sistema de gestão", "Wi-Fi para áreas internas", "Suporte técnico e rede"]
    },
    {
      id: "gestao-moteis",
      icon: Building,
      title: "Gestao para Moteis",
      description: "Sistemas integrados de gestão e automação para motéis, otimizando serviços, consumo e experiência do cliente.",
      features: ["Controle de energia e som", "Equipe certificada", "Sistema de gestão completo"]
    }
  ];

  return (
    
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
    
  );
};

export default Services;