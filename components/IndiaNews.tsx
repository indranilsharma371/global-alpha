"use client";

import { useEffect, useState } from "react";

interface NewsItem {
  title: string;
  image: string;
  source: string;
  url: string;
  published_at: string;
}

export default function IndiaNews() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    async function fetchIndianNews() {
      try {
        const res = await fetch(
          "https://api.marketaux.com/v1/news/all?countries=in&language=en&filter_entities=true&api_token=xvwLbipbX9W1BvE3ckSmuaujYh1d3iCby44qD6FN"
        );

        const data = await res.json();

        setNews(data.data.slice(0, 6));
      } catch (error) {
        console.error(error);
      }
    }

    fetchIndianNews();

    const interval = setInterval(fetchIndianNews, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-10 py-20 border-b border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.25em] text-sm font-semibold">
              India Financial Intelligence
            </p>

            <h2 className="text-5xl font-black mt-3">
              India Markets & Economy
            </h2>
          </div>

          <div className="text-green-400 text-sm font-semibold">
            ● LIVE UPDATING
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                bg-gradient-to-b
                from-gray-900
                to-black
                border
                border-gray-800
                rounded-3xl
                overflow-hidden
                hover:border-yellow-500
                transition-all
                duration-300
              "
            >
              <div className="overflow-hidden h-56">
                <img
                  src={item.image || "/news-placeholder.jpg"}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                />
              </div>

              <div className="p-6">
                <p className="text-yellow-400 text-xs uppercase tracking-[0.2em] font-semibold">
                  {item.source}
                </p>

                <h3 className="text-2xl font-bold mt-4 leading-snug group-hover:text-yellow-400 transition">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-5">
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