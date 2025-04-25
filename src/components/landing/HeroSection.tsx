import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-5 duration-500 bg-gradient-to-b from-white to-gray-50">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/media/logo.png"
              alt="Scryptex Logo"
              className="h-11 sm:h-14"
            />
            <span className="ml-2 text-xl font-bold text-gray-900"></span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("explore")}
              className="text-gray-700 hover:text-scryptex-blue"
            >
              Explore
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-scryptex-blue"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-700 hover:text-scryptex-blue"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-scryptex-blue"
            >
              About
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content with Banner */}
      <div className="mt-20 flex flex-col sm:flex-row items-center sm:items-start sm:justify-between max-w-7xl mx-auto">
        {/* Headline Content */}
        <div className="text-center sm:text-left sm:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 max-w-4xl mb-6">
            One Click. <span className="text-scryptex-blue">Full Clarity.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-10">
            Scryptex is your ultimate Web3 AI agent that finds, analyzes, and filters legit airdrop & crypto projects — so you don't waste time on scams or noise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection("waitlist")}
              className="bg-scryptex-blue hover:bg-scryptex-dark text-white font-medium rounded-lg px-6 py-3 flex items-center"
            >
              Join Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("explore")}
              variant="outline"
              className="border border-gray-300 hover:bg-gray-50 rounded-lg px-6 py-3 flex items-center"
            >
              Explore
            </Button>
          </div>
        </div>

        {/* Banner */}
        <div className="mt-10 sm:mt-0 sm:ml-10 sm:w-1/2">
          <img
            src="/media/banner.png" // Path ke file banner
            alt="Hero Banner"
            className="w-full object-contain h-auto max-h-80"
          />
        </div>
      </div>
    </section>
  );
};
