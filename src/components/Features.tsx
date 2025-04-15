
import { Card } from "@/components/ui/card";
import { Search, PieChart, Shield, MessageSquare, Check, FileText, Send, Wallet } from "lucide-react";

const features = [
  { title: "Project Scanner", icon: Search },
  { title: "Tokenomics Checker", icon: PieChart },
  { title: "VC/Team Radar", icon: Shield },
  { title: "Social Sentiment Tracker", icon: MessageSquare },
  { title: "Airdrop Confirmation Detector", icon: Check },
  { title: "Roadmap Analyzer", icon: FileText },
  { title: "Telegram Bot Access", icon: Send },
  { title: "Wallet Eligibility Check", icon: Wallet }
];

export const Features = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What You Get with Scryptex
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">{feature.title}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
