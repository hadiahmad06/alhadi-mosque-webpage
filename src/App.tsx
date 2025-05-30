
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react"
import Layout from "./components/Layout";
import ScrollToHash from "./components/ScrollToHash";
import Index from "./pages/Index";
import Events from "./pages/Events";
import SpecialPage from "./pages/SpecialPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Analytics/>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="/events/" element={<Events />}/>
              <Route path="/special/" element={<SpecialPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
