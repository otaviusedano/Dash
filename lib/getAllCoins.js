export async function getAllCoins() {
	const res = await fetch("https://127.0.0.1:3000/api/coin/all", { cache: "no-store"})

	return res.json()
}

export default getAllCoins