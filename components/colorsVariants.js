import { cva } from "class-variance-authority"

export const colorsVariants = cva(
	"",
	{
		variants: {
			text: {
				success: "text-green-600",
				loss: "text-red-600",
			},
			bg: {
				success: "bg-green-200",
				loss: "bg-red-200",
			},
			bgStrong: {
				success: "bg-green-400",
				loss: "bg-red-400",
			},
			bgWeak: {
				success: "bg-green-50",
				loss: "bg-red-100",
			}
		},
		defaultVariants: {
			bg: "success",
		}
	}
)

export default colorsVariants