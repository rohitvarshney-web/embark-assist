import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Awareness from "./pages/Awareness";
import Consideration from "./pages/Consideration";
import Conversion from "./pages/Conversion";
import Esim from "./pages/Esim";
import Insurance from "./pages/Insurance";
import VisaRejectionInsurance from "./pages/VisaRejectionInsurance";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/consideration" element={<Consideration />} />
          <Route path="/conversion" element={<Conversion />} />
          <Route path="/esim" element={<Esim />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/visa-rejection-insurance" element={<VisaRejectionInsurance />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
