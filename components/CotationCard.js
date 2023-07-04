"use client"


import { cva } from "class-variance-authority"
import ChartLine  from "./ChartLine"
import IconsTrending from "./iconsTrending"
import colorsVariants from "./colorsVariants"
import coinReplaced from "../utils/formatPriceCurrency"
import BlurImage from "./BlurImage"



const cotationCardVariants = cva(
	"font-medium rounded-md p-4 text-slate-950 w-[30%] justify-between flex",
	{
		variants: {
			intent: {
				success: "bg-green-100",
				loss: "bg-red-100",
			}
		},
		defaultVariants: {
			intent: "success",
		}
	}
)


const CotationCard = ({ intent, text, bg, bgStrong, coin }) => {


	const coinPrice = coin.current_price
	const coinPriceChange = parseFloat(coin.price_change_percentage_24h).toFixed(5)

	const isNegativeNumber = coinPriceChange.includes("-")
	
	const backgroundColorFormatted = isNegativeNumber ?  "primary" : "tertiary"
	
	const coinPriceFormatted = coinPrice < 2 ? parseFloat(coinPrice).toFixed(4) : coinReplaced(parseFloat(coinPrice).toFixed(2))
	
	const coinPriceChangeFormatted = isNegativeNumber ? coinPriceChange : "+" + coinPriceChange


	return (
		<div className={cotationCardVariants({ intent })}>
			<div className="flex-1">
				<div className="grid grid-flow-col grid-cols-[42px] pb-6">
					<div className={`flex-1 p-2 rounded-md self-center text-xs ${colorsVariants({bg, text})}`}>
						<BlurImage className="filter grayscale contrast-125" quality={100} src={coin.image} height={26} width={26} alt={coin.name} />
					</div>
					<div className="pl-4 grid">
						<span>{coin.name}</span>
						<span className="text-xs text-slate-400">{coin.symbol.toUpperCase()} USD</span>
					</div>
				</div>
				<div>
					<div className="pb-6 flex gap-2 items-center">
						<span className={`p-2 rounded-md self-center text-xs ${colorsVariants({bg, text})}`}>{coinPriceChangeFormatted}%</span>
						<div className={`p-2  rounded-lg text-gray-100 self-center text-xs ${colorsVariants({bgStrong})}`}>
							<IconsTrending isNegative={isNegativeNumber}/>
						</div>
					</div>
					<span className="text-xl">${coinPriceFormatted}</span>
				</div>
			</div>
			<ChartLine isTiny position="primary" color={backgroundColorFormatted} backgroundColor={backgroundColorFormatted} coinName={coin.name} bg={bg} />
		</div>
	)
}

export default CotationCard