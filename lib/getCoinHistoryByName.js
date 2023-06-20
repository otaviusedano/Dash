export const config = {
	runtime: "edge",
	regions: ["sfo1", "iad1"]
}

export async function getCoinHistoryByName(coinName) {

	const res = await fetch(`https://dash-otaviusedano.vercel.app/api/coin/${coinName}`, { cache: "no-store"})

	return res.json()
}

