"use client"

import Link from "next/link"

import useAuth from "../../lib/auth/useAuth"
import SearchBar from "../../components/SearchBar"
import Button from "../../components/Button"

import imagem1 from "../../public/perfil/perfil2.jpg"
import BlurImage from "../../components/BlurImage"

const Signup = () => {
	const { login, setUserInfo, displayMessageOf, isConfirmPassword, setSecondPassword } = useAuth()

	const handleLogin = (e) => {
		return login(e)
	}

	const handleSetUserEmail = (e) => {
		setUserInfo(prevState => ({...prevState, email: e.target.value}))
	}

	const handleSetUserPassword = (e) => {
		setUserInfo(prevState => ({...prevState, password: e.target.value}))
	}

	const isConfirmPasswordValid = isConfirmPassword()

	return (
		<form onSubmit={(e) => handleLogin(e)} className="text-slate-950 flex bottom-0 left-0 bg-gray-50 fixed h-screen w-screen z-20">
			<div className="flex-1 relative hidden laptop:flex">
				<div className="absolute top-[45%] left-[0%] text-center">
					<span className="text-slate-50 font-semibold text-4xl">&quot;We&apos;ve been using Dash to kick start every new project and can&apos;t imagine working without it.&quot;</span>
				</div>
				<BlurImage className="object-cover desktop:object-right-top" quality={80} src={imagem1} alt={imagem1} />
				<div className="grid gap-2 absolute bottom-12 left-12">
					<h1 className="text-slate-50 text-2xl font-bold">Olivia James</h1>
					<span className="text-slate-50 font-semibold">Lead Designer, Layers</span>
				</div>
			</div>
			<div className="flex-1 flex justify-center items-center">
				<div className="grid min-w-[40%]">
					<h1 className="font-semibold text-4xl pb-3">Sign up</h1>
					<span className="text-gray-400 pb-4">Welcome! Please create your user.</span>
					<div className="pb-5">
						<div className="grid gap-2 py-2">
							<span className="text-xs font-medium">Email</span>
							<SearchBar onChange={(e) => handleSetUserEmail(e)} type='email' />
						</div>
						{
							displayMessageOf?.email &&
								<div className="mb-3">
									<span>{displayMessageOf.email}</span>
								</div>
						} 
						<div className="grid gap-2 pb-2">
							<span className="text-xs font-medium">Password</span>
							<SearchBar onChange={(e) => handleSetUserPassword(e)}  type='password' />
						</div>
						{
							displayMessageOf?.password &&
							<div className="mb-3">
								<span>{displayMessageOf.password}</span>
							</div>
						}
						<div className="grid gap-2 py-2">
							<span className="text-xs font-medium">Confirm Password</span>
							<SearchBar onChange={(e) => setSecondPassword(e.target.value)} type='password' />
						</div>
						{
							displayMessageOf?.password && !isConfirmPasswordValid &&
								<div className="mb-3">
									<span>The Passwords is not the same.</span>
								</div>
						}
					</div>
					<Button onClick={(e) => handleLogin(e)}>Sign up</Button>
					<span className="text-gray-400 pt-4">Already have account? <Link className="font-bold text-slate-950 hover:underline transition-all" href={"/login"}>Login</Link></span>
				</div>
			</div>
		</form>
	)
}

export default Signup