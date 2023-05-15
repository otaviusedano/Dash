export async function getUser() {
	const res = await fetch("http://localhost:3000/api/user", { cache: "no-cache"})

	return res.json()
}

export default getUser