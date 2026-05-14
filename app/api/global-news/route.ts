import { NextResponse } from "next/server";

export async function GET() {
  try {
    // MarketAux Financial News
    const marketauxRes = await fetch(
      `https://api.marketaux.com/v1/news/all?countries=us,in,gb&language=en&limit=6&filter_entities=true&api_token=${process.env.MARKETAUX_API_KEY}`,
      {
        next: { revalidate: 300 },
      }
    );

    const marketauxData = await marketauxRes.json();

    // NewsAPI Global Business News
    const newsApiRes = await fetch(
      `https://newsapi.org/v2/top-headlines?category=business&language=en&pageSize=6&apiKey=${process.env.NEWS_API_KEY}`,
      {
        next: { revalidate: 300 },
      }
    );

    const newsApiData = await newsApiRes.json();

    // Format MarketAux
    const marketNews =
      marketauxData.data?.map((item: any) => ({
        title: item.title,
        image: item.image_url,
        source: item.source,
        url: item.url,
        published_at: item.published_at,
      })) || [];

    // Format NewsAPI
    const worldNews =
      newsApiData.articles?.map((item: any) => ({
        title: item.title,
        image: item.urlToImage,
        source: item.source?.name,
        url: item.url,
        published_at: item.publishedAt,
      })) || [];

    // Combine Both
    const combinedNews = [...marketNews, ...worldNews];

    return NextResponse.json(combinedNews);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}