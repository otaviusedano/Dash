export async function getTrendingCoins() {
	const res = await fetch(`https://dash-otaviusedano.vercel.app/api/coin/trending`, { cache: "no-store"})

	return res.json()
}

export default getTrendingCoins