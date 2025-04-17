import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { NetworkBackground } from "./NetworkBackground";
import { PhonePreview } from "./PhonePreview";

export const Hero = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      {/* Background Section */}
      <NetworkBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Logo Section */}
        <div className="flex justify-center lg:justify-start mb-4">
          <img
            alt="Scryptex Logo"
            src="/media/logo.png"
            className="h-20 lg:h-22 w-auto"
          />
        </div>

        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 fade-in">
              Discover Smarter Airdrops with AI
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 fade-in">
              Stop wasting time on scammy tasks & testnets. Scryptex helps you research, score, and track airdrop-worthy projects — automatically.
            </p>
            <div className="flex justify-center lg:justify-start">
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
          </div>

          {/* Banner Image */}
          <div className="flex-1 flex justify-center lg:justify-end fade-in">
            <div className="relative w-full max-w-[400px]">
              <img
                src="/media/banner.png"
                alt="Scryptex AI Assistant"
                className="w-full h-auto object-contain drop-shadow-xl float"
              />
            </div>
          </div>
        </div>

        {/* Phone Preview Section */}
        <div className="mt-12 lg:mt-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Experience Scryptex on Telegram
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                AI-Powered Airdrop Research
              </h3>
              <p className="text-gray-600 mb-6">
                Access the power of AI research right from your Telegram app.
                Analyze projects, track airdrops, and never miss an opportunity.
              </p>
              <div className="flex flex-col space-y-4">
                {[
                  "Instant analysis of project quality and airdrop potential",
                  "Track all your airdrops in one place with real-time updates",
                  "No more wasted time on low-quality projects",
                ].map((text, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone Preview */}
            <div className="lg:w-1/2">
              <PhonePreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};