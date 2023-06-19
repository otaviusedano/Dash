export async function getTrendingCoins() {
	const res = await fetch("https://127.0.0.1:3000/api/coin/trending", { cache: "no-store"})

	return res.json()
}

export default getTrendingCoins