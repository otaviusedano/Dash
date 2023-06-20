export async function getTrendingCoins() {
	const res = await fetch(`${process.env.VERCEL_URL}/api/coin/trending`, { cache: "no-store"})

	return res.json()
}

export default getTrendingCoins