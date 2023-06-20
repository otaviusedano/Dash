"use server"

import Image from "next/image"

import SearchBar from "../../components/SearchBar"
import Button from "../../components/Button"
import Link from "next/link"

import image from "../../public/perfil/perfil1.jpg"

export default async function Login() {
	return (
		<section className="text-slate-950 flex bottom-0 left-0 bg-gray-50 fixed h-screen w-screen z-20">
			<div className="flex-1 flex justify-center items-center ">
				<div className="grid min-w-[40%]">
					<h1 className="font-semibold text-4xl pb-3">Log in</h1>
					<span className="text-gray-400 pb-4">Welcome Back! Please enter your user.</span>
					<div className="pb-5">
						<div className="grid gap-2 py-4">
							<span className="text-sm font-medium">Email</span>
							<SearchBar type='email' />
						</div>
						<div className="grid gap-2">
							<span className="text-sm font-medium">Password</span>
							<SearchBar type='password' />
						</div>
					</div>
					<div className="flex justify-between pb-6 items-center">
						<div className="flex gap-1">
							<input type="checkbox"/>
							<span className="text-gray-600">Remember me</span>
						</div>
						<Link className="text-sm font-bold text-slate-950 hover:underline transition-all" href={"/signup"}>Forgot password</Link>
					</div>
					<Button><Link className="flex justify-center" href={"/"}>Sign in</Link></Button>
					<span className="text-gray-400 pt-4">Don&apos;t have an account? <Link className="font-bold text-slate-950 hover:underline transition-all" href={"/signup"}>Sign up</Link></span>
				</div>
			</div>
			<div className="flex-1 relative hidden laptop:flex">
				<div className="absolute top-[45%] left-[0%] mx-[10%]">
					<span className="text-slate-50 font-semibold text-4xl">Be unique. Be authentic. Be Dash, just it.</span>
				</div>
				<Image className="object-cover" quality={100} src={image} alt={image} />
				<div className="grid gap-2 absolute bottom-12 left-12">
					<h1 className="text-slate-50 text-2xl font-bold">Catarina Lawyes</h1>
					<span className="text-slate-50 font-semibold">CEO, Layers</span>
				</div>
			</div>
		</section>
	)
}