export async function getUser() {
	const res = await fetch("https://127.0.0.1:3000/api/user", { cache: "no-store"})

	return res.json()
}

export default getUser