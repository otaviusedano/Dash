import { cva } from "class-variance-authority"

const searchBarVariants = cva(
	"font-medium p-2 rounded-md",
	{
		variants: {
			intent: {
				primary: "bg-slate-200 text-slate-900 hover:bg-slate-300 focus:bg-slate-300 transition-colors",
				secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 focus:bg-slate-200 transition-colors",
			},
			distance: {
				sm: "mr-2"
			}
		},
		defaultVariants: {
			intent: "primary",
		}
	}
)

const SearchBar = ({ intent, distance, ...props }) => {
	return (
		<input className={searchBarVariants({ intent, distance })} {...props}/>
	)
}

export default SearchBar