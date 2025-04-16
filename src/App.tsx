import { BrowserRouter } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Hero from "@/components/ui/Hero";
import ProjectSources from "@/components/ui/ProjectSources";
import SentimentSources from "@/components/ui/SentimentSources";
import Waitlist from "@/components/ui/Waitlist";
import Footer from "@/components/ui/Footer";

const queryClient = new QueryClient();

export default function App() {
  return (
    <BrowserRouter>
      <TooltipProvider>
        <QueryClientProvider client={queryClient}>
          <Hero />
          <div className="my-16">
            <ProjectSources />
            <SentimentSources />
          </div>
          <Waitlist />
          <Footer />
        </QueryClientProvider>
      </TooltipProvider>
    </BrowserRouter>
  );
}
