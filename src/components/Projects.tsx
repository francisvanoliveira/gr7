import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Code, 
  Users, 
  ScanFace, 
  ExternalLink,
  CheckCircle,
  Zap
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: "sistemas-desenvolvidos",
      icon: Code,
      title: "Sistemas Desenvolvidos",
      description: "Desenvolvimento de sistemas personalizados para atender às necessidades específicas de cada cliente, com foco em usabilidade e performance.",
      features: ["Desenvolvimento web", "Interface moderna e responsiva", "Integração APIs"],
      technologies: ["React", "Node.js", "Firebase", "MySQL"],
      status: "Ativo",
      color: "bg-green-500"
    },
    {
      id: "seguranca-colaborativa",
      icon: Users,
      title: "Projeto Segurança Colaborativa",
      description: "Sistema inovador de segurança colaborativa que integra diferentes tecnologias para criar um ambiente seguro e conectado.",
      features: ["Monitoramento integrado", "Alertas em tempo real", "Gestão centralizada"],
      technologies: ["Facial", "IA", "Hardware", "Software"],
      status: "Implementado",
      color: "bg-blue-500"
    },
    {
      id: "catraca-reconhecimento",
      icon: ScanFace,
      title: "Catraca com Reconhecimento Facial",
      description: "Solução avançada para controle de acesso em escolas utilizando tecnologia de reconhecimento facial para maior segurança e praticidade.",
      features: ["Reconhecimento facial", "Controle de acesso", "Relatórios detalhados"],
      technologies: ["Facial", "Controle de Acesso", "Hardware", "Software"],
      status: "Em Desenvolvimento",
      color: "bg-purple-500"
    }
  ];

  return (
    
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Inovação e tecnologia aplicadas em projetos que fazem a diferença
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-3 border-border/50 hover:border-primary/30 relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge 
                  variant="secondary" 
                  className={`${project.color} text-white border-none`}
                >
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {project.status}
                </Badge>
              </div>
              
              <CardHeader className="relative">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-card">
                  <project.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
                
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-primary" />
                    Características
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Tecnologias</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline"
                        className="text-xs border-primary/30 text-primary hover:bg-primary/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Adicionado mb-6 à div que contém os badges de tecnologia */}
                <Link to={`/projeto/${project.id}`} className="mt-6 block">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Saber Mais
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    
  );
};

export default Projects;