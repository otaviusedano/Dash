// import 'server-only'

import Dashboard from "./dashboard/page"

export const metadata = {
	title: "Dashboard",
	description: "Generated by create next app",
}

export default async function Home() {
	return (
		<main>
			<Dashboard />
		</main>
	)
}
