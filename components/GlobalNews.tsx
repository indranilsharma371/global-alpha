"use client";

import { useEffect, useState } from "react";

interface NewsItem {
  title: string;
  image: string;
  source: string;
  url: string;
  published_at: string;
}

export default function GlobalNews() {
  const [news, setNews] = useState<NewsItem[]>([]);

  async function fetchNews() {
    try {
      const res = await fetch("/api/global-news");

      const data = await res.json();

      setNews(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchNews();

    const interval = setInterval(fetchNews, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-yellow-500 text-xs tracking-[0.3em] uppercase mb-3">
              Live Intelligence Feed
            </p>

            <h2 className="text-4xl font-bold text-white">
              Global Market News
            </h2>
          </div>

          <div className="flex items-center gap-2 text-green-400 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            LIVE UPDATING
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.slice(0, 6).map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#050816] border border-zinc-800 rounded-2xl overflow-hidden hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2"
            >
              {item.image && (
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              )}

              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-yellow-500 mb-3">
                  {item.source}
                </p>

                <h3 className="text-white text-xl font-semibold leading-snug mb-4">
                  {item.title}
                </h3>

                <p className="text-zinc-500 text-sm">
                  {new Date(item.published_at).toLocaleString()}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}