import { NextResponse } from "next/server"
import userApi from "@/data/apiUser.json"


export const config = {
	runtime: "edge",
	regions: ["sfo1", "iad1"]
}

export function GET() {
	return NextResponse.json(userApi)
}