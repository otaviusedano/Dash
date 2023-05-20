"use client"

import IconsTrending from "./iconsTrending"

const RecentCoins = ({transactions}) => {
	// const [ isAllTransactions, setIsAllTransactions ] = useState(false)
	// let newTransactions = []

	// function handleSetIsAllExchange() {
	// 	setIsAllTransactions(true)
	// }

	// newTransactions = transactions.map(({time, ...props}) => ({...props, day: parseInt(time?.substr(0,2)), time: time}))

	// newTransactions = newTransactions.filter(({day}) => day > 0 && day <= 7)	

	return (
		<div>
			<div className="bg-slate-50 text-slate-950 p-3 overflow-hidden relative h-12">
				<div className="absolute -left-[100%] flex gap-4 truncate animate-go-infinite">
					<div className="flex gap-2 items-center">
						<div className="bg-green-500 text-slate-50 p-1 rounded-xl">
							<IconsTrending size={20}/>
						</div>
						<span className="text-sm">+1,31%</span>
						<h1	className="font-medium ">DOLAR</h1>
						<span>R$ 4,99</span>
					</div>
					<div className="flex gap-2 items-center">
						<div className="bg-red-500 text-slate-50 p-1 rounded-xl">
							<IconsTrending isNegative={true} size={20}/>
						</div>
						<span className="text-sm">-0,84%</span>
						<h1	className="font-medium ">EURO</h1>
						<span>R$ 5,39</span>
					</div>
					<div className="flex gap-2 items-center">
						<div className="bg-green-500 text-slate-50 p-1 rounded-xl">
							<IconsTrending size={20}/>
						</div>
						<span className="text-sm">+0,26%</span>
						<h1	className="font-medium ">PESO</h1>
						<span>R$ 0,022</span>
					</div>
				</div>
				<div className="mr-5 absolute right-[200%] flex gap-4 truncate animate-go-infinite">
					<div className="flex gap-2 items-center">
						<div className="bg-green-500 text-slate-50 p-1 rounded-xl">
							<IconsTrending size={20}/>
						</div>
						<span className="text-sm">+1,31%</span>
						<h1	className="font-medium ">DOLAR</h1>
						<span>R$ 4,99</span>
					</div>
					<div className="flex gap-2 items-center">
						<div className="bg-red-500 text-slate-50 p-1 rounded-xl">
							<IconsTrending isNegative={true} size={20}/>
						</div>
						<span className="text-sm">-0,84%</span>
						<h1	className="font-medium ">EURO</h1>
						<span>R$ 5,39</span>
					</div>
					<div className="flex gap-2 items-center">
						<div className="bg-green-500 text-slate-50 p-1 rounded-xl">
							<IconsTrending size={20}/>
						</div>
						<span className="text-sm">+0,26%</span>
						<h1	className="font-medium ">PESO</h1>
						<span>R$ 0,022</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RecentCoins