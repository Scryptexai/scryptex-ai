
export const SentimentSources = () => {
  const socials = [
    "twitter.png",
    "Reddit.png",
    "Linkedin.png",
    "theblock.png",
    "cointelegraph.png",
    "lunarcrush.jpg"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Market Sentiment Signals</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center opacity-80">
          {socials.map((src) => (
            <img key={src} src={`/media/${src}`} alt={src.split(".")[0]} className="h-10 mx-auto" />
          ))}
        </div>
      </div>
    </section>
  );
};
