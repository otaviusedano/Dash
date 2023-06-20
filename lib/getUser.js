export async function getUser() {
	const res = await fetch(`http://dash-otaviusedano.vercel.app/api/user`, { cache: "no-store"})
	// const res = await fetch(`http://${process.env.VERCEL_URL}/api/user`, { cache: "no-store"})

	return res.json()
}

export default getUser