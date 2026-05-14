import { NextResponse } from "next/server";

export async function GET() {
  try {
    const symbols = [
      {
        name: "NIFTY 50",
        symbol: "^NSEI",
      },
      {
        name: "SENSEX",
        symbol: "^BSESN",
      },
      {
        name: "NASDAQ",
        symbol: "^IXIC",
      },
      {
        name: "BITCOIN",
        symbol: "BTC-USD",
      },
    ];

    const results = await Promise.all(
      symbols.map(async (item) => {
        const url = `https://query1.finance.yahoo.com/v8/finance/chart/${item.symbol}`;

        const res = await fetch(url, {
          headers: {
            "User-Agent":
              "Mozilla/5.0",
          },
          cache: "no-store",
        });

        const data = await res.json();

        const result =
          data?.chart?.result?.[0]?.meta;

        if (!result) {
          return {
            name: item.name,
            value: "Unavailable",
            change: "N/A",
          };
        }

        const price =
          result.regularMarketPrice;

        const previousClose =
          result.previousClose;

        const percent =
          previousClose
            ? (
                ((price - previousClose) /
                  previousClose) *
                100
              ).toFixed(2)
            : "0";

        return {
          name: item.name,
          value:
            item.name === "BITCOIN"
              ? `$${Number(price).toLocaleString()}`
              : Number(price).toLocaleString(),
          change: `${percent}%`,
        };
      })
    );

    return NextResponse.json(results);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to fetch market data",
      },
      { status: 500 }
    );
  }
}