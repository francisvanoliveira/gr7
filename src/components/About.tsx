import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white"> {/* Adicionado padding e fundo branco */}
      <div className="container mx-auto px-6"> {/* Container centralizado com padding horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> {/* Layout de duas colunas responsivo com gap */}
          {/* Coluna da Esquerda (Texto) */}
          <div className="space-y-6"> {/* Espaçamento vertical entre os elementos de texto */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight"> {/* Estilo para o título principal */}
              Nascida para <span className="bg-gradient-primary bg-clip-text text-transparent">transformar a TI das empresas</span>
            </h2>
            <h3 className="text-xl md:text-2xl text-gray-700 font-semibold"> {/* Estilo para o subtítulo */}
              Conectando segurança, suporte e inovação desde 2012.
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg"> {/* Estilo para o parágrafo */}
              A GR7 Tecnologia é uma empresa de TI com 10+ anos de atuação dedicada a entregar suporte técnico, infraestrutura de redes (wired e wireless), CFTV, consultoria e criação de sites para empresas de pequeno, médio e grande porte. Com atendimento ágil — inclusive remoto, 24×7 — e foco na redução de custos, segurança proativa e monitoramento constante, a GR7 une qualidade, respeito e honestidade para promover a transformação digital dos negócios na região.
            </p>
          </div>
          {/* Coluna da Direita (Ilustração) */}
          <div className="flex justify-center md:justify-end"> {/* Alinha a ilustração à direita em telas maiores */}
            {/* Placeholder para a ilustração - Substitua por sua imagem ou SVG real */}
            <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center text-gray-500"> {/* Placeholder visual */}
              Ilustração Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;