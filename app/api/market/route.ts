import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true",
      {
        cache: "no-store",
      }
    );

    const cryptoData = await response.json();

    // Static market values + live Bitcoin
    const marketData = [
      {
        name: "NIFTY 50",
        value: "24,350",
        change: "+0.84%",
      },
      {
        name: "NASDAQ",
        value: "19,120",
        change: "+1.12%",
      },
      {
        name: "SENSEX",
        value: "79,850",
        change: "+0.72%",
      },
      {
        name: "BITCOIN",
        value: `$${cryptoData.bitcoin.usd.toLocaleString()}`,
        change: `${cryptoData.bitcoin.usd_24h_change.toFixed(2)}%`,
      },
    ];

    return NextResponse.json(marketData);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      [
        {
          name: "NIFTY 50",
          value: "24,350",
          change: "+0.84%",
        },
        {
          name: "NASDAQ",
          value: "19,120",
          change: "+1.12%",
        },
        {
          name: "SENSEX",
          value: "79,850",
          change: "+0.72%",
        },
        {
          name: "BITCOIN",
          value: "N/A",
          change: "0%",
        },
      ],
      { status: 200 }
    );
  }
}