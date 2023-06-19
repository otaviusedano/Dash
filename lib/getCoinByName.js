export const config = {
	runtime: "edge",
	regions: ["sfo1", "iad1"]
}

export async function getCoinByName(coinName) {

	const res = await fetch(`http://127.0.0.1:3000/api/coin/search?coin=${coinName}`, { cache: "no-store"})

	return res.json()
}