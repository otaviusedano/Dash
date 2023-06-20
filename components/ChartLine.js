/* eslint-disable no-unreachable */
"use client"

import { cva } from "class-variance-authority"
import { CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend, Chart as ChartJS } from "chart.js"

import { use } from "react"
import { Line } from "react-chartjs-2"
import AlertDisplay from "./NotFoundCoin"

const Annotation = {
	id: "annotation",
	beforeDraw: ((chart) => {
		const activePoint = chart.tooltip?._active[0]
		const plugins =  chart.config._config.options.plugins.annotation

		const mousePositionX = chart.tooltip?._eventPosition?.x
		const mousePositionY = chart.tooltip?._eventPosition?.y

		if (chart.tooltip == undefined) return

		chart.tooltip.y = mousePositionY
		chart.tooltip.x = mousePositionX >= chart.width / 2 ? (mousePositionX - 100) : mousePositionX

		if (chart.tooltip._active && chart.tooltip._active.length && activePoint.element.x && plugins?.display) {
			const ctx = chart.ctx
			ctx.save()
			ctx.beginPath()
			ctx.setLineDash([4, 6])
			ctx.moveTo(activePoint.element.x, chart.chartArea.top)
			ctx.lineTo(activePoint.element.x, activePoint.element.y * 1.8)
			ctx.lineWidth = 2
			ctx.strokeStyle = "rgb(148, 163, 184)"
			ctx.stroke()
			ctx.restore()
		}
	})
}

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
	Annotation
)

const containerVariants = cva(
	"",
	{
		variants: {
			size: {
				primary: "flex-[2] w-[60%] relative",
				secondary: "w-full"
			}
		},
		defaultVariants: {
			size: "primary",
		}
	}
)

const chartVariants = cva(
	"",
	{
		variants: {
			position: {
				primary: "absolute bottom-10"
			},
			default: {
				primary: ""
			},
		},
		defaultVariants: {
			position: "default"
		}
	}
)

const lineVariants = cva(
	"",
	{
		variants: {
			color: {
				primary: "rgb(248, 113, 113)",
				secondary: "rgb(107, 33, 168)",
				tertiary: "rgb(74, 222, 128)"
			},
			backgroundColor: {
				primary: "rgba(254, 202, 202, 0.01)",
				secondary: "rgba(255, 255, 255, 0)",
				tertiary: "rgba(187, 247, 208, 0.01)"
			}
		},
	}
)

// eslint-disable-next-line no-undef
const fetchMap = new Map()

function queryClient(name, query) {
	if (!fetchMap.has(name)) {
		fetchMap.set(name, query())
	}
	return fetchMap.get(name)
}


export const ChartLine = ({ isTiny, size, position, color, backgroundColor, coinName }) => {
	let delayed = false

	const coinData = coinName ? use(queryClient(coinName, () =>
		fetch(`https://dash-otaviusedano.vercel.app/api/coin/${coinName.toLowerCase()}`).then(res => 
			res.json()
		)
	)) : null


	if (!coinData) return <AlertDisplay>Name of coin Not found.</AlertDisplay>

	const variableForMax = coinData?.prices[0][1] * (isTiny ? 1.18 : 1.20)
	const variableForMin = coinData?.prices[0][1] / (isTiny ? 1.06 : 1.10)

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		interaction: {
			mode: "index",
			intersect: false,
			axis: "x",
		},
		title: {
			display: false
		},
		animation: {
			onComplete: () => {
				delayed = true
			},
			delay: (context) => {
				let delay = 0
				if (context.type === "data" && context.mode === "default" && !delayed) {
					delay = context.dataIndex * 10 + context.datasetIndex * 20
				}
				return delay
			}
		},
		scales: {
			y: {
				beginAtZero: false,
				max: variableForMax,
				min: variableForMin,
				ticks: {
					display: false
				},
				grid: {
					display: false
				},
				border : {
					display: false
				},
			},
			x: {
				beginAtZero: false,
				ticks: {
					display: false
				},
				grid: {
					display: false
				},
				border : {
					display: false
				},
			},
		},
		plugins: {
			annotation: {
				display: isTiny ? false : true
			},
			animation: true,
			tooltip: {
				enabled: isTiny ? false : true,
				backgroundColor: "rgb(241, 245, 249)",
				bodyColor: "rgb(2, 6, 23)",
				titleColor: "rgb(2, 6, 23)",
				titleFont: "bold",
				padding: 12,
				cornerRadius: 6,
				usePointStyle: true,
				boxPadding: 6,
				callbacks: {
					title: () => {
						return ""
					},
					labelColor: () => {
						return {
							backgroundColor: "rgb(107, 33, 168)",
						}
					},
					label: (context) => {
						let label = context.dataset.label || ""

						if (label) {
							label += ": "
						}
						if (context.parsed.y !== null) {
							label += new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(context.parsed.y)
						}
						return label
					},
				}
			},
			label: {
				display: false
			},
			legend: {
				display: false
			},
			title: {
				display: false,
			},
			decimation: {
				enabled: false,
				algorithm: "min-max",
			}
		},
	}

	const labels = Array.from(Array(coinData?.prices.length).keys())

	const data = {
		labels, 
		datasets: [{
			label: "",
			data: [...coinData?.prices || null],
			borderColor: lineVariants({ color }),
			backgroundColor: (context) => {
				const { ctx} = context.chart

				const gradient = ctx.createLinearGradient(0, 0, 0, 142)
				gradient.addColorStop(0, lineVariants({ color }))
				gradient.addColorStop(0.5, lineVariants({ color }))
				gradient.addColorStop(1, lineVariants({ backgroundColor }))
				return gradient
			},
			borderWidth: isTiny ? 2 : 4,
			fill: true,
			tension: 0.4,
			pointHitRadius: isTiny ? 0 : 20,
			pointRadius: isTiny ? 0 : 0.1,
			pointHoverRadius: isTiny ? 0 : 4,
			pointHoverBackgroundColor: "rgb(107, 33, 168)",
		}]
	}

	return (
		<div className={containerVariants({ size })}>
			<Line
				className={chartVariants({ position })}
				data={data}
				width={400}
				height={400}
				options={options}
			/>
		</div>
	)
}

export default ChartLine