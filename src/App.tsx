import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import ServicesPage from "./pages/ServicesPage"; // Import the ServicesPage component
import Contact from "./pages/Contact"; // Import the Contact component
import ProjectDetail from "./pages/ProjectDetail";
import ProjectsPage from "./pages/ProjectsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servico/:serviceId" element={<ServiceDetail />} />
          <Route path="/servicos" element={<ServicesPage />} /> {/* Add the new ServicesPage route */}
          <Route path="/contact" element={<Contact />} /> {/* Add the new Contact route */}
          <Route path="/projeto/:projectId" element={<ProjectDetail />} />
          <Route path="/projetos" element={<ProjectsPage />} /> 
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;