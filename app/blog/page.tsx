import Image from "next/image";

const marketData = [
  { name: "NIFTY 50", value: "22,530", change: "+0.68%" },
  { name: "SENSEX", value: "74,213", change: "+0.59%" },
  { name: "NASDAQ", value: "16,920", change: "+1.26%" },
  { name: "BITCOIN", value: "$68,400", change: "+2.12%" },
];

const insights = [
  {
    title: "Global Markets Rally Amid AI Boom",
    category: "MARKETS",
    description:
      "Technology and AI-linked stocks continue driving momentum across global markets.",
  },
  {
    title: "US-China Trade Tensions Return",
    category: "WORLD AFFAIRS",
    description:
      "Rising geopolitical uncertainty is impacting global supply chains and macro outlook.",
  },
  {
    title: "Oil Prices & Middle East Risks",
    category: "GEOPOLITICS",
    description:
      "Energy markets remain volatile as geopolitical flashpoints intensify worldwide.",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-16 py-5 border-b border-gray-800 bg-black/90 backdrop-blur sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Global Alpha"
            width={85}
            height={85}
            className="rounded-full"
          />

          <div>
            <h1 className="text-5xl font-black tracking-wide bg-gradient-to-r from-white via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              Global Alpha
            </h1>

            <p className="uppercase text-yellow-400 tracking-[0.3em] text-sm font-semibold mt-1">
              Insights Today. Advantage Tomorrow.
            </p>
          </div>
        </div>

        <div className="flex gap-10 text-gray-300 text-lg font-medium">
          <a href="/markets" className="hover:text-yellow-400 transition">
            Markets
          </a>

          <a href="/blog" className="hover:text-yellow-400 transition">
            Blogs
          </a>

          <a href="/youtube" className="hover:text-yellow-400 transition">
            YouTube
          </a>

          <a href="/about" className="hover:text-yellow-400 transition">
            About
          </a>

          <a href="/contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-10 py-28 text-center border-b border-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 via-black to-black"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="text-yellow-400 uppercase tracking-[0.35em] text-sm mb-6 font-semibold">
            Global Markets • Geopolitics • Macro Intelligence
          </p>

          <h2 className="text-7xl font-black leading-tight max-w-5xl mx-auto">
            Global Markets.
            <br />
            World Affairs.
            <br />
            <span className="text-yellow-400">
              Strategic Intelligence.
            </span>
          </h2>

          <p className="text-gray-400 text-2xl mt-10 max-w-4xl mx-auto leading-relaxed">
            Global Alpha delivers premium insights into stock markets,
            macroeconomics, global affairs, and geopolitical trends shaping
            the future.
          </p>

          <div className="flex justify-center gap-6 mt-12 flex-wrap">
            <a
              href="/blog"
              className="bg-yellow-500 text-black px-10 py-5 rounded-xl text-lg font-bold hover:bg-yellow-400 transition"
            >
              Explore Insights
            </a>

            <a
              href="/youtube"
              className="border border-yellow-500 px-10 py-5 rounded-xl text-lg font-semibold hover:bg-yellow-500 hover:text-black transition"
            >
              Watch YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Market Watch */}
      <section className="px-10 py-16 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-4xl font-bold">
              Market Watch
            </h3>

            <p className="text-yellow-400 uppercase tracking-[0.2em] text-sm">
              Live Global Sentiment
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {marketData.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-yellow-500 transition"
              >
                <p className="text-gray-400 text-sm uppercase tracking-wide">
                  {item.name}
                </p>

                <h4 className="text-3xl font-bold mt-3">
                  {item.value}
                </h4>

                <p className="text-green-400 mt-3 font-semibold text-lg">
                  {item.change}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="px-10 py-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-5xl font-black">
              Latest Insights
            </h3>

            <a
              href="/blog"
              className="text-yellow-400 text-lg hover:underline"
            >
              View All Articles →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl overflow-hidden hover:border-yellow-500 transition duration-300"
              >
                <div className="h-52 bg-gradient-to-br from-yellow-700/20 via-gray-900 to-black"></div>

                <div className="p-8">
                  <span className="text-yellow-400 text-sm uppercase tracking-[0.2em] font-semibold">
                    {item.category}
                  </span>

                  <h4 className="text-3xl font-bold mt-4 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-gray-400 mt-5 leading-relaxed text-lg">
                    {item.description}
                  </p>

                  <button className="mt-8 border border-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition font-semibold">
                    Read Analysis
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-10 py-24 border-b border-gray-900">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-3xl p-14 text-center">
          <p className="uppercase tracking-[0.3em] text-yellow-400 text-sm font-semibold">
            Stay Ahead. Stay Informed.
          </p>

          <h3 className="text-5xl font-black mt-6 leading-tight">
            Join The Global Alpha Intelligence Network
          </h3>

          <p className="text-gray-400 text-xl mt-6 leading-relaxed">
            Receive premium market insights, geopolitical analysis, and macroeconomic research directly in your inbox.
          </p>

          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black border border-gray-700 px-6 py-4 rounded-xl text-lg w-[350px] outline-none focus:border-yellow-500"
            />

            <button className="bg-yellow-500 text-black px-8 py-4 rounded-xl text-lg font-bold hover:bg-yellow-400 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-10 py-10 text-center text-gray-500 text-sm">
        <p>
          © 2026 Global Alpha — Markets • Geopolitics • Strategic Intelligence
        </p>
      </footer>
   </main>
  );
}