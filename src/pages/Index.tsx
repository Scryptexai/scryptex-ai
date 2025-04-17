import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Features } from "@/components/Features";
import { Roadmap } from "@/components/Roadmap";
import  ProjectSources  from "@/components/ProjectSources";
import SentimentSources from "@/components/SentimentSources";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";
import { BackgroundRemover } from "@/components/BackgroundRemover";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <ProjectSources />
      <SentimentSources />
      <Roadmap />      
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Index;
