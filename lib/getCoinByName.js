export const config = {
	runtime: "edge",
	regions: ["sfo1", "iad1"]
}

export async function getCoinByName(coinName) {

	const res = await fetch(`http://localhost:3000/api/coin/search?coin=${coinName}`, { cache: "no-cache"})

	return res.json()
}