export async function getAllCoins() {
	const res = await fetch("https://dash-otaviusedano.vercel.app/api/coin/all", { cache: "no-store"})

	return res.json()
}

export default getAllCoins