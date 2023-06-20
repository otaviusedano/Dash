import bitcoin from "../../../../data/apiBitcoin.json"
import { NextResponse } from "next/server"


export const config = {
	runtime: "edge",
	regions: ["sfo1", "iad1"]
}

export function GET(req) {
	console.log(req);
	return NextResponse.json(bitcoin)
}
