import getUser from "@/lib/getUser"

import { FiBell } from "@react-icons/all-files/fi/FiBell"
import { FiUser } from "@react-icons/all-files/fi/FiUser"

import coinReplaced from "@/utils/formatPriceCurrency"
import RecentCoins from "./RecentCoins"

export default async function ProfileSideBar() {
	let favoriteMethod
	let totalDeposits = 0

	const { name, transactions, currentInvestments } = await getUser()

	const totalCoins = Object.keys(currentInvestments).length

	transactions.map(transaction => {
		favoriteMethod = transaction.method
		if (transaction.type == "Deposit" ) totalDeposits += transaction.price
		if (transaction.type == "Withdraw" ) totalDeposits -= transaction.price
	})


	return (
		<nav className="max-w-[15%] fixed right-0 bottom-0 h-screen bg-slate-100 p-6 py-10 text-slate-950">
			<header className="pb-14">
				<div className="flex justify-between items-center">
					<div className="flex">
						<button>
							<FiBell size={18} />
						</button>
					</div>
					<div className="flex gap-1 desktop:gap-3 items-center text-end">
						<div>
							<h1 className="font-bold">{name}</h1>
							<span className="font-extralight text-sm text-gray-400">Online</span>
						</div>
						<div className="bg-slate-300 p-4 rounded-full">
							<FiUser className="text-slate-950" size={20}/>
						</div>
					</div>
				</div>
			</header>
			<div className="bg-slate-50 p-4 mb-8 rounded-md">
				<div className="grid">
					<span>Current Money</span>
					<h1 className="font-bold big-desktop:text-2xl pb-6 text-xl break-all"> ${coinReplaced(totalDeposits.toString())}</h1>
				</div>
				<div className="flex justify-between flex-wrap big-desktop:flex-nowrap">
					<div className="grid text-center text-xl">
						<span className="font-normal text-sm break-all big-desktop:break-normal">Transactions</span>
						<span className="font-semibold text-lg">{transactions.length}</span>
					</div>
					<div className="grid text-center text-xl">
						<span className="font-normal text-sm">Favorite Method</span>
						<span className="font-semibold text-lg">{favoriteMethod}</span>
					</div>
					<div className="grid text-center gap-1">
						<span className="font-normal text-sm">Total Coins</span>
						<span className="font-semibold text-lg">{totalCoins}</span>
					</div>
				</div>
			</div>
			<RecentCoins transactions={transactions}/>
		</nav>
	)
}