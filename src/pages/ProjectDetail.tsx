import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Code,
  Users,
  ScanFace,
  CheckCircle,
  Calendar,
  MapPin,
  Target,
  Zap,
  Award,
  TrendingUp
} from "lucide-react";

const ProjectDetail = () => {
  const { projectId } = useParams();

  const projects = {
    "sistemas-desenvolvidos": {
      icon: Code,
      title: "Sistemas Desenvolvidos",
      description: "Desenvolvimento de sistemas personalizados para atender às necessidades específicas de cada cliente, com foco em usabilidade e performance.",
      longDescription: "Desenvolvemos soluções digitais sob demanda, incluindo sites institucionais e sistemas personalizados. Nossos projetos priorizam a usabilidade, a eficiência operacional e a integração com as necessidades reais de cada cliente — como sistemas internos de controle e plataformas especializadas para setores como suporte técnico e saúde.",
      challenge: "Atender diferentes segmentos com soluções eficazes e flexíveis, criando desde sites institucionais até sistemas robustos.",
      solution: "Utilizamos metodologias ágeis com foco em desenvolvimento eficiente, seguro e escalável. Nossas soluções são construídas para automatizar processos, integrar sistemas e atender com precisão às demandas operacionais de cada cliente.",
      results: [
        "Redução de 60% no tempo de processos manuais",
        "Aumento de 40% na produtividade das equipes",
        "Interface 95% mais intuitiva que sistemas anteriores",
        "100% de satisfação dos usuários finais"
      ],
      technologies: ["React", "Node.js", "Python", "MySQL", "AWS", "Docker"],
      features: [
        "Interface moderna e responsiva",
        "Desenvolvimento web full-stack",
        "Integração com APIs externas",
        "Dashboard administrativo",
        "Relatórios"
      ],
      timeline: "2-6 meses",
      status: "Múltiplos projetos ativos",
      clients: "15+ empresas atendidas",
      category: "Desenvolvimento"
    },
    "seguranca-colaborativa": {
      icon: Users,
      title: "Projeto Segurança Colaborativa",
      description: "Sistema inovador de segurança colaborativa que integra diferentes tecnologias para criar um ambiente seguro e conectado.",
      longDescription: "Uma solução inteligente de segurança colaborativa onde o morador tem acesso a uma câmera instalada na frente de sua residência e, por meio de um sistema exclusivo, pode visualizar também as imagens das demais câmeras da rede. Com modelo de comodato e assinatura mensal, o projeto já está ativo no Conjunto Nova República e em expansão para novos bairros.",
      challenge: "Promover a segurança em áreas urbanas com baixo acesso à vigilância, criando uma rede acessível, colaborativa e de fácil adesão por meio de comodato e pagamento mensal.",
      solution: "Sistema de monitoramento coletivo com câmeras instaladas nas residências, acesso remoto via plataforma integrada e visualização cruzada entre os participantes, fortalecendo a vigilância comunitária de forma contínua e inteligente.",
      results: [
        "Maior cobertura de monitoramento do bairro",
        "Aumento de 85% na eficiência de monitoramento",
        "Cobertura de segurança 24/7",
        "Prevenção proativa de 90% dos incidentes"
      ],
      technologies: ["IoT", "Cloud Computing", "Mobile Apps", "IA"],
      features: [
        "Monitoramento integrado multi-câmeras",
        "Alertas em tempo real",
        "Gestão centralizada",
        "Dashboard analítico avançado",
        "Protocolos de resposta"
      ],
      timeline: "Recorrente",
      status: "Implementado",
      clients: "+30 Clientes",
      category: "Inovação"
    },
    "catraca-reconhecimento": {
      icon: ScanFace,
      title: "Catraca com Reconhecimento Facial",
      description: "Solução avançada para controle de acesso em escolas utilizando tecnologia de reconhecimento facial para maior segurança e praticidade.",
      longDescription: "Sistema de controle de acesso com reconhecimento facial, idealizado para escolas, que registra a entrada e saída dos alunos em tempo real. As informações são enviadas automaticamente para os pais por meio de um aplicativo, promovendo maior segurança, reduzindo a evasão escolar e fortalecendo o vínculo entre família e instituição.",
      challenge: "Desenvolver uma solução escalável e adaptável, capaz de atender escolas em todo o Brasil e também outras instituições que demandam controle rigoroso de acesso, com foco em segurança, eficiência e integração com sistemas já existentes.",
      solution: "Implantação de catracas inteligentes com reconhecimento facial, integração com aplicativo dos pais para envio de notificações e painel completo para a escola gerenciar acessos, gerar relatórios e aplicar os dados de forma estratégica. Adaptável a outros segmentos que exigem controle de entrada e saída.",
      results: [
        "100% de precisão no reconhecimento facial",
        "Redução de 95% no tempo de entrada/saída",
        "Eliminação completa de cartões perdidos",
        "Segurança escolar aumentada em 80%"
      ],
      technologies: ["Computer Vision", "Biometria Facial", "Hardware IoT", "Software Embarcado", "Mobile Apps", "APIs"],
      features: [
        "Reconhecimento facial em tempo real",
        "Controle de acesso automatizado",
        "Notificações para pais via app",
        "Relatórios detalhados de presença",
        "Interface administrativa web",
        "Backup de dados seguro"
      ],
      timeline: "Recorrente",
      status: "Em desenvolvimento",
      clients: "3 escolas piloto",
      category: "Segurança"
    }
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Projeto não encontrado</h1>
          <Link to="/">
            <Button>Voltar ao início</Button>
          </Link>
        </div>
      </div>
    );
  }

  const ProjectIcon = project.icon;
  const statusColor = project.status.includes("desenvolvimento") ? "bg-blue-500" :
                     project.status.includes("Implementado") ? "bg-green-500" : "bg-purple-500";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* REMOVED: Breadcrumb section with back button */}

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-elegant">
            <ProjectIcon className="h-12 w-12 text-primary-foreground" />
          </div>
          <div className="mb-6">
            <Badge className={`${statusColor} text-white border-none mb-4`}>
              <CheckCircle className="w-3 h-3 mr-1" />
              {project.status}
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
            {project.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-primary-foreground border-none">
              <Calendar className="h-3 w-3 mr-1" />
              {project.timeline}
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-primary-foreground border-none">
              <Users className="h-3 w-3 mr-1" />
              {project.clients}
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-primary-foreground border-none">
              <Target className="h-3 w-3 mr-1" />
              {project.category}
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
              {/* Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Visão Geral do Projeto</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.longDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <Target className="h-5 w-5 mr-2 text-primary" />
                      Desafio
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.challenge}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-primary" />
                      Solução
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.solution}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Funcionalidades Principais</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Results */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <TrendingUp className="h-6 w-6 mr-2 text-primary" />
                    Resultados Alcançados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.results.map((result, index) => (
                      <div key={index} className="flex items-start">
                        <Award className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technologies */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Tecnologias Utilizadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10 text-sm px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Gallery Section - Add this section */}
              <Card>
                <CardHeader>
                  {/* Replace with your chosen icon component */}
                  {/* Ex: <ImageIcon className="h-6 w-6 mr-2 text-primary" /> */}
                  <CardTitle className="text-2xl flex items-center">
                     {/* Add your icon component here */}
                     Galeria de Fotos
                  </CardTitle>
                  <CardDescription>
                    Veja alguns dos nossos projetos e instalações realizadas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Replace with your actual image paths */}
                    <img src="placeholder-image-url-1.jpg" alt="Foto 1" className="rounded-lg shadow-md" />
                    <img src="placeholder-image-url-2.jpg" alt="Foto 2" className="rounded-lg shadow-md" />
                    <img src="placeholder-image-url-3.jpg" alt="Foto 3" className="rounded-lg shadow-md" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Informações do Projeto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <Badge className={`${statusColor} text-white border-none`}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Duração:</span>
                    <span className="font-medium">{project.timeline}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Clientes:</span>
                    <span className="font-medium">{project.clients}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Categoria:</span>
                    <span className="font-medium">{project.category}</span>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="border-primary/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Projeto Similar?</CardTitle>
                  <CardDescription>
                    Vamos conversar sobre suas necessidades
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" size="lg">
                    Solicitar Proposta
                  </Button>
                  <Button variant="outline" className="w-full">
                    Falar no WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Other Projects */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Outros Projetos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(projects)
                    .filter(([key]) => key !== projectId)
                    .slice(0, 2)
                    .map(([key, proj]) => (
                      <Link
                        key={key}
                        to={`/projeto/${key}`}
                        className="block p-3 rounded-lg border border-border hover:border-primary/30 transition-colors"
                      >
                        <div className="font-medium text-foreground mb-1">{proj.title}</div>
                        <div className="text-sm text-muted-foreground line-clamp-2">
                          {proj.description}
                        </div>
                      </Link>
                    ))}
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

export default ProjectDetail;