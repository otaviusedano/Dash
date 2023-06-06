"use client"

import coinReplaced from "../utils/formatPriceCurrency"
import { FiCreditCard } from "@react-icons/all-files/fi/FiCreditCard"
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart"

const TransactionCoin = ({data, deposit}) => {

	const { type, price, coin, time, method } = data

	return (
		<div className="bg-slate-50 p-4 my-4 rounded-md">
			<div className="flex justify-between items-center">
				<div className=" mr-6 p-4 bg-slate-100">
					{
						coin?.name
							? <FiShoppingCart size={18} />
							: <FiCreditCard size={18} />
					}
				</div>
				<div className="grid flex-1">
					<span className="text-gray-400">History Balance</span>
					<h1 className="font-bold"> ${coinReplaced(deposit.toString())}</h1>
				</div>
				<div className="grid flex-1">
					<span className="text-gray-400">Price</span>
					<h1 className="font-bold"> ${coinReplaced(price?.toString()  || coin.price.toString())}</h1>
				</div>
				<div className="grid flex-1">
					<span className="text-gray-400">Type</span>
					<h1 className="font-bold"> {type}</h1>
				</div>
				<div className="grid flex-1">
					<span className="text-gray-400">Method</span>
					<h1 className="font-bold">{method}</h1>
				</div>
				<div className="grid flex-1">
					<span className="text-gray-400">Day</span>
					<h1 className="font-bold">{time}</h1>
				</div>
			</div>
		</div>
	)
}

export default TransactionCoin