import ChartDoughnut from "../../../components/ChartDoughnut"
import TransactionCoin from "../../../components/TransactionCoin"
import getUser from "../../../lib/getUser"


export const metadata = {
	title: "Wallet",
	description: "Generated by create next app",
}


export default async function Wallet() {
	const { name, transactions, currentInvestments } = await getUser()

	let newTransactions
	let accWeek
	let accMonth
	let accToday

	newTransactions = transactions.map(({time, ...props}) => 
		({...props, day: parseInt(time?.substr(0,2)), time: time})
	)

	accWeek = newTransactions.filter(({day}) => day > 4 && day <= 11)
	accMonth = newTransactions.filter(({day}) => day > 0 && day <= 31)
	accToday = newTransactions.filter(({day}) => day === 11)

	function reducer(arr) {
		return arr.reduce((acc, current) => {
			if (current.type == "Withdraw")  {
				acc - current.price || current.coin.price
			}

			return acc + current.price || current.coin.price
		}, 0)
	}

	accWeek = reducer(accWeek)

	accMonth = reducer(accMonth)

	accToday = reducer(accToday)

	const labelsBalanceChange = ["Today", "Week", "Month"]



	const coinQuantities = {}

	let labelsQuantityCoins = []

	transactions.forEach((transaction) => {
		if (transaction.coin && transaction.coin.name) {
			const coinName = transaction.coin.name

			if (labelsQuantityCoins.includes(coinName) === false) {
				labelsQuantityCoins.push(coinName)
			}

			const quantity = transaction.coin.quantity
			if (coinQuantities[coinName]) {
				coinQuantities[coinName] += quantity
			} else {
				coinQuantities[coinName] = quantity
			}
		}
	})


	let coinsPrice = []

	Object.values(currentInvestments).map(i => coinsPrice.push(i.price))


	const bitcoinQuantity = coinQuantities.bitcoin.toFixed(4)
	const ethereumQuantity = coinQuantities.ethereum.toFixed(4)



	let labelsTotalTransactions = []
	let totalTranscitions = []

	labelsTotalTransactions = newTransactions.map((t) => `Day ${t.day}`)

	// eslint-disable-next-line no-unused-vars
	labelsTotalTransactions.map((_) => totalTranscitions.push(1))

	let transactionsDeposit = []
	let arrWith = []

	let transactionsLength = transactions.length

	transactions.map((t) => {
		if (t.type === "Deposit") {
			while (transactionsLength--) {
				transactionsDeposit.unshift(t.price)
				if (transactionsLength === 1) transactionsDeposit.unshift(t.price - arrWith[0])
			}
		}
		if (t.type === "Withdraw") {
			arrWith.push(t.price)
		}
	})


	return (
		<section className="text-slate-950">
			<h1 className='text-4xl font-medium pt-10 pb-8'>Hi, {name}!</h1>
			<div className="bg-slate-100 p-4 px-3 rounded-lg">
				<h1 className="font-bold text-xl pb-6">All Datas</h1>
				<div className="flex">
					<div className="h-[25%] w-[25%] grid justify-center text-center">
						<h1 className='text-xl font-medium pb-4'>Balance change</h1>
						<ChartDoughnut labels={labelsBalanceChange} transactions={[accWeek, accToday, accMonth]} />
					</div>
					<div className="h-[25%] w-[25%] grid justify-center text-center">
						<h1 className='text-xl font-medium pb-4'>Price Coins</h1>
						<ChartDoughnut labels={labelsQuantityCoins} transactions={coinsPrice} />
					</div>
					<div className="h-[25%] w-[25%] grid justify-center text-center">
						<h1 className='text-xl font-medium pb-4'>Quantity Coins</h1>
						<ChartDoughnut labels={labelsQuantityCoins} transactions={[bitcoinQuantity, ethereumQuantity]} />
					</div>
					<div className="h-[25%] w-[25%] grid justify-center text-center">
						<h1 className='text-xl font-medium pb-4'>Transaction History (April)</h1>
						<ChartDoughnut labels={labelsTotalTransactions} transactions={totalTranscitions} />
					</div>
				</div>
			</div>
			<div className="bg-slate-100 p-4 my-8 rounded-lg">
				<h1 className="font-bold text-lg">All Transactions</h1>
				{
					transactions.reverse().map((transaction, i) => (
						<TransactionCoin deposit={transactionsDeposit[i]} key={i} data={transaction}/>
					))
				}
			</div>
		</section>
	)
}