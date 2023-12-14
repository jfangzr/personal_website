export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "James Fang",
	description: "Personal website, by James Fang",
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
