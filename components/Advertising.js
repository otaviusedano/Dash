import { FiBox } from "@react-icons/all-files/fi/FiBox"
import { FiCodepen } from "@react-icons/all-files/fi/FiCodepen"

const Advertising = () => {

	return (
		<div className="cursor-pointer rounded-md bg-slate-950 text-slate-100 p-4">
            <div className="pb-2 flex justify-between items-center">
                <FiBox size={66}/>
                <span className="text-5xl">
                    -
                </span>
                <FiCodepen size={66}/>
            </div>
            <div className="flex justify-center items-center">
                <h1 className="font-bold text-xl ">
                    Be Unique. Be Dash.
                </h1>
            </div>
        </div>
	)
}

export default Advertising