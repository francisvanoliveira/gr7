import { Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/8b3a65b0-1726-4017-bd86-0f4d45879701.png" 
              alt="GR7 Tecnologia" 
              className="h-16 object-contain mb-4 brightness-0 invert"
            />
            <p className="text-background/80 mb-4 leading-relaxed">
              A GR7 Tecnologia é especializada em soluções completas de TI, 
              oferecendo suporte técnico, infraestrutura e projetos inovadores 
              para empresas de todos os portes.
            </p>
            <div className="flex items-center text-background/60">
              <span>Feito com</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>pela equipe GR7</span>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold text-background mb-4">Serviços</h4>
            <ul className="space-y-2 text-background/80">
              <li className="hover:text-primary transition-colors cursor-pointer">Suporte T.I.</li>
              <li className="hover:text-primary transition-colors cursor-pointer">CFTV</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Infraestrutura</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Redes e WiFi</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Suporte Hotéis</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-background mb-4">Contato</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">(11) 9999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">contato@gr7tecnologia.com.br</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 GR7 Tecnologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;