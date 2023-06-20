export async function getAllCoins() {
	const res = await fetch(`${process.env.VERCEL_URL}/api/coin/all`, { cache: "no-store"})

	return res.json()
}

export default getAllCoins