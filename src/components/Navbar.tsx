import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
// Corrigido o caminho de importação para menubar.tsx
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarSub, MenubarSubTrigger, MenubarSubContent } from "../components/ui/menubar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/servicos", isSectionLink: true },
    { name: "Projetos", href: "/projetos", isSectionLink: true },
    { name: "Contato", href: "/contact" },
 ];


   const serviceSubItems = [
      { name: "Suporte de T.I.", href: "/servico/suporte-ti" },
      { name: "CFTV", href: "/servico/cftv" },
      { name: "Infraestrutura", href: "/servico/infraestrutura" },
      { name: "Rede e WiFi", href: "/servico/rede-wifi" },
      { name: "Hotéis e Motéis", href: "/servico/hoteis" },
      { name: "Suporte Especializado", href: "/servico/suporte-especializado" },
  ];

  const projectSubItems = [
      { name: "Sistemas Desenvolvidos", href: "/projeto/sistemas-desenvolvidos" },
      { name: "Projeto Segurança Colaborativa", href: "/projeto/seguranca-colaborativa" },
      { name: "Catraca com Reconhecimento Facial", href: "/projeto/catraca-reconhecimento" },
  ];


  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("/#") && location.pathname === "/") {
        return location.hash === href.replace("/", "");
    }
    return location.pathname === href;
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      if (location.pathname !== "/") {
        window.location.href = `/${href}`;
        return;
      }
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-lg"
        : "bg-transparent backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/uploads/GR7.png"
              alt="GR7 Tecnologia"
              className={`h-8 w-auto transition-all duration-300`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
             {/* Mantido o layout original, usando botões e Links */}
            {navItems.map((item) => (
               // Usa Link para a página inicial e botões para scroll em outras seções
              item.href === "/" || item.href === "/contact" || item.href === "/servicos" || item.href === "/projetos"? (
 <Link key={item.name}
                     to={item.href}
                     className={`text-sm font-medium transition-colors hover:text-primary ${
                       isActive(item.href)
                         ? "text-primary border-b-2 border-primary pb-1"
                         : isScrolled
                           ? "text-muted-foreground hover:text-foreground"
                           : "text-white/90 hover:text-white"
                     }`}
                  >
                     {item.name}
                  </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href)
                      ? "text-primary border-b-2 border-primary pb-1"
                      : isScrolled
                        ? "text-muted-foreground hover:text-foreground"
                        : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact">
            <Button
              variant={isScrolled ? "default" : "outline"}
              className={isScrolled
                ? "bg-primary hover:bg-primary-hover"
                : "bg-transparent border border-white text-white hover:bg-white hover:text-primary"
              }
            >
              Orçamento
            </Button>
            </Link>
           
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled ? "text-foreground" : "text-white"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            {/* Adicionada a classe bg-white aqui para o fundo branco */}
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border bg-white"> {/* Adicionada bg-white */}
              {/* Links principais no mobile */}
              {navItems.map((item) => (
                 item.href === "/" || item.href === "/contact" || item.href === "/servicos" || item.href === "/projetos" ? ( 
              <Link key={item.name}
                     to={item.href}
                     className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary w-full text-left ${
                       isActive(item.href)
                         ? "text-primary bg-primary/10"
                         : "text-muted-foreground hover:text-foreground"
                     }`}
                     onClick={() => setIsMenuOpen(false)} // Fecha o menu mobile ao clicar
                  >
                     {item.name}
                  </Link>
                 ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary w-full text-left ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </button>
                 )
              ))}
              
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
