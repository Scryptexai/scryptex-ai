export default function ProjectSources() {
  const logos = [
    "coinmarketcap.png",
    "coingecko.png",
    "messari.png",
    "cryptorank.png",
    "dune.png",
    "nansen.png",
    "investing.png",
    "cryptoquant.png"
  ];

  return (
    <div className="py-10 bg-gray-50">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Project Analysis Data From
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center max-w-5xl mx-auto">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={`/media/${logo}`}
            alt={logo.replace(".png", "")}
            className="h-10 mx-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}
