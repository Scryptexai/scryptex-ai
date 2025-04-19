
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import  ProjectSources  from "@/components/ProjectSources";
import SentimentSources from "@/components/SentimentSources";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <ProjectSources />
      <SentimentSources />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Index;
