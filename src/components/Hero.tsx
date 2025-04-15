
import { Button } from "@/components/ui/button";
import { Bot, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Discover Smarter Airdrops with AI
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Stop wasting time on scammy tasks & testnets. Scryptex helps you research, score, and track airdrop-worthy projects — automatically.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <Bot className="w-full h-full text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
