
import { Card } from "@/components/ui/card";
import { Twitter, Wallet, Search, ShieldCheck } from "lucide-react";

const roadmapItems = [
  {
    title: "ScryPost",
    description: "Auto-Tweet Project Threads & Highlights",
    icon: Twitter
  },
  {
    title: "ScryTrack",
    description: "Wallet Tracker + AI Portfolio",
    icon: Wallet
  },
  {
    title: "ScryDrop",
    description: "Daily Drop Scanner with AI Scoring",
    icon: Search
  },
  {
    title: "ScryProof",
    description: "Onchain Testnet Analyzer",
    icon: ShieldCheck
  }
];

export const Roadmap = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Coming Soon: More Tools to Supercharge Your Journey
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapItems.map((item, index) => (
            <Card key={index} className="p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
