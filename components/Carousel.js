"use client"

import { useEffect, useState } from "react"
import { FiChevronLeft } from "@react-icons/all-files/fi/FiChevronLeft"
import { FiChevronRight } from "@react-icons/all-files/fi/FiChevronRight"


const Carousel = ({children: slides}) => {

	const [curr, setCurr] = useState(0)

	const autoSlideInterval = 3000

	const autoSlide = false

	const prev = () =>
		setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
	const next = () =>
		setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

	useEffect(() => {
		if (!autoSlide) return
		const slideInterval = setInterval(next, autoSlideInterval)

		return () => clearInterval(slideInterval)
	}, [])

	return (
		(
			<div className=" flex  justify-center overflow-hidden relative max-h-screen">
				<div
					className="flex fill-black object-fill blur-sm transition-transform opacity-95 ease-out duration-500 relative"
					style={{ transform: `translateX(-${curr * 100}%)` }}
				>
					{slides}
				</div>
				<div
					className="flex h-[50%] shadow-[0px_0px_25px_12px_rgb(0,0,0,0.25)] w-[50%] absolute right-0 left-0 bottom-32 top-0 my-auto mx-auto gap-[80vh] ease-out duration-500"
					style={{ transform: `translateX(-${curr * 235}%)`}}
				>
					{slides}
				</div>
				<div className="absolute bottom-0 inset-0 flex items-center justify-between py-4 p-0">
					<button
						onClick={prev}
						className="p-6 h-screen text-slate-100 hover:text-slate-50 transition-colors"
					>
						<FiChevronLeft size={40} />
					</button>
					<button
						onClick={next}
						className="p-6 h-screen text-slate-100 hover:text-slate-50 transition-colors"
					>
						<FiChevronRight size={40} />
					</button>
				</div>
				<div className="absolute z-50 bottom-4 right-0 left-0">
					<div className="flex items-center justify-center gap-2">
						{slides?.map((_, i) => (
							<div
								key={i}
								className={`
                transition-all w-3 h-3 bg-white rounded-full
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
							/>
						))}
					</div>
				</div>
			</div>
		)
	)
}

export default Carousel