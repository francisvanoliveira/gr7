import React, { useState, useEffect } from 'react'; // Importe useState e useEffect
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from './menubar'; // Assumindo que menubar.tsx está no mesmo diretório

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
    <div className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-sm text-gray-800' : 'bg-[#101A35] text-white'}`}>
      <div className="container mx-auto flex items-center">
        {/* Logo */}
        <img
          src="/lovable-uploads/8b3a65b0-1726-4017-bd86-0f4d45879701.png"
          alt="GR7 Tecnologia"
 className={`h-8 w-auto mr-6 transition-opacity duration-300 ${isScrolled ? 'opacity-80' : 'opacity-100'}`} // Exemplo: Mudar opacidade da logo
        />

        {/* Links de Navegação */}
 <div className="flex-grow flex items-center space-x-6">
 {/* Utilize divs simples ou links para os itens de navegação */}
 <div>Home</div>
 {/* Exemplo de dropdown para Serviços - pode adaptar Menubar ou usar outro componente */}
 <div className="relative group">
 <div>Serviços</div>
 {/* Placeholder para submenu - estilizar conforme necessário */}
 <div className="absolute hidden group-hover:block bg-white text-gray-800 mt-2 p-2 rounded shadow">
 <div>Suporte de T.I.</div>
 <div>CFTV</div>
 <div>Infraestrutura</div>
 <div>Rede e WiFi</div>
 <div>Hotéis e Motéis</div>
 <div>Suporte Especializado</div>
 </div>
 </div>
 {/* Placeholder para dropdown de Projetos */}
 <div className="relative group">
 <div>Projetos</div>
 <div className="absolute hidden group-hover:block bg-white text-gray-800 mt-2 p-2 rounded shadow">
 <div>Sistemas Desenvolvidos</div>
 <div>Projeto Segurança Colaborativa</div>
 <div>Catraca com Reconhecimento Facial</div>
 </div>
 </div>
 <div>Contato</div>
 </div>

        {/* Botões de Ação (placeholder) */}
 <div className="flex items-center space-x-4">
 <div>O que há de novo</div>
 <div>Suporte</div>
          {/* Botão 'Loja' - estilizar conforme a imagem */}
 <button className="px-4 py-2 rounded bg-blue-600 text-white">Loja</button>
 </div>
      </div>
    </div>
  );
};

export default Navbar;