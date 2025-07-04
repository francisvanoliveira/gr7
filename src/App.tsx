import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarSub, MenubarSubTrigger, MenubarSubContent } from "./components/ui/menubar";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import ProjectDetail from "./pages/ProjectDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <div className="container mx-auto flex items-center">
          <img
            src="/lovable-uploads/8b3a65b0-1726-4017-bd86-0f4d45879701.png"
            alt="GR7 Tecnologia Logo"
            className="h-8 w-auto mr-4"
          />
          <Menubar className="flex-grow">
            <MenubarMenu>
              <MenubarTrigger>Home</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => window.location.href = "/"}>
                  Home
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Serviços</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => window.location.href = "/servicos"}>
                  Todos os Serviços
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem onClick={() => window.location.href = "#"}>
                  Suporte de T.I.
                </MenubarItem>
                <MenubarItem onClick={() => window.location.href = "#"}>
                  CFTV
                </MenubarItem>
                <MenubarItem onClick={() => window.location.href = "#"}>
                  Infraestrutura
                </MenubarItem>
                <MenubarItem onClick={() => window.location.href = "#"}>
                  Rede e WiFi
                </MenubarItem>
                <MenubarItem onClick={() => window.location.href = "#"}>
                  Hotéis e Motéis
                </MenubarItem>
                <MenubarItem onClick={() => window.location.href = "#"}>
                  Suporte Especializado
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Projetos</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => window.location.href = "/projetos"}>
                  Todos os Projetos
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem onClick={() => window.location.href = "#"}>
                  Sistemas Desenvolvidos
                </MenubarItem>
                <MenubarItem onClick={() => window.location.href = "#"}>
                  Projeto Segurança Colaborativa
                </MenubarItem>
                <MenubarItem onClick={() => window.location.href = "#"}>
                  Catraca com Reconhecimento Facial
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
             <MenubarMenu>
              <MenubarTrigger>Contato</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => window.location.href = "/contato"}>
                  Contato
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servico/:serviceId" element={<ServiceDetail />} />
          <Route path="/projeto/:projectId" element={<ProjectDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
