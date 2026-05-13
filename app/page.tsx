export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold tracking-wide">
          Global Alpha
        </h1>

        <div className="flex gap-8 text-gray-300">
          <a href="#">Markets</a>
          <a href="#">World Affairs</a>
          <a href="#">Blogs</a>
          <a href="#">YouTube</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-32 px-6">
        <h2 className="text-6xl font-bold leading-tight max-w-5xl mx-auto">
          Global Markets. World Affairs. Strategic Intelligence.
        </h2>

        <p className="text-gray-400 mt-8 text-xl max-w-3xl mx-auto">
          Global Alpha delivers deep insights into stock markets,
          geopolitics, macroeconomics, and international affairs.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold">
            Explore Articles
          </button>

          <button className="border border-white px-8 py-4 rounded-xl">
            Watch YouTube
          </button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="px-10 py-20">
        <h3 className="text-4xl font-bold mb-12">
          Featured Analysis
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h4 className="text-2xl font-semibold mb-4">
              Global Economic Trends
            </h4>

            <p className="text-gray-400">
              Deep analysis of world economies, inflation,
              central banks, and financial systems.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h4 className="text-2xl font-semibold mb-4">
              Stock Market Intelligence
            </h4>

            <p className="text-gray-400">
              Market insights, technical analysis,
              investment strategies, and portfolio research.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h4 className="text-2xl font-semibold mb-4">
              Geopolitical Affairs
            </h4>

            <p className="text-gray-400">
              Coverage of global conflicts, diplomacy,
              trade wars, and strategic affairs.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-10 text-center text-gray-500">
        © 2026 Global Alpha — Founded by Indranil Sharma
      </footer>

    </main>
  )
}