export default function SentimentSources() {
  const logos = [
    "twitter.png",
    "Reddit.png",
    "Linkedin.png",
    "lunarcrush.png",
    "theblock.png"
  ];

  return (
    <div className="py-10 bg-white">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Market Sentiment Signals
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center max-w-5xl mx-auto">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={`/media/${logo}`}
            alt={logo.replace(".png", "")}
            className={`mx-auto object-contain ${
              logo === "twitter.png" ? "w-12 h-12" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
