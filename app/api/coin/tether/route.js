import tether from "../../../../data/apiTether.json"
import { NextResponse } from "next/server"


export const config = {
	runtime: "edge",
	regions: ["sfo1", "iad1"]
}

export function GET() {

	return NextResponse.json(tether)
}
