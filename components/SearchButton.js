"use client"

import { useDispatch } from "react-redux"

import { getSearchCoin } from "@/lib/getSearchCoin"
import { setCoinToSearch } from "@/features/search"
import Button from "./Button"


const SearchButton = ({children, intent, ...props}) => {
	const dispatch = useDispatch()
	// const coinSearched = useSelector(state => state.search.search)

	async function handlerGetSearch() {
		const searchCoin = await getSearchCoin()

		// console.log(coinSearched)

		dispatch(setCoinToSearch(searchCoin))
	}

	return (
		<Button onClick={handlerGetSearch} intent={intent} {...props}>{children}</Button>
	)
}

export default SearchButton