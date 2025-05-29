
import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Analytics } from '@vercel/analytics/react';
import { BlueLink as Link } from "@/components/link";
import clsx from "clsx";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className="bg-neutral-100" lang="en" suppressHydrationWarning >
			<head />
			<body
				className={clsx(
					"min-h-screen font-sans antialiased",
					fontSans.variable
				)}
			>
				<div className="relative flex flex-col">
					<Navbar />
					<main className="container mx-auto max-w-7xl px-6 flex-grow text-md md:text-lg">
						{children}
					</main>
				</div>
				<Analytics />
			</body>
		</html>
	);
}
