export async function getUser() {
	const res = await fetch("https://${process.env.VERCEL_URL}:3000/api/user", { cache: "no-store"})

	return res.json()
}

export default getUser