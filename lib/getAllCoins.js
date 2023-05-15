export async function getAllCoins() {
	const res = await fetch("http://localhost:3000/api/coin/all", { cache: "no-cache"})

	return res.json()
}

export default getAllCoins