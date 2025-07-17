import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import { 
  ArrowLeft, 
  Footprints,
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
      transformSection: {
        title: "Nascida para transformar a TI das empresas",
        description: "Ao contratar nosso serviço de Suporte Técnico, sua empresa pode reduzir em até 40% os custos com TI, graças a um gerenciamento eficiente que coordena e garante a entrega de soluções de alta qualidade. Oferecemos planos personalizados conforme suas necessidades, que vão desde a implantação até o suporte contínuo, com uma equipe técnica qualificada e prazos de atendimento reduzidos. Nosso compromisso é otimizar processos, minimizar riscos e contribuir diretamente para o crescimento do seu negócio—garantindo que, nos momentos imprevisíveis, você saiba com quem contar.",
        image: "/img/suporte/Suporte_gr7.png",
  },
        description:
  "Suporte técnico especializado para manter seus sistemas funcionando perfeitamente. Nossa equipe qualificada oferece atendimento rápido e eficiente para resolver qualquer problema tecnológico da sua empresa.",
  longDescription:
  "Com mais de 10 anos de experiência no mercado, oferecemos suporte técnico completo para empresas de todos os portes. Nossa metodologia garante resolução rápida de problemas e manutenção preventiva para evitar futuras interrupções.",
  features: [
  "Suporte remoto e presencial",
  "Manutenção preventiva e corretiva",
  "Licenças de Softwares e Antivírus",
  "Consultoria técnica especializada",
  "Venda de equipamentos",
  "Relatório mensal dos chamados",
  "Monitoramento proativo de Ativos",
  ],
      galleryDescription: "Veja alguns dos nossos suportes e instalações:",
      galleryImages: [
        "/img/suporte/Suporte_01.jpg",
        "/img/suporte/Suporte_02.jpg",
      ],
 benefits: [
 "Otimização de custos operacionais",
 "Ganho de produtividade",
 "Segurança da informação",
 "Previsibilidade de investimentos",
 ],
 pricing: "Solicite uma visita",
 duration: "Contrato mensal",
    },
    "cftv": {
      icon: Shield,
      title: "CFTV",
      transformSection: {
        title: "Transformando a Segurança com CFTV",
        description: "Realizamos o dimensionamento, configuração e instalação de sistemas de CFTV, utilizando câmeras de alta resolução e tecnologias modernas disponíveis no mercado. Garantimos uma infraestrutura segura e bem planejada, assegurando mais tranquilidade e proteção para sua empresa.",
        image: "/img/cftv/CFTV_gr7.png", // Replace with relevant image if available
 },
      description:
 "Sistemas de circuito fechado de televisão para garantir a segurança do seu negócio com monitoramento 24h e gravação em alta definição.",
 longDescription:
 "Trabalhamos com câmeras de alta resolução e realizamos toda a instalação e configuração, garantindo proteção e tranquilidade para sua empresa.",
 features: [
 "Câmeras HD/4K com visão noturna",
 "Monitoramento remoto via app",
 "Armazenamento em nuvem seguro",
      ],
      galleryDescription: "Confira instalações de CFTV em nossos clientes:",
      galleryImages: [
        "/img/cftv/cftv_galeria_01.jpg",
        "/img/cftv/cftv_galeria_02.jpg",
      ],
      benefits: [
        "Proteção 24/7 do patrimônio",
        "Evidências em alta qualidade",
        "Redução de perdas e furtos",
        "Controle remoto total"
      ],
      pricing: "Solicite uma visita",
      duration: "Instalação em 2-5 dias úteis ou de acordo com a complexidade"
    },
    "infraestrutura": {
      icon: Network,
      title: "Infraestrutura",
      transformSection: {
        title: "Fortalecendo a Base Tecnológica da sua Empresa",
        description: "Desenvolvemos projetos completos de infraestrutura de TI, desde o cabeamento estruturado até a implantação de servidores e organização de datacenters. Planejamos e executamos soluções robustas, seguras e escaláveis, garantindo mais eficiência, estabilidade e suporte ao crescimento da sua operação.",
        image: "/img/infra/Infra_gr7.png", // Replace with relevant image if available
 },
      description:
 "Implementação completa de infraestrutura de TI, desde cabeamento estruturado até servidores e data centers empresariais.",
 longDescription:
 "Cuidamos de toda a base tecnológica da sua empresa, desde o projeto até a implantação completa da infraestrutura. Realizamos cabeamento estruturado, instalação de servidores físicos e virtualizados, montagem de racks, organização de datacenters e mapeamento de ativos. Garantimos uma estrutura segura, escalável e pronta para suportar o crescimento do seu negócio.",
 features: ["Cabeamento estruturado certificado",
        "Servidores de alta performance",
        "Cabeamento estruturado",
        "Racks e gabinetes técnicos",
        "Dimensionamento de equipamentos",
        "Configurações"
      ],
      galleryDescription: "Projetos de infraestrutura que garantem sua operação:",
      galleryImages: [
        "/img/infraestrutura/infra_galeria_01.jpg",
        "/img/infraestrutura/infra_galeria_02.jpg",
      ],
      benefits: [
        "Base sólida para crescimento",
        "Redução de custos operacionais",
        "Maior confiabilidade",
        "Escalabilidade garantida"
      ],
      pricing: "Solicite uma visita",
      duration: "Contrato mensal ou por serviço"
    },
    "rede-wifi": {
      icon: Wifi,
      title: "Rede e WiFi",
      transformSection: {
        title: "Conectividade Inteligente com Redes e Wi-Fi",
        description: "Planejamos e implementamos soluções de rede cabeada e wireless com alto desempenho, garantindo estabilidade, velocidade e segurança para sua empresa. Nossa equipe realiza a segmentação, configuração e otimização da rede, assegurando uma conectividade eficiente e preparada para crescer com o seu negócio.",
        image: "/img/rede/Rede_gr7.png", // Replace with relevant image if available
 },
      description:
 "Soluções completas de conectividade para empresas. Redes cabeadas e wireless de alta performance e segurança.",
 longDescription:
 "Oferecemos soluções completas em redes cabeadas e Wi-Fi, com foco em velocidade, estabilidade e segurança. Realizamos o planejamento, instalação e segmentação da rede, garantindo uma estrutura otimizada para o tráfego de dados e preparada para os desafios do dia a dia corporativo.",
 features: [
 "WiFi empresarial de alta velocidade",
 "Redes cabeadas gigabit",
        "Marketing Digital com Wifi",
        "Venda de equipamentos"
      ],
      galleryDescription: "Redes WiFi e cabeadas para performance total:",
      galleryImages: [
        "/img/rede_wifi/wifi_galeria_01.jpg",
        "/img/rede_wifi/wifi_galeria_02.jpg",
      ],
      benefits: [
        "Conectividade sem falhas",
        "Segurança avançada",
        "Controle total de acesso",
        "Performance otimizada"
      ],
      pricing: "Solicite uma visita",
      duration: "Instalação em 2-5 dias úteis ou de acordo com a complexidade"
    },
    "hoteis": {
      icon: Building,
      title: "Hotéis",
      transformSection: {
        title: "Suporte de TI para Hotéis",
        description: "Oferecemos suporte técnico completo, cabeamento estruturado e organização de redes Wi-Fi para hóspedes e áreas administrativas. Nossa equipe garante conectividade estável, segura e de alta performance, proporcionando mais eficiência para sua operação e uma melhor experiência para seus clientes.",
        image: "/img/hotel/Hoteis_gr7.png", // Replace with relevant image if available
 },
      description:
 "Soluções tecnológicas específicas para o setor hoteleiro, incluindo sistemas de gestão, conectividade e segurança.",
 longDescription:
 "Oferecemos soluções completas em tecnologia para hotéis, com suporte técnico especializado, organização e gerenciamento de redes Wi-Fi para áreas administrativas e de hóspedes, cabeamento estruturado e manutenção da infraestrutura. Garantimos conectividade estável, segura e pronta para proporcionar a melhor experiência tanto para sua equipe quanto para seus clientes.",
 features: [
 "Sistema de gestão hoteleira (PMS)",
 "Internet de alta velocidade para hóspedes",
 "Segurança integrada (CFTV + controle de acesso)",
      ],
      galleryDescription: "Tecnologia aplicada à experiência hoteleira:",
      galleryImages: [
        "/img/hoteis/hoteis_galeria_01.jpg",
        "/img/hoteis/hoteis_galeria_02.jpg",
      ],
      benefits: [
        "Experiência superior do hóspede",
        "Gestão eficiente de operações",
        "Segurança completa",
        "Aumento da satisfação"
      ],
      pricing: "Solicite uma visita",
      duration: "Contrato mensal ou serviço"
    },
    "gestao-moteis": {
      icon: Building,
      title: "Gestão de Motéis",
      transformSection: { // Mantido para o texto
        title: "Automação Inteligente para Motéis",
        description: "Oferecemos uma solução completa para gestão e automação de motéis, com recursos que controlam iluminação, climatização, som, energia e serviços de quarto. Com tecnologia de ponta e integração via aplicativo, o sistema otimiza processos, reduz custos e proporciona mais conforto e privacidade ao hóspede.",
        image: "/img/moteis/Gestao_gr7.png", // Replace with relevant image if available
 },
      description:
 "Atendimento técnico especializado com equipe qualificada para resolver demandas complexas de forma rápida e eficiente.",
 longDescription:
 "Oferecemos um sistema completo de gestão e automação para motéis, com controle total de energia, iluminação, som, climatização e serviços de quarto. Através de recursos como BI, aplicativo exclusivo, painéis inteligentes e automação dos apartamentos, otimizamos a operação, reduzimos custos e proporcionamos mais conforto e autonomia para o hóspede.",
 features: [
 "Suporte especializado",
 "Equipe qualificada",
        "Acompanhamento proativo"
      ],
      galleryDescription: "Casos de sucesso em suporte especializado:",
      galleryImages: [
        "/img/suporte_especializado/suporte_esp_galeria_01.jpg",
        "/img/suporte_especializado/suporte_esp_galeria_02.jpg",
      ],
      benefits: [
        "Resolução de problemas",
        "Expertise especializada",
        "Gestão especializado em Moteis"
      ],
      pricing: "Solicite uma visita",
      duration: "Contrato mensal"
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
                </CardHeader>              <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {/* Garante que service.longDescription seja acessado */}
                    {service.longDescription} 
                  </p>
                </CardContent>
              </Card>

              {/* GR7 Diferencial Section */}
              {service.transformSection && (
              <section className="py-12 bg-white rounded-lg shadow-md">
              <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

              {/* Coluna da Esquerda (Texto) */}
              <div className="space-y-4"> {/* Mantido o espaço interno vertical */}
              <h3 className="text-3xl font-bold text-gray-800 leading-tight">
 {service.transformSection.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
              {service.transformSection.description}
              </p>

              </div>
              {/* Coluna da Direita (Ilustração) */}
              <div className="flex justify-center md:justify">
 <img
              src={service.transformSection.image}
              alt="GR7 Diferencial"
              className="rounded-lg shadow-xl max-h-64 object-cover"
              />
              </div>
              </div>
              </section>
              )}


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
 {service.galleryDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
 <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
 {service.galleryImages.map((imagePath, index) => (
 <img
 key={index}
 src={imagePath}
 alt={`Galeria de Fotos ${index + 1}`}
 className="rounded-lg shadow-md w-full h-auto object-cover"
 />
 ))}                  </div>                </CardContent>              </Card>
              
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
                      <div className="font-semibold">Clientes Satisfeito</div>
                      <div className="text-sm text-muted-foreground">Atendidos com sucesso</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-semibold">Suporte Especializado</div>
                      <div className="text-sm text-muted-foreground">Cuidando do seu processo</div>
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

      <Clients />

      <Footer />
    </div>
  );
};

export default ServiceDetail;