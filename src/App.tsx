import { ConfigProvider, App as AntApp } from "antd";
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

// Theme configuration to match existing design system
const theme = {
  token: {
    colorPrimary: "hsl(243, 75%, 59%)",
    colorBgContainer: "hsl(0, 0%, 100%)",
    colorText: "hsl(222, 47%, 11%)",
    colorTextSecondary: "hsl(240, 4%, 46%)",
    borderRadius: 8,
    fontFamily: "Inter, system-ui, sans-serif",
  },
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ConfigProvider theme={theme}>
      <AntApp>
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
      </AntApp>
    </ConfigProvider>
  </QueryClientProvider>
);

export default App;
