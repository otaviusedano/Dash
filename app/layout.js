import ProfileSideBar from "@/components/ProfileSideBar"
import Providers from "../components/Providers"
import SideNav from "../components/SideNav"
import "./globals.css"

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({ children }) {
	return (
		<html lang="pt_br">
			<body>
				<Providers>
					<SideNav />
					<div className="max-w-[1328px] mx-[10%] p-6 py-10 min-h-screen bg-slate-50">
						{children}
					</div>
					<ProfileSideBar/>
				</Providers>
			</body>
		</html>
	)
}
