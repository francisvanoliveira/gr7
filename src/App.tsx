import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import SchemaMarkup from './components/SchemaMarkup';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import ServicesPage from "./pages/ServicesPage";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectsPage from "./pages/ProjectsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
        <SchemaMarkup />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Rotas de Serviços Otimizadas para SEO */}
            <Route path="/internet-empresarial-manaus" element={<ServiceDetail />} />
            <Route path="/starlink-empresarial-amazonas" element={<ServiceDetail />} />
            <Route path="/wifi-para-hoteis" element={<ServiceDetail />} />
            <Route path="/infraestrutura-de-rede-corporativa" element={<ServiceDetail />} />
            <Route path="/monitoramento-inteligente" element={<ServiceDetail />} />

            {/* Rotas de Serviços Genéricas */}
            <Route path="/servico/:serviceId" element={<ServiceDetail />} />
            <Route path="/servicos" element={<ServicesPage />} />

            {/* Outras Rotas */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/projeto/:projectId" element={<ProjectDetail />} />
            <Route path="/projetos" element={<ProjectsPage />} />

            {/* Rota de Página Não Encontrada */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
