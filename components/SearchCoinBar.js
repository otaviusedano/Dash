"use client"

import { useDispatch } from "react-redux"

import { setSearch } from "../features/search"

import SearchBar from "./SearchBar"

const SearchCoinBar = ({children, ...props}) => {
	const dispatch = useDispatch()

	function handlerSearchCoin(coin) {
		dispatch(setSearch(coin.trim()))
	}

	return (
		<SearchBar onChange={e => handlerSearchCoin(e.target.value)} intent="primary" distance="sm" placeholder="search a coin" {...props}>{children}</SearchBar>
	)
}

export default SearchCoinBar