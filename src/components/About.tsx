import React from 'react';

const About: React.FC = () => {
  return (
    <section className="relative py-20 bg-white"> {/* Adicionado padding e fundo branco */}
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
            Com mais de 15 anos de experiência, a GR7 Tecnologia é referência em soluções de infraestrutura de rede, suporte técnico e sistemas de automação voltados ao setor hoteleiro e empresarial. Nosso compromisso é oferecer tecnologia de ponta com estabilidade, segurança e atendimento de excelência.
            </p>
          </div>
          {/* Coluna da Direita (Ilustração) */}
          <div className="flex justify-center md:justify-end"> {/* Alinha a ilustração à direita em telas maiores */}
            {/* Substitua o src pelo caminho real da sua imagem */}
            <img src="/img/site/suporte.png" alt="Ilustração" className="w-74 h-74 object-contain rounded-lg" /> {/* Exemplo com tamanho fixo e objeto cover */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;