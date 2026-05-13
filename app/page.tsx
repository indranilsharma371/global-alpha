"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [marketData, setMarketData] = useState({
    nifty: 22530,
    sensex: 74213,
    nasdaq: 16920,
    bitcoin: 68400,
  });

  useEffect(() => {
    async function fetchMarketData() {
      try {
        const apiKey = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;

        const btcRes = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=BINANCE:BTCUSDT&token=${apiKey}`
        );

        const btcData = await btcRes.json();

console.log("BTC DATA:", btcData);

setMarketData((prev) => ({
  ...prev,
  bitcoin: Number(btcData.c || 68400),
}));

      } catch (error) {
        console.error(error);
      }
    }

    fetchMarketData();

    const interval = setInterval(fetchMarketData, 10000);

    return () => clearInterval(interval);

  }, []);
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Navbar */}
<nav className="flex justify-between items-center px-16 py-6 border-b border-gray-800 backdrop-blur-md bg-black/80 sticky top-0 z-50">
<div className="flex items-center gap-4">
  <Image
    src="/logo.png"
    alt="Global Alpha Logo"
    width={90}
    height={90}
    className="rounded-full object-cover"
  />

  <div>
    <h1 className="text-5xl font-extrabold tracking-wide bg-gradient-to-r from-white via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
      Global Alpha
    </h1>

    <p className="text-lg tracking-[0.25em] uppercase text-yellow-400 font-semibold mt-1">
      Insights Today. Advantage Tomorrow.
    </p>
  </div>
</div>

<div className="flex gap-10 text-gray-300 text-lg font-medium">
  <a href="/markets">Markets</a>
  <a href="/blog">Blogs</a>
  <a href="/youtube">YouTube</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
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
{/* Market Watch */}
<section className="px-10 py-20 border-t border-gray-900">
  <div className="flex justify-between items-center mb-12">
    <h3 className="text-5xl font-bold">
      Market Watch
    </h3>

    <p className="text-yellow-400 tracking-[0.3em] uppercase">
      Live Global Sentiment
    </p>
  </div>

  <div className="grid md:grid-cols-4 gap-8">

    <div className="bg-[#020817] border border-blue-950 rounded-3xl p-8">
      <p className="text-gray-400 mb-4">NIFTY 50</p>

      <h3 className="text-5xl font-bold">
        {marketData.nifty.toLocaleString()}
      </h3>

      <p className="text-green-400 mt-4 text-xl font-semibold">
        LIVE
      </p>
    </div>

    <div className="bg-[#020817] border border-blue-950 rounded-3xl p-8">
      <p className="text-gray-400 mb-4">SENSEX</p>

      <h3 className="text-5xl font-bold">
        {marketData.sensex.toLocaleString()}
      </h3>

      <p className="text-green-400 mt-4 text-xl font-semibold">
        LIVE
      </p>
    </div>

    <div className="bg-[#020817] border border-blue-950 rounded-3xl p-8">
      <p className="text-gray-400 mb-4">NASDAQ</p>

      <h3 className="text-5xl font-bold">
        {marketData.nasdaq.toLocaleString()}
      </h3>

      <p className="text-green-400 mt-4 text-xl font-semibold">
        LIVE
      </p>
    </div>

    <div className="bg-[#020817] border border-blue-950 rounded-3xl p-8">
      <p className="text-gray-400 mb-4">BITCOIN</p>

      <h3 className="text-5xl font-bold">
        ${marketData.bitcoin.toLocaleString()}
      </h3>

      <p className="text-green-400 mt-4 text-xl font-semibold">
        LIVE
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