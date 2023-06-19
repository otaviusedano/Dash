/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "assets.coingecko.com",
				port: "",
				pathname: "/coins/images/**",
			},
			{
				protocol: "https",
				hostname: "images.pexels.com"
			}
		],
	},
}

module.exports = nextConfig
