
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-[#F5F9FF] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 fade-in">
              Discover Smarter Airdrops with AI
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 fade-in">
              Stop wasting time on scammy tasks & testnets. Scryptex helps you research, score, and track airdrop-worthy projects — automatically.
            </p>
            <a 
              href="https://tally.so/r/npZvNE" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-[#3366FF] hover:bg-[#3366FF]/90 transition-colors duration-200"
              >
                Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end fade-in">
            <div className="relative w-64 h-64 lg:w-[400px] lg:h-[400px] p-4">
              <img
                src="/lovable-uploads/0f4c908d-a7a2-4666-a3c9-d25e98eb0c0f.png"
                alt="Scryptex AI Assistant"
                className="w-full h-full object-contain drop-shadow-xl float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
