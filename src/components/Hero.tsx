export const Hero = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto z-10 relative px-4">
        <div className="flex items-center justify-center py-6">
          <img
            src="/media/logo.png"
            alt="Scryptex Logo"
            className="h-16 md:h-20 object-contain"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-6">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Discover Smarter Airdrops with AI
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Scryptex helps you analyze, score, and track airdrop projects—no more wasting time on low-quality tasks.
            </p>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src="/media/banner.png"
              alt="Scryptex Banner"
              className="w-full max-w-[400px] drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
