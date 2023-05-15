"use client"


import Link from "next/link"

import { FiCreditCard } from "@react-icons/all-files/fi/FiCreditCard"
import { FiGrid } from "@react-icons/all-files/fi/FiGrid"
import { FiSliders } from "@react-icons/all-files/fi/FiSliders"
import { FiUser } from "@react-icons/all-files/fi/FiUser"


const SideNav = () => {

	// Client
	// const setPageToTeste = useDispatch(setPage("teste"))

	// Server side Render
	// const setPageToTesteGood = store.dispatch(setPage("teste"))

	return (
		<nav className="w-[10%] fixed h-screen bg-slate-100 p-6 py-10">
			<h1 className="text-5xl font-light text-purple-800"> <Link href='/'>*Dash</Link></h1>
			<ul className="text-slate-950 font-medium">
				<li className="pt-8"><Link className="flex items-center gap-2 outline-offset-8 outline-1 rounded-sm hover:outline" href={"/profile/10"}> <FiUser/> Profile</Link></li>
				<li className="pt-6"><Link className="flex items-center gap-2 outline-offset-8 outline-1 rounded-sm hover:outline" href="/"> <FiGrid/> Dashboard</Link></li>
				<li className="pt-6"><Link className="flex items-center gap-2 outline-offset-8 outline-1 rounded-sm hover:outline" href={"/wallet/10"}> <FiCreditCard/> Wallet</Link></li>
				<li className="pt-6"><Link className="flex items-center gap-2 outline-offset-8 outline-1 rounded-sm hover:outline" href="/trending"> <FiSliders />Trending</Link></li>
				<li className="pt-[60vh]"><Link className="flex items-center gap-2" href="/login">Logout</Link></li>
			</ul>
		</nav>
	)
}

export default SideNav