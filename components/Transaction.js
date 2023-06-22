"use client"

import coinReplaced from "../utils/formatPriceCurrency"
import timeFormatted from "../utils/formatTime"

import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown"
import { FiChevronUp } from "@react-icons/all-files/fi/FiChevronUp"
import { FiCreditCard } from "@react-icons/all-files/fi/FiCreditCard"
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart"

import { useState } from "react"


const Transaction = ({data}) => {
	const [ isOpen, setIsOpen ] = useState(false)

	const { type, price, coin, time, method } = data

	return (
		<details className="cursor-pointer z-10 bg-slate-50 transition-all">
			<summary onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between  p-4 rounded-lg mt-3">
				<div className="flex gap-3">
					<div className="p-4 rounded-sm bg-slate-100">
						{
							coin?.name
								? <FiShoppingCart />
								: <FiCreditCard />
						}
					</div>
					<div className="grid">
						<span className="text-gray-400 text-xs">{type}</span>
						<span className="font-medium">${coinReplaced(price?.toString() || coin.price.toString())}</span>
					</div>
				</div>
				<span>
					<FiChevronUp className={isOpen ? "" : "hidden"} size={16}/>
					<FiChevronDown className={isOpen ? "hidden" : ""} size={16}/>
				</span>
			</summary>
			<div className="flex justify-between items-center p-4 px-8" >
				{coin?.quantity 
					? (
						<>
							<div className="grid">
								<span className="text-xs text-gray-400">Name</span>
								<span className="font-semibold text-lg">{coin?.name || method}</span>
							</div>
							<div className="grid">
								<span className="text-xs text-gray-400">Quantity</span>
								<span className="font-semibold text-lg">{coin?.quantity}</span>
							</div>
						</>
					) 
					: <div className="grid">
						<span className="text-xs text-gray-400">Method</span>
						<span className="font-semibold text-lg">{method}</span>
					</div> 
				}
				<div className="grid">
					<span className="text-xs text-gray-400">Time</span>
					<span className="font-semibold text-lg">{timeFormatted(time)}</span>
				</div>
			</div>
		</details>
	)
}

export default Transaction