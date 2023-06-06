"use client"

import { useSelector } from "react-redux"

import { FiSearch } from "@react-icons/all-files/fi/FiSearch"

import SearchButton from "./SearchButton"
import SearchCoinBar from "./SearchCoinBar"
import coinReplaced from "../utils/formatPriceCurrency"

const DashboardHeader = ({ allCoins }) => {
	const selector = useSelector
	
	const coinToChoose = selector(state => state.search.coinToSearch)
  
	const coinToFilter = coinToChoose[0]?.name.toLowerCase()

	const chooseCoin = allCoins.filter(coin => coin.name.toLowerCase() === coinToFilter)

	return (
		chooseCoin.length ?
			chooseCoin.map(coin => (
				<header key={coin.name} className="flex items-center justify-between text-slate-950 font-bold py-4 pt-6">
					<h1 key={coin.name} className="text-3xl">${coin.current_price < 2 ? parseFloat(coin.current_price).toFixed(4) : coinReplaced(parseFloat(coin.current_price).toFixed(2))}</h1>
					<h1 className="text-lg">{coin.name} ({coin.symbol.toUpperCase()} - USD)</h1>
					<div className="flex">
						<SearchCoinBar distance='sm'/>
						<SearchButton> <FiSearch size={20} /> </SearchButton>
					</div>
				</header>
			)) : <header className="flex items-center justify-between text-slate-950 font-bold py-4 pt-6">
				<h1 className="text-4xl">--------</h1>
				<h1 className="text-lg">---------------------</h1>
				<div className=" flex ">
					<SearchCoinBar distance='sm'/>
					<SearchButton> <FiSearch size={20} /> </SearchButton>
				</div>
			</header>
	)
}

export default DashboardHeader