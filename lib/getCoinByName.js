export const config = {
	runtime: "edge",
	regions: ["sfo1", "iad1"]
}

export async function getCoinByName(coinName) {

	const res = await fetch(`https://dash-otaviusedano.vercel.app/api/coin/search?coin=${coinName}`, { cache: "no-cache"})

	return res.json()
}