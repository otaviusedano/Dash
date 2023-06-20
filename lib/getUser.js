export async function getUser() {
	const res = await fetch(`https://dash-otaviusedano.vercel.app/api/user`, { cache: "no-store"})
	// const res = await fetch(`https://${process.env.VERCEL_URL}/api/user`, { cache: "no-store"})

	return res.json()
}

export default getUser