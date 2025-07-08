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
      longDescription: "Desenvolvemos soluções tecnológicas sob medida, utilizando as melhores práticas de desenvolvimento e tecnologias modernas. Cada sistema é criado pensando na experiência do usuário e na eficiência operacional do cliente.",
      challenge: "Criar sistemas que sejam intuitivos, eficientes e escaláveis, atendendo às necessidades específicas de cada negócio.",
      solution: "Metodologia ágil de desenvolvimento com foco em UX/UI moderno, arquitetura escalável e integração com sistemas existentes.",
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
        "Aplicações mobile nativas",
        "Integração com APIs externas",
        "Dashboard administrativo",
        "Relatórios em tempo real"
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
      longDescription: "Um projeto revolucionário que conecta múltiplos sistemas de segurança em uma rede colaborativa, permitindo monitoramento integrado e resposta rápida a incidentes em tempo real.",
      challenge: "Integrar diferentes sistemas de segurança de múltiplas empresas em uma rede colaborativa eficiente.",
      solution: "Plataforma unificada com IA para detecção de padrões, comunicação em tempo real entre centrais de segurança e protocolos automatizados de resposta.",
      results: [
        "Redução de 70% no tempo de resposta a incidentes",
        "Aumento de 85% na eficiência de monitoramento",
        "Cobertura de segurança 24/7 integrada",
        "Prevenção proativa de 90% dos incidentes"
      ],
      technologies: ["IoT", "AI/ML", "Cloud Computing", "Mobile Apps", "WebRTC", "Blockchain"],
      features: [
        "Monitoramento integrado multi-empresas",
        "Alertas em tempo real com IA",
        "Gestão centralizada de incidentes",
        "Comunicação segura entre centrais",
        "Dashboard analítico avançado",
        "Protocolos automatizados de resposta"
      ],
      timeline: "12 meses",
      status: "Em desenvolvimento",
      clients: "Rede de 8 empresas",
      category: "Inovação"
    },
    "catraca-reconhecimento": {
      icon: ScanFace,
      title: "Catraca com Reconhecimento Facial",
      description: "Solução avançada para controle de acesso em escolas utilizando tecnologia de reconhecimento facial para maior segurança e praticidade.",
      longDescription: "Sistema completo de controle de acesso escolar que utiliza biometria facial avançada para garantir segurança, praticidade e controle total de entrada e saída de alunos, funcionários e visitantes.",
      challenge: "Criar um sistema de controle de acesso escolar que seja seguro, rápido e fácil de usar, garantindo a proteção dos estudantes.",
      solution: "Integração de tecnologia de reconhecimento facial com catracas inteligentes, sistema de notificações para pais e relatórios detalhados para a administração escolar.",
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
      timeline: "4 meses",
      status: "Implementado com sucesso",
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