import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Analytics } from '@vercel/analytics/react';
import { Link } from "@nextui-org/link";
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
				<Providers>
					<div className="relative flex flex-col">
						<Navbar />
						<main className="container mx-auto max-w-7xl px-6 flex-grow">
							{children}
						</main>
					</div>
				</Providers>
				<Analytics />
			</body>
		</html>
	);
}
