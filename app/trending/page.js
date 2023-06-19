'use server'

import Cards from "../../components/Cards"
import Filter from "../../components/Filter"
import getTrendingCoins from "../../lib/getTrendingCoin."


export default async function Trending({bg, text}) {

	const getCoins = await getTrendingCoins()

	return (
		<section>
			<div className="flex items-end justify-between">
				<h1 className="pb-2 pt-10 font-bold text-2xl">Trending Now</h1>
				<Filter coins={getCoins}/>
			</div>
			<Cards bg={bg} text={text}/>
		</section>
	)
}