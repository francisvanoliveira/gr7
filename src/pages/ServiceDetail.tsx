
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet-async';
import { 
  ArrowLeft, 
  Footprints,
  Image as ImageIcon,
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
      description: "Suporte técnico especializado para manter seus sistemas funcionando perfeitamente. Nossa equipe qualificada oferece atendimento rápido e eficiente para resolver qualquer problema tecnológico da sua empresa.",
      longDescription: "Com mais de 10 anos de experiência no mercado, oferecemos suporte técnico completo para empresas de todos os portes. Nossa metodologia garante resolução rápida de problemas e manutenção preventiva para evitar futuras interrupções.",
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
        image: "/img/cftv/CFTV_gr7.png",
      },
      description: "Sistemas de circuito fechado de televisão para garantir a segurança do seu negócio com monitoramento 24h e gravação em alta definição.",
      longDescription: "Trabalhamos com câmeras de alta resolução e realizamos toda a instalação e configuração, garantindo proteção e tranquilidade para sua empresa.",
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
        image: "/img/infra/Infra_gr7.png",
      },
      description: "Implementação completa de infraestrutura de TI, desde cabeamento estruturado até servidores e data centers empresariais.",
      longDescription: "Cuidamos de toda a base tecnológica da sua empresa, desde o projeto até a implantação completa da infraestrutura. Realizamos cabeamento estruturado, instalação de servidores físicos e virtualizados, montagem de racks, organização de datacenters e mapeamento de ativos. Garantimos uma estrutura segura, escalável e pronta para suportar o crescimento do seu negócio.",
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
        image: "/img/rede/Rede_gr7.png",
      },
      description: "Soluções completas de conectividade para empresas. Redes cabeadas e wireless de alta performance e segurança.",
      longDescription: "Oferecemos soluções completas em redes cabeadas e Wi-Fi, com foco em velocidade, estabilidade e segurança. Realizamos o planejamento, instalação e segmentação da rede, garantindo uma estrutura otimizada para o tráfego de dados e preparada para os desafios do dia a dia corporativo.",
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
        image: "/img/hotel/Hoteis_gr7.png",
      },
      description: "Soluções tecnológicas específicas para o setor hoteleiro, incluindo sistemas de gestão, conectividade e segurança.",
      longDescription: "Oferecemos soluções completas em tecnologia para hotéis, com suporte técnico especializado, organização e gerenciamento de redes Wi-Fi para áreas administrativas e de hóspedes, cabeamento estruturado e manutenção da infraestrutura. Garantimos conectividade estável, segura e pronta para proporcionar a melhor experiência tanto para sua equipe quanto para seus clientes.",
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
      transformSection: { 
        title: "Automação Inteligente para Motéis",
        description: "Oferecemos uma solução completa para gestão e automação de motéis, com recursos que controlam iluminação, climatização, som, energia e serviços de quarto. Com tecnologia de ponta e integração via aplicativo, o sistema otimiza processos, reduz custos e proporciona mais conforto e privacidade ao hóspede.",
        image: "/img/moteis/Gestao_gr7.png",
      },
      description: "Atendimento técnico especializado com equipe qualificada para resolver demandas complexas de forma rápida e eficiente.",
      longDescription: "Oferecemos um sistema completo de gestão e automação para motéis, com controle total de energia, iluminação, som, climatização e serviços de quarto. Através de recursos como BI, aplicativo exclusivo, painéis inteligentes e automação dos apartamentos, otimizamos a operação, reduzimos custos e proporcionamos mais conforto e autonomia para o hóspede.",
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
    },
    "internet-empresarial-manaus": {
      icon: Wifi,
      title: "Internet Empresarial de Alta Performance em Manaus",
      description: "Conectividade de alta velocidade e estabilidade para empresas em Manaus. Soluções de internet dedicada e fibra óptica com suporte 24/7.",
      longDescription: "No cenário empresarial de Manaus, uma conexão de internet robusta e confiável não é um luxo, mas uma necessidade fundamental. A GR7 Tecnologia entende essa demanda e oferece soluções de Internet Empresarial que garantem a continuidade dos seus negócios. Seja para sistemas em nuvem, comunicação por VoIP ou a simples navegação, a instabilidade pode gerar perdas significativas. Nosso serviço é desenhado para eliminar esses gargalos, fornecendo uma conexão de alta performance que impulsiona a produtividade. Com a nossa infraestrutura de fibra óptica e links dedicados, sua empresa experimenta uma internet com garantia de banda, baixa latência e, o mais importante, a estabilidade que suas operações exigem. Nossa equipe realiza uma análise completa das suas necessidades para oferecer um plano que se encaixe perfeitamente no seu perfil de uso e orçamento. O suporte técnico 24/7 garante que qualquer eventualidade seja tratada com a máxima prioridade, minimizando qualquer impacto nas suas atividades. Deixe a GR7 ser a parceira que conecta sua empresa ao futuro.",
      features: ["Internet Dedicada (Link Full)", "Fibra Óptica de Alta Velocidade", "Suporte Técnico 24/7", "Garantia de 99.9% de Uptime", "IP Fixo", "Monitoramento Proativo"],
      galleryDescription: "Confira nossa infraestrutura de rede e casos de sucesso em conectividade empresarial.",
      galleryImages: ["/img/internet/internet_01.jpg", "/img/internet/internet_02.jpg"],
      benefits: ["Maior Produtividade da Equipe", "Estabilidade para Sistemas em Nuvem", "Segurança nas Conexões", "Escalabilidade para Crescimento"],
      pricing: "Planos Personalizados",
      duration: "Contrato mensal",
      transformSection: {
        title: "Transforme a Conectividade da sua Empresa em Manaus",
        description: "Com a GR7, sua empresa não apenas contrata um serviço de internet, mas adquire um parceiro estratégico focado em garantir que sua conectividade seja uma vantagem competitiva. Nossas soluções são pensadas para o ambiente de negócios dinâmico de Manaus, oferecendo a robustez que você precisa com a flexibilidade que o mercado exige.",
        image: "/img/internet/internet_transform.jpg"
      }
    },
    "starlink-empresarial-amazonas": {
      icon: Star,
      title: "Starlink Empresarial para o Amazonas",
      description: "Internet de alta velocidade via satélite da Starlink para empresas em locais remotos do Amazonas. Conectividade confiável onde a fibra não chega.",
      longDescription: "O Amazonas, com sua vasta extensão territorial e desafios geográficos, apresenta barreiras significativas para a conectividade terrestre. Para empresas situadas em áreas remotas, como fazendas, indústrias ou comunidades ribeirinhas, a falta de internet de alta velocidade é um grande obstáculo para o crescimento. A GR7 Tecnologia traz a solução com a implementação da Starlink Empresarial. Este serviço revolucionário de internet via satélite oferece alta velocidade e baixa latência, independentemente da sua localização. Somos especialistas na instalação, configuração e manutenção de sistemas Starlink, garantindo que sua empresa tenha acesso ao que há de mais moderno em conectividade global. Nossa equipe avalia a topografia e a estrutura do local para posicionar os equipamentos de forma otimizada, assegurando a máxima performance do sinal. Além da instalação, oferecemos suporte contínuo para garantir que sua conexão permaneça estável e confiável, permitindo que você gerencie suas operações, se comunique com o mundo e explore novas oportunidades de negócio, não importa onde esteja no Amazonas.",
      features: ["Implementação e Suporte Especializado Starlink", "Alta Velocidade e Baixa Latência", "Ideal para Zonas Rurais e Remotas", "Planos de Dados Empresariais", "Instalação Profissional", "Solução de Backup de Internet"],
      galleryDescription: "Veja nossas instalações da Starlink em fazendas, indústrias e comunidades no Amazonas.",
      galleryImages: ["/img/starlink/starlink_01.jpg", "/img/starlink/starlink_02.jpg"],
      benefits: ["Conectividade em Qualquer Lugar do Estado", "Operação Contínua e Sem Interrupções", "Acesso a Mercados e Serviços Digitais", "Competitividade para Negócios Remotos"],
      pricing: "Sob Consulta",
      duration: "Instalação e contrato de serviço",
      transformSection: {
        title: "Leve sua Empresa ao Futuro com Starlink no Amazonas",
        description: "Não deixe que a localização geográfica limite o potencial do seu negócio. Com a Starlink e a expertise da GR7, a conectividade de ponta está ao seu alcance, promovendo a inclusão digital e impulsionando o desenvolvimento econômico em todo o estado do Amazonas.",
        image: "/img/starlink/starlink_transform.jpg"
      }
    },
    "wifi-para-hoteis": {
      icon: Building,
      title: "Wi-Fi de Alta Performance para Hotéis",
      description: "Soluções de Wi-Fi para hotéis que garantem cobertura total, alta velocidade e uma experiência excepcional para os hóspedes.",
      longDescription: "No setor hoteleiro, a qualidade do Wi-Fi é um dos fatores mais importantes para a satisfação do hóspede. Uma conexão lenta, instável ou com falhas de cobertura pode impactar negativamente as avaliações e a reputação do seu hotel. A GR7 Tecnologia é especialista em projetar e implementar redes Wi-Fi de alta performance para hotéis e pousadas. Nossa solução vai além da simples instalação de roteadores. Realizamos um estudo completo da planta do seu estabelecimento para garantir uma cobertura impecável em todos os ambientes, desde os quartos até as áreas comuns. Utilizamos equipamentos corporativos que suportam um grande número de conexões simultâneas sem perda de performance. Implementamos portais de hóspedes (Guest Portals) personalizados, que não só facilitam o acesso, mas também servem como uma poderosa ferramenta de marketing e relacionamento. Ofereça uma experiência de conectividade memorável e transforme o Wi-Fi em um diferencial competitivo para o seu hotel.",
      features: ["Cobertura Wi-Fi Total (Quartos e Áreas Comuns)", "Portal de Hóspedes Personalizado (com Marketing)", "Alta Densidade de Conexões Simultâneas", "Segmentação de Rede para Segurança (Hóspedes e Staff)", "Integração com Sistemas de Gestão Hoteleira (PMS)", "Suporte Técnico Especializado"],
      galleryDescription: "Projetos de Wi-Fi implementados em hotéis de Manaus e região, garantindo a satisfação dos hóspedes.",
      galleryImages: ["/img/wifi_hoteis/wifi_hotel_01.jpg", "/img/wifi_hoteis/wifi_hotel_02.jpg"],
      benefits: ["Aumento da Satisfação e Avaliações dos Hóspedes", "Novas Oportunidades de Marketing e Engajamento", "Gestão Simplificada da Rede", "Segurança para Dados do Hotel e dos Hóspedes"],
      pricing: "Projeto Personalizado",
      duration: "Contrato de manutenção mensal",
      transformSection: {
        title: "Eleve a Experiência do seu Hóspede com um Wi-Fi Inesquecível",
        description: "Em um mercado competitivo, os detalhes fazem a diferença. Um sistema de Wi-Fi robusto e eficiente demonstra o cuidado do seu hotel com a experiência do cliente, fidelizando hóspedes e atraindo novas reservas através de avaliações positivas.",
        image: "/img/wifi_hoteis/wifi_hotel_transform.jpg"
      }
    },
    "infraestrutura-de-rede-corporativa": {
      icon: Network,
      title: "Infraestrutura de Rede Corporativa",
      description: "Projetos e implementação de infraestrutura de rede corporativa, incluindo cabeamento estruturado, switches, roteadores e data centers.",
      longDescription: "A infraestrutura de rede é a espinha dorsal de qualquer empresa moderna. Ela suporta todos os sistemas, comunicações e processos digitais. Uma rede mal planejada pode causar lentidão, falhas de segurança e interrupções que afetam diretamente a produtividade e os resultados do negócio. A GR7 Tecnologia oferece um serviço completo de planejamento, implementação e gerenciamento de infraestrutura de rede corporativa. Nossa abordagem começa com um entendimento profundo das suas operações para desenhar uma arquitetura de rede que seja ao mesmo tempo robusta, segura e escalável. Somos especialistas em cabeamento estruturado, seguindo as mais rigorosas normas técnicas para garantir a qualidade e a certificação da sua rede. Realizamos a organização de racks e a montagem de data centers, criando um ambiente limpo, seguro e de fácil gerenciamento. Com a implementação de switches e roteadores de última geração, garantimos uma gestão de tráfego inteligente e segura. Conte com a GR7 para construir a base tecnológica sólida que sua empresa precisa para crescer.",
      features: ["Projeto de Rede Personalizado e Escalável", "Cabeamento Estruturado (CAT6, CAT6a, Fibra)", "Organização de Racks e Data Centers", "Implementação de Switches e Roteadores Gerenciáveis", "Certificação de Rede e Documentação Técnica", "Segurança de Perímetro (Firewalls)"],
      galleryDescription: "Exemplos de nossa organização e implementação de infraestrutura de rede em clientes corporativos.",
      galleryImages: ["/img/infra_corp/infra_corp_01.jpg", "/img/infra_corp/infra_corp_02.jpg"],
      benefits: ["Rede de Alta Performance e Baixa Latência", "Maior Segurança dos Dados Corporativos", "Facilidade de Manutenção e Expansão", "Redução de Downtime e Problemas de Conexão"],
      pricing: "Orçamento sob Demanda",
      duration: "Por projeto",
      transformSection: {
        title: "A Base Sólida para o Crescimento Digital da sua Corporação",
        description: "Uma infraestrutura de rede bem executada pela GR7 não é um custo, mas um investimento estratégico que habilita a transformação digital, otimiza operações e prepara sua empresa para os desafios e oportunidades do futuro.",
        image: "/img/infra_corp/infra_corp_transform.jpg"
      }
    },
    "monitoramento-inteligente": {
      icon: Shield,
      title: "Monitoramento Inteligente e Segurança Eletrônica",
      description: "Soluções avançadas de monitoramento com câmeras inteligentes, análise de vídeo, alarmes e controle de acesso para empresas.",
      longDescription: "A segurança patrimonial evoluiu. Hoje, não basta apenas gravar imagens; é preciso ter inteligência para prevenir incidentes e agir de forma proativa. A GR7 Tecnologia implementa sistemas de Monitoramento Inteligente que utilizam o poder da Inteligência Artificial para proteger seu negócio. Nossas soluções incluem câmeras de alta resolução com análise de vídeo embarcada, capazes de detectar pessoas, veículos, invasão de perímetro e comportamento suspeito em tempo real. Isso reduz drasticamente o número de falsos alarmes e permite que a equipe de segurança foque no que realmente importa. Integramos o sistema de CFTV com alarmes monitorados e soluções de controle de acesso, como biometria e reconhecimento facial, criando uma barreira de segurança robusta e centralizada. Todo o sistema pode ser gerenciado remotamente, dando a você o controle total da segurança da sua empresa na palma da sua mão. Com o monitoramento inteligente da GR7, você ganha não apenas em segurança, mas também em inteligência operacional, obtendo insights valiosos sobre o fluxo de pessoas e a utilização dos espaços.",
      features: ["CFTV com Câmeras IP de Alta Resolução", "Análise de Vídeo com Inteligência Artificial", "Sistema de Alarme Monitorado 24h", "Controle de Acesso Biométrico e por Cartão", "Monitoramento Centralizado via Nuvem", "Projetos de Segurança Personalizados"],
      galleryDescription: "Sistemas de monitoramento inteligente em ação, protegendo ativos e gerando inteligência para nossos clientes.",
      galleryImages: ["/img/monitoramento/monitoramento_01.jpg", "/img/monitoramento/monitoramento_02.jpg"],
      benefits: ["Segurança Proativa e Detecção de Ameaças", "Redução de Falsos Alarmes", "Controle Total sobre o Acesso de Pessoas", "Inteligência para Tomada de Decisão e Gestão"],
      pricing: "A partir de R$ XXX/mês",
      duration: "Instalação e monitoramento mensal",
      transformSection: {
        title: "Mais que Segurança, Inteligência para seu Negócio",
        description: "Transforme seu sistema de segurança em uma ferramenta estratégica. Com as soluções de monitoramento inteligente da GR7, você protege seu patrimônio e, ao mesmo tempo, coleta dados valiosos para otimizar suas operações e impulsionar seus resultados.",
        image: "/img/monitoramento/monitoramento_transform.jpg"
      }
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
      <Helmet>
          <title>{service.title} | GR7 Tecnologia</title>
          <meta name="description" content={service.description} />
          <link rel="canonical" href={`https://gr7tecnologia.com.br/servico/${serviceId}`} />
      </Helmet>
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

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
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

              {service.transformSection && (
              <section className="py-12 bg-white rounded-lg shadow-md">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-800 leading-tight">
                      {service.transformSection.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {service.transformSection.description}
                    </p>
                  </div>
                  <div className="flex justify-center md:justify">
                    <img
                      src={service.transformSection.image}
                      alt={service.transformSection.title}
                      className="rounded-lg shadow-xl max-h-64 object-cover"
                    />
                  </div>
                </div>
              </section>
              )}

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

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <ImageIcon className="w-6 h-6 mr-2 text-primary" />
                    Galeria de Projetos
                  </CardTitle>
                  <CardDescription>
                    {service.galleryDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.galleryImages.map((imagePath, index) => (
                      <img
                        key={index}
                        src={imagePath}
                        alt={`Galeria de Projetos ${index + 1}`}
                        className="rounded-lg shadow-md w-full h-auto object-cover"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="border-primary/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Pronto para Começar?</CardTitle>
                  <CardDescription>
                    Entre em contato para uma consulta personalizada.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link to="/contact">
                    <Button className="w-full" size="lg">
                      Solicitar Orçamento
                    </Button>
                  </Link>
                  <a
                    href={`https://wa.me/5592991000125?text=Ol%C3%A1%2C%20quero%20informa%C3%A7%C3%B5es%20sobre%20o%20servi%C3%A7o%20de%20${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full">
                      Falar no WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Por que escolher a GR7?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-semibold">Clientes Satisfeitos</div>
                      <div className="text-sm text-muted-foreground">Mais de 200 atendidos</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-semibold">Suporte Ágil</div>
                      <div className="text-sm text-muted-foreground">Respostas em tempo recorde</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-semibold">10+ Anos</div>
                      <div className="text-sm text-muted-foreground">De experiência de mercado</div>
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
