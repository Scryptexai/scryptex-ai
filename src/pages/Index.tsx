
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Features } from "@/components/Features";
import { Roadmap } from "@/components/Roadmap";
import { Testimonial } from "@/components/Testimonial";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Roadmap />
      <Testimonial />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Index;
