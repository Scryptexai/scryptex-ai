
export const ProjectSources = () => {
  const sources = [
    "coinmarketcap.png",
    "coingecko.png",
    "messari.png",
    "cryptorank.png",
    "cryptoquant.png",
    "dune.png",
    "defiliama.png",
    "nansen.png",
    "investing.png"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Project Analysis Data From</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center opacity-80">
          {sources.map((src) => (
            <img key={src} src={`/media/${src}`} alt={src.split(".")[0]} className="h-10 mx-auto" />
          ))}
        </div>
      </div>
    </section>
  );
};
