/** @type {import('next').NextConfig} */
const nextConfig = {};

const config = {
	...nextConfig,
	webpack: config => {
		// Add rule for SVG files
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},

	reactStrictMode: true,
};

export default config;
