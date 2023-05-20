import coinsApi from "@/data/apiCoins.json"

import { NextResponse } from "next/server"

export const config = {
	runtime: "edge",
	regions: ["sfo1", "iad1"]
}


export function GET(req) {
	const { searchParams } = new URL(req.url)
	const coin = searchParams.get("coin")

	const coinFiltered = coinsApi.filter((c) =>
		c.name.toLowerCase() === coin?.toLowerCase() ?? ""
	)

	return NextResponse.json(coinFiltered)
}
