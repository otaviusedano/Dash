"use client"

import { useSelector } from "react-redux"
import ChartLine from "./ChartLine"

const ChartInitial = () => {	
	let coinName
	const coinSearched = useSelector(state => state.search.coinToSearch) 

	coinSearched.map(coin => {
		coinName = coin.name
	})

	// const dispatch = useDispatch()
	// const [ day, setDay ] = useState("day")


	// const labels24h = ["0 am", "3 am", "6 am", "9 am", "12 am", "3 pm", "6 pm", "9 pm", "12 pm"]
	// const labels7days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
	// const labels1month = ["1 day", "7 days", "14 days", "21 days", "28 days", "31 days"]

	// function handleSetLabel(label) {
	// 	dispatch(setLabels(label))
	// 	if (label.length == 9) setDay("day")
	// 	if (label.length == 7) setDay("week")
	// 	if (label.length == 6) setDay("month")
	// }

	return (
		<>
			{/* <div className="flex gap-2 justify-end">
				<Button onClick={() => handleSetLabel(labels24h)}>24h</Button>
				<Button onClick={() => handleSetLabel(labels7days)} >7 Days</Button>
				<Button onClick={() => handleSetLabel(labels1month)} >1 Month</Button>
			</div> */}
			<div className="">
				<ChartLine size="secondary" color="secondary" backgroundColor="secondary" coinName={coinName}/>
			</div>
		</>
	) 
}

export default ChartInitial