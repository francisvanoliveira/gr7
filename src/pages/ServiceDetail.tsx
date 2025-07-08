import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowLeft, 
  Image as ImageIcon, // Renomeado para evitar conflito com a tag <img>
  Monitor, 
  Shield, 
  Network, 
  Wifi, 
  Building, 
  HeadphonesIcon,
  CheckCircle,
  Clock,
  Users,
  Star
} from "lucide-react";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const services = {
    "suporte-ti": {
      icon: Monitor,
      title: "Suporte de T.I.",
      description: "Suporte técnico especializado para manter seus sistemas funcionando perfeitamente. Nossa equipe qualificada oferece atendimento rápido e eficiente para resolver qualquer problema tecnológico da sua empresa.",
      longDescription: "Com mais de 10 anos de experiência no mercado, oferecemos suporte técnico completo para empresas de todos os portes. Nossa metodologia garante resolução rápida de problemas e manutenção preventiva para evitar futuras interrupções.",
      features: [
        "Suporte remoto e presencial 24/7",
        "Manutenção preventiva programada",
        "Consultoria técnica especializada",
        "Backup e recuperação de dados",
        "Monitoramento proativo de sistemas",
        "Atualizações e patches de segurança"
      ],
      benefits: [
        "Redução de downtime em até 80%",
        "Aumento da produtividade da equipe",
        "Maior segurança dos dados",
        "Custos previsíveis de TI"
      ],
      pricing: "A partir de R$ 299/mês",
      duration: "Contratos mensais ou anuais"
    },
    "cftv": {
      icon: Shield,
      title: "CFTV",
      description: "Sistemas de circuito fechado de televisão para garantir a segurança do seu negócio com monitoramento 24h e gravação em alta definição.",
      longDescription: "Nossos sistemas de CFTV utilizam tecnologia de ponta para oferecer máxima segurança e tranquilidade. Com câmeras de alta resolução e armazenamento seguro, garantimos proteção completa para sua empresa.",
      features: [
        "Câmeras HD/4K com visão noturna",
        "Monitoramento remoto via app",
        "Armazenamento em nuvem seguro",
        "Detecção de movimento inteligente",
        "Gravação contínua 24/7",
        "Acesso múltiplo dispositivos"
      ],
      benefits: [
        "Proteção 24/7 do patrimônio",
        "Evidências em alta qualidade",
        "Redução de perdas e furtos",
        "Controle remoto total"
      ],
      pricing: "A partir de R$ 1.200/instalação",
      duration: "Instalação em 2-3 dias úteis"
    },
    "infraestrutura": {
      icon: Network,
      title: "Infraestrutura",
      description: "Implementação completa de infraestrutura de TI, desde cabeamento estruturado até servidores e data centers empresariais.",
      longDescription: "Projetamos e implementamos infraestruturas de TI robustas e escaláveis, seguindo as melhores práticas do mercado para garantir performance e confiabilidade.",
      features: [
        "Cabeamento estruturado certificado",
        "Servidores de alta performance",
        "Data centers empresariais",
        "Racks e gabinetes técnicos",
        "Sistemas de energia (UPS/No-break)",
        "Climatização de ambientes"
      ],
      benefits: [
        "Base sólida para crescimento",
        "Redução de custos operacionais",
        "Maior confiabilidade",
        "Escalabilidade garantida"
      ],
      pricing: "Sob consulta",
      duration: "Projeto customizado"
    },
    "rede-wifi": {
      icon: Wifi,
      title: "Rede e WiFi",
      description: "Soluções completas de conectividade para empresas. Redes cabeadas e wireless de alta performance e segurança.",
      longDescription: "Implementamos redes corporativas de alta performance com cobertura total e segurança avançada, garantindo conectividade estável para todos os usuários.",
      features: [
        "WiFi empresarial de alta velocidade",
        "Redes cabeadas gigabit",
        "Segurança WPA3 e firewall",
        "Controle de acesso por usuário",
        "Balanceamento de carga",
        "Monitoramento de tráfego"
      ],
      benefits: [
        "Conectividade sem falhas",
        "Segurança avançada",
        "Controle total de acesso",
        "Performance otimizada"
      ],
      pricing: "A partir de R$ 800/ponto",
      duration: "Instalação em 1-2 dias"
    },
    "hoteis": {
      icon: Building,
      title: "Hotéis e Motéis",
      description: "Soluções tecnológicas específicas para o setor hoteleiro, incluindo sistemas de gestão, conectividade e segurança.",
      longDescription: "Oferecemos soluções completas e específicas para o setor hoteleiro, desde sistemas de gestão até conectividade para hóspedes e segurança integrada.",
      features: [
        "Sistema de gestão hoteleira (PMS)",
        "Internet de alta velocidade para hóspedes",
        "Segurança integrada (CFTV + controle de acesso)",
        "Automação de quartos",
        "Sistema de som ambiente",
        "Wi-Fi guest network seguro"
      ],
      benefits: [
        "Experiência superior do hóspede",
        "Gestão eficiente de operações",
        "Segurança completa",
        "Aumento da satisfação"
      ],
      pricing: "A partir de R$ 2.500/quarto",
      duration: "Implementação em 1-2 semanas"
    },
    "suporte-especializado": {
      icon: HeadphonesIcon,
      title: "Suporte Especializado",
      description: "Atendimento técnico especializado com equipe qualificada para resolver demandas complexas de forma rápida e eficiente.",
      longDescription: "Nossa equipe de especialistas está disponível 24/7 para atender demandas críticas e complexas, garantindo solução rápida e eficiente para sua empresa.",
      features: [
        "Atendimento 24/7 prioritário",
        "Equipe certificada e qualificada",
        "SLA garantido de resposta",
        "Suporte especializado em emergências",
        "Consultoria técnica avançada",
        "Acompanhamento proativo"
      ],
      benefits: [
        "Resolução rápida de problemas",
        "Expertise especializada",
        "Disponibilidade total",
        "Tranquilidade operacional"
      ],
      pricing: "A partir de R$ 599/mês",
      duration: "Suporte contínuo"
    }
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Serviço não encontrado</h1>
          <Link to="/">
            <Button>Voltar ao início</Button>
          </Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-elegant">
            <ServiceIcon className="h-12 w-12 text-primary-foreground" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
            {service.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-primary-foreground border-none">
              <Clock className="h-3 w-3 mr-1" />
              {service.duration}
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-primary-foreground border-none">
              <Star className="h-3 w-3 mr-1" />
              {service.pricing}
            </Badge>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Sobre o Serviço</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {service.longDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">O que está incluído</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Benefícios</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <Star className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Gallery */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <ImageIcon className="w-6 h-6 mr-2 text-primary" />
                    Galeria de Fotos
                    </CardTitle>
                  <CardDescription>
                    Veja alguns dos nossos projetos e instalações realizadas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {/* Placeholder Images - Replace with your actual image paths */}
                    <img src="https://via.placeholder.com/300x200" alt="Galeria de Fotos 1" className="rounded-lg shadow-md w-full h-auto object-cover" />
                    <img src="https://via.placeholder.com/300x200" alt="Galeria de Fotos 2" className="rounded-lg shadow-md w-full h-auto object-cover" />
                    <img src="https://via.placeholder.com/300x200" alt="Galeria de Fotos 3" className="rounded-lg shadow-md w-full h-auto object-cover" />
                    {/* Add more images as needed */}
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* CTA Card */}
              <Card className="border-primary/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Solicite um Orçamento</CardTitle>
                  <CardDescription>
                    Entre em contato para uma consulta personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {service.pricing}
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      {service.duration}
                    </p>
                  </div>
                  <Button className="w-full" size="lg">
                    Solicitar Orçamento
                  </Button>
                  <Button variant="outline" className="w-full">
                    Falar no WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Stats Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Por que escolher a GR7?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-semibold">500+ Clientes</div>
                      <div className="text-sm text-muted-foreground">Atendidos com sucesso</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-semibold">24/7 Suporte</div>
                      <div className="text-sm text-muted-foreground">Disponibilidade total</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-semibold">10+ Anos</div>
                      <div className="text-sm text-muted-foreground">De experiência</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceDetail;