
export const Testimonial = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-[#F5F9FF] to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What Users Are Saying
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-md mb-10">
          <p className="text-lg italic mb-6">
            "Scryptex completely changed how I research crypto projects. 
            The AI analysis saved me countless hours of digging through Discord servers 
            and Twitter threads. I've discovered multiple high-potential airdrops I would have missed otherwise."
          </p>
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-[#3366FF] rounded-full flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div className="ml-4 text-left">
              <div className="font-semibold">John Doe</div>
              <div className="text-sm text-gray-600">Crypto Enthusiast</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
