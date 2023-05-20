"use client"

import { useDispatch } from "react-redux"

import { getSearchCoin } from "@/lib/getSearchCoin"
import { setCoinToSearch } from "@/features/search"
import Button from "./Button"


const SearchButton = ({children, intent, ...props}) => {
	const dispatch = useDispatch()

	async function handlerGetSearch() {
		const searchCoin = await getSearchCoin()
		dispatch(setCoinToSearch(searchCoin))
	}

	return (
		<Button onClick={handlerGetSearch} intent={intent} {...props}>{children}</Button>
	)
}

export default SearchButton