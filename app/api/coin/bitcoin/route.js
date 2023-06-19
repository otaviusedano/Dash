import bitcoin from "../../../../data/apiBitcoin.json"
import { NextResponse } from "next/server"


export function GET() {

	return NextResponse.json(bitcoin)
}
