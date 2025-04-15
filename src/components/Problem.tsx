
import { Card } from "@/components/ui/card";
import { TestTube, Puzzle, Clock, CircleDot } from "lucide-react";

const problems = [
  {
    icon: TestTube,
    text: "Too many fake tasks — no real airdrop, just effort wasted"
  },
  {
    icon: Puzzle,
    text: "Hidden teams & tokenomics — hard to validate"
  },
  {
    icon: Clock,
    text: "Manual research takes hours"
  },
  {
    icon: CircleDot,
    text: "Most testnets lead nowhere"
  }
];

export const Problem = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          The Problem with Airdrop Hunting Today
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-base md:text-lg text-gray-700">{problem.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
