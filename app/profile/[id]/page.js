import SearchBar from "@/components/SearchBar"
import getUser from "@/lib/getUser"
import Image from "next/image"

export const metadata = {
	title: "Profile",
	description: "Generated by create next app",
}

// NEXT 12
// export async function getServerSideProps({params}) {
// 	return {
// 		props: {
// 			params
// 		}
// 	}
// }

// NEXT 13
export default async function Profile() {

	const { image, name, id } = await getUser()


	return (
		<section className="text-slate-950">
			<div className=" bg-slate-100 p-4 rounded-md">
				<h1 className="font-bold text-xl pb-6">My Profile</h1>
				<div className="bg-slate-50 p-6 mb-6 rounded-lg">
					<div className="flex gap-3 items-center">
						<Image className="rounded-full" quality={100} src={image} height={92} width={92} alt={name} />
						<div className="grid gap-1">
							<h1 className="font-bold text-2xl pb-1">{name}</h1>
							<span className="font-bold text-sm text-gray-400">Online</span>
							<span className="font-medium text-sm text-gray-400">Americana, Brazil</span>
						</div>
					</div>
				</div>
				<div className="grid gap-4 bg-slate-50 p-4">
					<h1 className="font-bold text-lg">Personal Information</h1>
					<div>
						<div className="flex gap-4">
							<div className="w-[35%] grid gap-2">
								<h1 className="text-gray-400 font-medium">Name</h1>
								<SearchBar value={name} disabled intent={"secondary"} />
							</div>
							<div className="w-[35%] grid gap-2">
								<h1 className="text-gray-400 font-medium">Email Address</h1>
								<SearchBar disabled value={"sedanootavio@gmail.com"} intent={"secondary"} />
							</div>
						</div>
					</div>
					<div>
						<div className="flex gap-4">
							<div className="grid gap-2 w-[35%]">
								<h1 className="text-gray-400 font-medium">Phone</h1>
								<SearchBar value={"+55 19 99884 4332"} disabled intent={"secondary"} />
							</div>
							<div className="w-[35%] grid gap-2">
								<h1 className="text-gray-400 font-medium">User Id</h1>
								<SearchBar disabled value={id} intent={"secondary"} />
							</div>
						</div>
					</div>
				</div>
				<div className="grid gap-4 bg-slate-50 mt-4 p-4">
					<h1 className="font-bold text-lg">Address</h1>
					<div>
						<div className="flex gap-4">
							<div className="w-[35%] grid gap-2">
								<h1 className="text-gray-400 font-medium">Country</h1>
								<SearchBar value={"Brazil"} disabled intent={"secondary"} />
							</div>
							<div className="w-[35%] grid gap-2">
								<h1 className="text-gray-400 font-medium">City/State</h1>
								<SearchBar disabled value={"Americana, São Paulo"} intent={"secondary"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}