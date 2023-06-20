export const config = {
	runtime: "edge",
	regions: ["sfo1", "iad1"]
}

export async function getCoinByName(coinName) {

	const res = await fetch(`${process.env.VERCEL_URL}/api/coin/search?coin=${coinName}`, { cache: "no-store"})

	return res.json()
}