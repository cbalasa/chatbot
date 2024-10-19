/** @type {import('next').NextConfig} */
const nextConfig = {};

const config = {
	...nextConfig,
	webpack: (config, { isServer }) => {
		// Add rule for SVG files
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});
		if (isServer) {
			config.resolve.fallback = {
				fs: false,
				path: false,
				os: false,
				http: false,
				https: false,
				stream: false,
				crypto: false,
			};
		}
		return config;
	},

	reactStrictMode: false,
};

export default config;
