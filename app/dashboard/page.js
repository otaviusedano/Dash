import { Suspense } from "react"


import CotationCard from "@/components/CotationCard"
import getAllCoins from "@/lib/getAllCoins"

import ChartInitial from "@/components/ChartInitial"
import DashboardHeader from "@/components/DashboardHeader"

// import Link from "next/link"


export default async function Dashboard() {
	
	const allCoins = await getAllCoins()


	function isNegativeCoin (coin) {
		return coin.price_change_percentage_24h < 0 ? "loss" : "success"
	}

	return (
		<section>
			<div className="bg-slate-100 rounded-md p-4 py-2">
				<DashboardHeader allCoins={allCoins}/>
				<ChartInitial />
			</div>
			<h1 className="text-xl font-bold my-6 mt-9">Most Popular Coins</h1>
			<div className="flex flex-wrap gap-3 ">
				{allCoins.map(coin => (
					<Suspense key={coin.id} fallback={<div className="bg-blue-400 animate-pulse h-[60px] w-[full]"></div>}>
						<CotationCard key={coin.name} intent={isNegativeCoin(coin)} bg={isNegativeCoin(coin)} bgStrong={isNegativeCoin(coin)} text={isNegativeCoin(coin)} coin={coin}/>
					</Suspense>
				))}
			</div>
		</section>
	)
}
