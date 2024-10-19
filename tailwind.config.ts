import type { Config } from "tailwindcss";

export const colors = {
	dark: "#262522",
	primary: "#001eff",
	turquoise: "#24BABA",
	lightGrey: "#D9D9D9",
} as const;

const config: Config = {
	mode: "jit",
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./modules/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: colors,
		},
	},
	plugins: [],
};
export default config;
