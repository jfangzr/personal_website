export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "James Fang",
	description: "Personal website, by UIUC undergrad alum and grad student James Fang",
	navItems: [
		{ label: "Home", href: "/"},
		{ label: "About", href: "/about"},
		{ label: "Blog", href: "/blog"},
		{ label: "Contact", href: "/contact"},
		{ label: "CV", href: "/cv"},
		{ label: "Hobbies", href: "/hobbies"},
		{ label: "Travels", href: "/travels"},
	],
	navMenuItems: [
		{ label: "Home", href: "/"},
		{ label: "About", href: "/about"},
		{ label: "Blog", href: "/blog"},
		{ label: "Contact", href: "/contact"},
		{ label: "CV", href: "/cv"},
		{ label: "Hobbies", href: "/hobbies"},
		{ label: "Travels", href: "/travels"},
	],
	links: {
		github: "https://github.com/jfangzr/",
	},
};
