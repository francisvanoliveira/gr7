import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
interface FormData {
  nome: string;
  telefone: string;
  email: string;
  nomeEmpresa?: string;
  assunto: string;
  mensagem: string;
}
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"; // Added MessageSquare

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    telefone: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = (data: FormData): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};
    if (!data.nome) newErrors.nome = 'Nome é obrigatório';
    if (!data.telefone) newErrors.telefone = 'Telefone é obrigatório';
    if (!data.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!data.assunto) newErrors.assunto = 'Assunto é obrigatório';
    if (!data.mensagem) newErrors.mensagem = 'Mensagem é obrigatória';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Here you would typically send the form data to a backend
      console.log('Form data submitted:', formData);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        alert('Mensagem enviada com sucesso!');
        // Reset form
        setFormData({
          nome: '',
          telefone: '',
          email: '',
          assunto: '',
          mensagem: '',
        });
        setErrors({});
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white text-center">
 <div className="w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-elegant">
 <MessageSquare className="h-12 w-12 text-primary-foreground" /> {/* Added icon */}
 </div>

        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Estamos prontos para ouvir suas necessidades e oferecer as melhores soluções em tecnologia.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
 <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
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
                        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.nome ? 'border-red-500' : ''}`}
                      />
                      {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome}</p>}
                    </div>

                    <div>
                      <label htmlFor="telefone" className="block text-muted-foreground text-sm font-medium mb-2">
                        Telefone: <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.telefone ? 'border-red-500' : ''}`}
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
                        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.email ? 'border-red-500' : ''}`}
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
                        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.assunto ? 'border-red-500' : ''}`}
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
                        rows={4}
                        className={`flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.mensagem ? 'border-red-500' : ''}`}
                      ></textarea>
                      {errors.mensagem && <p className="text-red-500 text-xs mt-1">{errors.mensagem}</p>}
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
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
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-semibold">Telefone</div>
                      <div className="text-muted-foreground">(92) 99100-0125</div> {/* Replace with actual phone number */}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">contato@gr7tecnologia.com.br</div> {/* Replace with actual email */}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-semibold">Localização</div>
                      <div className="text-muted-foreground">Brasília-DF - Matriz</div>
                      <div className="text-muted-foreground">Manaus, AM - Filial</div>
                    </div>
                  </div>
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