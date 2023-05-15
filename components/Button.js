"use client"

import { cva } from "class-variance-authority"

const buttonVariants = cva(
	"font-bold p-2 rounded-md transition-colors",
	{
		variants: {
			intent: {
				primary: "hover:bg-slate-950 text-slate-200 bg-slate-900",
				secondary: "hover:text-slate-200 hover:bg-slate-900 bg-slate-50",
				signIn: "hover:text-slate-950 hover:border-slate-950 text-slate-400 border-slate-400 border"
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