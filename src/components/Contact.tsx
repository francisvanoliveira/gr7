import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
  ArrowRight 
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(11) 9999-9999",
      description: "Atendimento comercial"
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@gr7tecnologia.com.br",
      description: "Resposta em até 24h"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, SP",
      description: "Atendemos toda região metropolitana"
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Seg-Sex: 8h às 18h",
      description: "Suporte 24/7 disponível"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary-foreground rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-primary-foreground rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Entre em <span className="bg-gradient-primary bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Pronto para transformar sua infraestrutura tecnológica? Nossa equipe está aqui para ajudar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/15 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-3">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg text-primary-foreground">
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-primary-foreground mb-1">
                      {info.value}
                    </p>
                    <p className="text-sm text-primary-foreground/70">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center lg:text-left">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <MessageCircle className="h-16 w-16 text-primary mb-6 mx-auto lg:mx-0" />
              
              <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                Vamos Conversar?
              </h3>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Nossa equipe de especialistas está pronta para entender suas necessidades 
                e criar soluções personalizadas para sua empresa.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full lg:w-auto bg-primary hover:bg-primary-hover text-primary-foreground shadow-elegant transition-all duration-300 transform hover:scale-105"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full lg:w-auto border-primary-foreground/30 text-[#101A35] hover:bg-primary-foreground/10 ml-0 lg:ml-4 hover:text-white hover:border-white"
                >
                  WhatsApp
                  <MessageCircle className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;