export async function getTrendingCoins() {
	const res = await fetch(`https://${process.env.VERCEL_URL}:3000/api/coin/trending`, { cache: "no-store"})

	return res.json()
}

export default getTrendingCoins