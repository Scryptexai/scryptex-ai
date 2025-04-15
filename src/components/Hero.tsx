
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import scryptexBot from "../assets/scryptex_ai_bot.png";

export const Hero = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 fade-in">
              Discover Smarter Airdrops with AI
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl fade-in">
              Stop wasting time on scammy tasks & testnets. Scryptex helps you research, score, and track airdrop-worthy projects — automatically.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end fade-in">
            <div className="relative w-64 h-64 lg:w-[400px] lg:h-[400px] p-4">
              <img
                src={scryptexBot}
                alt="Scryptex AI Assistant"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
