export async function getAllCoins() {
	const res = await fetch("http://dash-otaviusedano.vercel.app/api/coin/all", { cache: "no-store"})

	return res.json()
}

export default getAllCoins