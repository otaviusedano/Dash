/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "assets.coingecko.com",
				port: "",
				pathname: "/coins/images/**",
			},
			{
				protocol: "http",
				hostname: "images.pexels.com"
			}
		],
	},
}

module.exports = nextConfig
