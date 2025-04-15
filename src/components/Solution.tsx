
import { Card } from "@/components/ui/card";
import { Zap, Users, Send } from "lucide-react";

const valueProps = [
  {
    title: "AI-Powered Analysis",
    description: "Scan projects instantly",
    icon: Zap
  },
  {
    title: "Built for Airdrop Hunters",
    description: "Skip fake campaigns",
    icon: Users
  },
  {
    title: "Telegram Native",
    description: "Use via Telegram Bot or Mini App",
    icon: Send
  }
];

export const Solution = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Scryptex Solves This — So You Can Focus on Farming Real Alpha
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Scryptex acts as your AI research assistant for airdrops. It deeply analyzes tokenomics, roadmap, VC support, and social signals to help you farm only real, quality projects.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <Card key={index} className="p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <prop.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
              <p className="text-gray-600">{prop.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
