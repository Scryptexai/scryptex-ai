import { BrowserRouter } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

import Hero from "@/components/Hero";
import ProjectSources from "@/components/ProjectSources";
import SentimentSources from "@/components/SentimentSources";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <TooltipProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {/* Hero */}
          <Hero />

          {/* Sources */}
          <section className="mt-16 mb-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              <ProjectSources />
              <SentimentSources />
            </div>
          </section>

          {/* Waitlist */}
          <Waitlist />

          {/* Footer */}
          <Footer />

          {/* Toasts */}
          <Toaster />
        </BrowserRouter>
      </QueryClientProvider>
    </TooltipProvider>
  );
}

export default App;
