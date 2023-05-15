export function AlertDisplay({ children }) {
	return (
		<div className="h-[43vh] flex justify-center items-center">
			<h1 className="font-bold text-2xl">{children}</h1>
		</div>
	)
}

export default AlertDisplay