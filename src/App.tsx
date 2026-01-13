// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";

// Pages
import Index from "./pages/Index";
import AwsCostOptimizationPage from "./pages/AwsCostOptimizationPage";
import AwsMigrationPage from "./pages/aws-migration";
import WellArchitected from "./pages/well-architected";
import AwsSecurityPage from "./pages/aws-security";
import AwsSurveillancePage from "./pages/aws-surveillance";
import CloudMarketplacePage from "./pages/cloud-marketplace";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />

              <Route
                path="/aws-cost-optimization"
                element={<AwsCostOptimizationPage />}
              />

              <Route
                path="/aws-migration"
                element={<AwsMigrationPage />}
              />

              <Route
                path="/well-architected"
                element={<WellArchitected />}
              />

              <Route
                path="/aws-security"
                element={<AwsSecurityPage />}
              />

              <Route
                path="/aws-surveillance"
                element={<AwsSurveillancePage />}
              />

              
              <Route
                path="/cloud-marketplace"
                element={<CloudMarketplacePage />}
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>

        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}
