import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Features } from "@/components/Features";
import { Roadmap } from "@/components/Roadmap";
import { Testimonial } from "@/components/Testimonial";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";
import { BackgroundRemover } from "@/components/BackgroundRemover";

const Index = () => {
  return (
    <div className="min-h-screen">
      <BackgroundRemover />
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
