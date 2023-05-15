"use client"

import { useSelector } from "react-redux"

import Card from "./Card"

const Cards = ({bg, text}) => {
	const selector = useSelector

	const cards = selector(state => state.filter.filter)

	return (
		<>
			{cards?.map(coin => (
				<Card bg={bg} text={text} key={coin.id} coin={coin}/>
			))}
		</>
	)
}

export default Cards