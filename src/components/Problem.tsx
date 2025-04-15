
import { Card } from "@/components/ui/card";
import { XCircle } from "lucide-react";

const problems = [
  "Too many fake tasks — no real airdrop, just effort wasted",
  "Hidden teams & tokenomics — hard to validate",
  "Manual research takes hours",
  "Most testnets lead nowhere"
];

export const Problem = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          The Problem with Airdrop Hunting Today
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="p-6 flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
              <p className="text-gray-700">{problem}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
