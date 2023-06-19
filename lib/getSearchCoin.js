import { store } from "../store"


export const config = {
	runtime: "edge",
	regions: ["sfo1", "iad1"]
}

export async function getSearchCoin() {
	const getSearch = store.getState().search.search

	const res = await fetch(`http://127.0.0.1:3000/api/coin/search?coin=${getSearch}`, { cache: "no-store"})

	return res.json()
}
