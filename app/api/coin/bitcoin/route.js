import bitcoin from "../../../../data/apiBitcoin.json"
import { NextResponse } from "next/server"


export const config = {
	runtime: "edge",
	regions: ["sfo1", "iad1"]
}

export function GET() {

	return NextResponse.json(bitcoin, { nextConfig: { basePath: process.env.VERCEL_URL}, url: process.env.VERCEL_URL })
}
