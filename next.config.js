/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
	async rewrites() {
		return [
			{
				source: "/:path*",
				destination: "http://localhost:3000/searchPage/searchPage",
			},
		];
	},