import Image from "next/image"

import IconsTrending from "../components/iconsTrending"
import colorsVariants from "../components/colorsVariants"

export function Card({coin}) {
	const coinPriceChange = parseFloat(coin.price_change_percentage_24h).toFixed(5)

	const isNegativeNumber = coinPriceChange.includes("-")

	const coinPriceChangeFormatted = isNegativeNumber ? coinPriceChange : "+" + coinPriceChange

	const isNegativeOrNot = isNegativeNumber ? "loss" : "success"

	let bg = isNegativeOrNot
	let bgWeak = isNegativeOrNot
	let bgStrong = isNegativeOrNot

	let text = isNegativeOrNot

	return (
		<div key={coin.name} className={`flex p-4 gap-3 text-slate-950 bg-green-100 items-center rounded-md ${colorsVariants({bg})} mt-4`}>
			<div className={`flex-2 p-2 rounded-md ${colorsVariants({bgWeak})}`}>
				<Image className="filter grayscale contrast-125" src={coin.small} quality={100} height={26} width={26} alt={coin.name}  />
			</div>
			<h1 className="flex-1 text-lg font-semibold text-slate-950">{coin.name}</h1>
			<div className="flex-1 grid">
				<span className="font-medium">Current Price</span>
				<span className={`${colorsVariants({text, bg})}`}>${coin.price_current}</span>
			</div>
			<div className="flex-1 grid">	
				<span className="font-medium">24h Change</span>
				<span className={`${colorsVariants({text, bg})}`}>{coinPriceChangeFormatted}%</span>
			</div>
			<div className="flex-1 flex items-center justify-center">
				<span className="flex-1 font-medium">
					{isNegativeOrNot == "loss" ? "In Down" : "In Up" }
				</span>
				<div className="flex justify-center items-center">
					<div className={`flex-1 text-gray-100 self-center p-2 rounded-md ${colorsVariants({bgStrong})}`}>
						<IconsTrending className="block" isNegative={isNegativeOrNot == "loss" ? true : false }/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card