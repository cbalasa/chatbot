import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "../lib/store/provider";
import ChatBot from "@/modules/chatBot/ChatBot";
export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
};
const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-montserrat",
	display: "swap",
	preload: true,
	// fallback: ["Trebuchet MS"]
	adjustFontFallback: false,
});

export const metadata: Metadata = {
	title: "Chatbot",
	description: "Simple chatbot",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Providers>
				<body
					className={`${montserrat.variable} container m-auto px- max-w-[1314px] pb-12`}
				>
					<ChatBot />
					{children}
				</body>
			</Providers>
		</html>
	);
}
