import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PWAInstallPrompt from "./components/PWAInstallPrompt";
import ParticleBackground from "./components/ParticleBackground";
import IslamicPattern from "./components/IslamicPattern";
import Home from "./pages/Home";
import Salah from "./pages/Salah";
import Duas from "./pages/Duas";
import Quran from "./pages/Quran";
import Hadith from "./pages/Hadith";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="flex flex-col min-h-screen relative">
              <ParticleBackground />
              <IslamicPattern />
              <div className="relative z-10 flex flex-col min-h-screen paper-texture">
                <Navigation />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/salah" element={<Salah />} />
                    <Route path="/duas" element={<Duas />} />
                    <Route path="/quran" element={<Quran />} />
                    <Route path="/hadith" element={<Hadith />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
                <PWAInstallPrompt />
              </div>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
