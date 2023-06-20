export async function getUser() {
	const res = await fetch(`${process.env.VERCEL_URL}/api/user`, { cache: "no-store"})

	return res.json()
}

export default getUser