import React, { useState, useEffect } from 'react'; // Importe useState e useEffect
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from './button';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false); // Crie o estado isScrolled

  useEffect(() => {
    const handleScroll = () => {
      // Verifique a posição da rolagem
      if (window.scrollY > 50) { // Ajuste o valor 50 conforme necessário para quando a mudança deve acontecer
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Adicione o event listener
    window.addEventListener('scroll', handleScroll);

    // Remova o event listener na limpeza do componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // O array vazio garante que o efeito só seja executado uma vez ao montar e desmontar

  return (
    <div className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-sm text-gray-800' : 'bg-transparent text-gray-800'}`}>
      <div className="container mx-auto flex h-16 items-center">
        {/* Logo */}
        <Link to="/" className="mr-6">
          <img
            src="/lovable-uploads/8b3a65b0-1726-4017-bd86-0f4d45879701.png"
            alt="GR7 Tecnologia"
            className={`h-8 w-auto transition-all duration-300 ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`}
          />
        </Link>

        {/* Links de Navegação */}
        <NavigationMenu className="flex-grow">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Serviços</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  <li><Link to="/servicos/suporte-ti" className="block p-2 hover:bg-accent rounded-md">Suporte de T.I.</Link></li>
                  <li><Link to="/servicos/cftv" className="block p-2 hover:bg-accent rounded-md">CFTV</Link></li>
                  <li><Link to="/servicos/infraestrutura" className="block p-2 hover:bg-accent rounded-md">Infraestrutura</Link></li>
                  <li><Link to="/servicos/rede-wifi" className="block p-2 hover:bg-accent rounded-md">Rede e WiFi</Link></li>
                  <li><Link to="/servicos/hoteis" className="block p-2 hover:bg-accent rounded-md">Hotéis e Motéis</Link></li>
                  <li><Link to="/servicos/suporte-especializado" className="block p-2 hover:bg-accent rounded-md">Suporte Especializado</Link></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contato" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                Contato
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Botões de Ação (placeholder) */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost">O que há de novo</Button>
          <Button variant="ghost">Suporte</Button>
          <Button>Loja</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;