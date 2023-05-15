export async function getTrendingCoins() {
	const res = await fetch("http://localhost:3000/api/coin/trending", { cache: "no-cache"})

	return res.json()
}

export default getTrendingCoins