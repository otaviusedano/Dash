"use client"

import { cva } from "class-variance-authority"

const buttonVariants = cva(
	"font-bold p-2 rounded-md transition-colors",
	{
		variants: {
			intent: {
				primary: "hover:text-slate-950 hover:bg-slate-50 text-slate-200 bg-slate-900"
			}
		},
		defaultVariants: {
			intent: "primary",
		}
	}
)

const Button = ({children, intent, ...props}) => {
	return (
		<button className={buttonVariants({ intent, props })} {...props}>{children}</button>
	)
}

export default Button