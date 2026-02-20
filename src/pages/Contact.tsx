
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import { Helmet } from 'react-helmet-async'; // Importe Helmet

interface FormData {
  nome: string;
  telefone: string;
  email: string;
  nomeEmpresa?: string;
  assunto: string;
  mensagem: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  errors?: Partial<FormData>;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    telefone: '',
    email: '',
    nomeEmpresa: '',
    assunto: '',
    mensagem: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const validate = (data: FormData): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};
    
    if (!data.nome || data.nome.trim().length < 2) {
      newErrors.nome = 'Nome é obrigatório e deve ter pelo menos 2 caracteres';
    }
    
    if (!data.telefone) {
      newErrors.telefone = 'Telefone é obrigatório';
    } else if (!/^[\d\s\(\)\-\+]+$/.test(data.telefone)) {
      newErrors.telefone = 'Formato de telefone inválido';
    }
    
    if (!data.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!data.assunto || data.assunto.trim().length < 3) {
      newErrors.assunto = 'Assunto é obrigatório e deve ter pelo menos 3 caracteres';
    }
    
    if (!data.mensagem || data.mensagem.trim().length < 10) {
      newErrors.mensagem = 'Mensagem é obrigatória e deve ter pelo menos 10 caracteres';
    } else if (data.mensagem.length > 5000) {
      newErrors.mensagem = 'Mensagem muito longa (máximo 5000 caracteres)';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Reset status
    setSubmitStatus('idle');
    setSubmitMessage('');
    
    // Validação local
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch('https://contatosite.gr7.dev/contact-api.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result: ApiResponse = await response.json();

        if (result.success) {
          setSubmitStatus('success');
          setSubmitMessage(result.message);
          
          // Reset form
          setFormData({
            nome: '',
            telefone: '',
            email: '',
            nomeEmpresa: '',
            assunto: '',
            mensagem: '',
          });
          setErrors({});
          
          // Scroll to top para mostrar a mensagem de sucesso
          window.scrollTo({ top: 0, behavior: 'smooth' });
          
        } else {
          setSubmitStatus('error');
          setSubmitMessage(result.message || 'Erro ao enviar mensagem');
          
          // Se houver erros específicos dos campos, aplicá-los
          if (result.errors) {
            setErrors(result.errors);
          }
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
        setSubmitStatus('error');
        setSubmitMessage('Erro de conexão. Verifique sua internet e tente novamente.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contato | GR7 Tecnologia | Fale com Especialistas em TI</title>
        <meta name="description" content="Entre em contato com a GR7 Tecnologia em Manaus. Solicite um orçamento para suporte de TI, redes, CFTV e mais. Estamos prontos para atender sua empresa." />
        <link rel="canonical" href="https://gr7tecnologia.com.br/contato" />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white text-center">
        <div className="w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-elegant">
          <MessageSquare className="h-12 w-12 text-primary-foreground" />
        </div>

        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Estamos prontos para ouvir suas necessidades e oferecer as melhores soluções em tecnologia.
          </p>
        </div>
      </section>

      {/* Status Messages */}
      {submitStatus !== 'idle' && (
        <section className="py-6">
          <div className="container mx-auto px-6">
            <div className={`max-w-2xl mx-auto p-4 rounded-lg border ${
              submitStatus === 'success' 
                ? 'bg-green-50 border-green-200 text-green-800' 
                : 'bg-red-50 border-red-200 text-red-800'
            }`}>
              <div className="flex items-center">
                {submitStatus === 'success' ? (
                  <CheckCircle className="h-5 w-5 mr-2" />
                ) : (
                  <AlertCircle className="h-5 w-5 mr-2" />
                )}
                <span className="font-medium">{submitMessage}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="nome" className="block text-muted-foreground text-sm font-medium mb-2">
                        Nome: <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                          errors.nome ? 'border-red-500 focus-visible:ring-red-500' : ''
                        }`}
                        placeholder="Seu nome completo"
                        disabled={isSubmitting}
                      />
                      {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome}</p>}
                    </div>

                    <div>
                      <label htmlFor="telefone" className="block text-muted-foreground text-sm font-medium mb-2">
                        Telefone: <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                          errors.telefone ? 'border-red-500 focus-visible:ring-red-500' : ''
                        }`}
                        placeholder="(00) 00000-0000"
                        disabled={isSubmitting}
                      />
                      {errors.telefone && <p className="text-red-500 text-xs mt-1">{errors.telefone}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-muted-foreground text-sm font-medium mb-2">
                        Email: <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                          errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''
                        }`}
                        placeholder="seu@email.com"
                        disabled={isSubmitting}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="nomeEmpresa" className="block text-muted-foreground text-sm font-medium mb-2">
                        Nome da Empresa (Opcional):
                      </label>
                      <input
                        type="text"
                        id="nomeEmpresa"
                        name="nomeEmpresa"
                        value={formData.nomeEmpresa || ''}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Nome da sua empresa"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="assunto" className="block text-muted-foreground text-sm font-medium mb-2">
                        Assunto: <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="assunto"
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleChange}
                        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                          errors.assunto ? 'border-red-500 focus-visible:ring-red-500' : ''
                        }`}
                        placeholder="Qual o motivo do seu contato?"
                        disabled={isSubmitting}
                      />
                      {errors.assunto && <p className="text-red-500 text-xs mt-1">{errors.assunto}</p>}
                    </div>

                    <div>
                      <label htmlFor="mensagem" className="block text-muted-foreground text-sm font-medium mb-2">
                        Mensagem: <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        rows={6}
                        className={`flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-vertical ${
                          errors.mensagem ? 'border-red-500 focus-visible:ring-red-500' : ''
                        }`}
                        placeholder="Descreva detalhadamente sua necessidade ou dúvida..."
                        disabled={isSubmitting}
                      />
                      <div className="flex justify-between items-center mt-1">
                        {errors.mensagem && <p className="text-red-500 text-xs">{errors.mensagem}</p>}
                        <p className="text-xs text-muted-foreground ml-auto">
                          {formData.mensagem.length}/5000 caracteres
                        </p>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        'Enviar Mensagem'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Informações de Contato</CardTitle>
                  <CardDescription>
                    Entre em contato conosco através dos canais abaixo
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <div className="font-semibold">Telefone</div>
                      <div className="text-muted-foreground">(92) 99100-0125</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Segunda a Sexta, 8h às 18h
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">contato@gr7tecnologia.com.br</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Resposta em até 24h
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <div className="font-semibold">Localização</div>
                      <div className="text-muted-foreground">Brasília-DF - Matriz</div>
                      <div className="text-muted-foreground">Manaus, AM - Filial</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">💡 Dica</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Para um atendimento mais rápido, seja específico sobre suas necessidades 
                    e inclua detalhes relevantes sobre seu projeto ou empresa.
                  </p>
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

export default Contact;
