export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "James Fang",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{ label: "Home", href: "/"},
		{ label: "About", href: "/about"},
		{ label: "Contact", href: "/contact"},
		{ label: "Hobbies", href: "/hobbies"},
		{ label: "Travels", href: "/travels"},
	],
	navMenuItems: [
		{ label: "Home", href: "/"},
		{ label: "About", href: "/about"},
		{ label: "Contact", href: "/contact"},
		{ label: "Hobbies", href: "/hobbies"},
		{ label: "Travels", href: "/travels"},
	],
	links: {
		github: "https://github.com/jamesdiplomat/",
	},
};
