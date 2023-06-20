/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.coingecko.com",
			},
			{
				protocol: "https",
				hostname: "**.pexels.com"
			}
		],
	},
}

module.exports = nextConfig
