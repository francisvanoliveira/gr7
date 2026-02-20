
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const StarlinkBanner = () => {
  return (
    <section 
      className="relative w-full bg-no-repeat bg-cover bg-center my-20"
      style={{ backgroundImage: "url('/img/starlink/starlink.png')" }}
    >
      <div className="absolute inset-0 bg-black/45"></div>
      
      <div className="relative container mx-auto px-6 py-60 text-white">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Conectividade <span className="text-blue-400">Starlink</span><br />
              para Empresas
            </h2>
            <p className="mt-4 text-lg text-gray-200 max-w-xl mx-auto lg:mx-0">
              Locação de internet via satélite para empresas em Manaus com cobertura nacional, alta velocidade e instalação rápida.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://starlink.gr7tecnologia.com.br/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="https://wa.me/5592991000125?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Starlink%20para%20empresas." target="_blank" rel="noopener noreferrer">
                 <Button size="lg" className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto">
                   Falar no WhatsApp
                 </Button>
              </a>
            </div>
          </div>
          
          {/* Image Content */}
          
        </div>
      </div>
    </section>
  );
};

export default StarlinkBanner;
