"use client"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { setFilter } from "@/features/filter"

import Button from "./Button"
import SearchBar from "./SearchBar"

const Filter = ({coins}) => {
	const dispatch = useDispatch()
	const [ search, setSearch ] = useState("")

	function handleSearchCoin(coin) {
		setSearch(coin.toLowerCase())
		return
	}

	const filterType = (type) => coins.filter(coin => {
		if (coin.price_change_percentage_24h < 0 && type === "lower") {
			return coin
		}
		if (coin.price_change_percentage_24h >= 0 && type === "upper") {
			return coin
		}
	})

	function handleGetType(type) {
		dispatch(setFilter(filterType(type)))
		return
	}

	const filter = coins.filter(coin => {
		if (coin.name.toLowerCase().includes(search)) {
			return coins
		}
	})

	dispatch(setFilter(filter))


	return (
		<div className="flex gap-4">
			<div className="flex gap-2 justify-end">
				<Button onClick={() => handleGetType("upper")}>Upper</Button>
				<Button onClick={() => handleGetType("lower")}>Lower</Button>
			</div>
			<SearchBar onChange={(e) => handleSearchCoin(e.target.value)} placeholder='Search a coin' />
		</div>
	)
}

export default Filter