import { FiTrendingDown } from "@react-icons/all-files/fi/FiTrendingDown"
import { FiTrendingUp } from "@react-icons/all-files/fi/FiTrendingUp"

export function IconsTrending({isNegative}) {
	return isNegative ? <FiTrendingDown size={12} /> : <FiTrendingUp  size={12} />
}

export default IconsTrending