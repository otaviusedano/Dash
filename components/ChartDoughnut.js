"use client"

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ArcElement
)

const ChartDoughnut = ({transactions, labels, ...props}) => {

	const backgroundColor = [
		"rgba(107, 33, 168, 0.2)",
		"rgba(107, 33, 168, 0.4)",
		"rgba(107, 33, 168, 0.6)",
		"rgba(107, 33, 168, 0.8)",
		"rgb(107, 33, 168)",
	]

	function adjustBackgroundColor(quantity) {
		const newBackgroundColor = backgroundColor.map((color, index) => {
			const opacity = 1.8 + (index / backgroundColor.length)
			const inverseQuantity = 1 / quantity
			const newOpacity = opacity * inverseQuantity
			const colorParts = color.match(/\d+/g)
			const newColorParts = colorParts.map((part) => Math.floor(part))
			const newColor = `rgba(${newColorParts[0]}, ${newColorParts[1]}, ${newColorParts[2]}, ${newOpacity})`

			return newColor
		})

		return newBackgroundColor
	}
	

	const options = {
		responsive: true,
		scales: {
			y: {
				ticks: {
					display: false
				},
				grid: {
					display: false
				},
				border: {
					display: false
				},
			},
			x: {
				ticks: {
					display: false
				},
				grid: {
					display: false
				},
				border: {
					display: false
				},
			},
		},
		plugins: {
			tooltip: {
				callbacks: {
					label: function(context) {
						return `  $ ${context.parsed}`
					}
				}
			},
			title: {
				display: false,
			},
		},
	}

	const data = {
		labels,
		datasets: [
			{
				data: transactions,
				backgroundColor: adjustBackgroundColor(labels?.length),
			},
		]
	}

	return (
		<Doughnut
			options={options}
			data={data}
			{...props}
		/>
	)
}

export default ChartDoughnut