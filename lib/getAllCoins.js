export async function getAllCoins() {
	const res = await fetch(`https://${process.env.VERCEL_URL}:3000/api/coin/all`, { cache: "no-store"})

	return res.json()
}

export default getAllCoins