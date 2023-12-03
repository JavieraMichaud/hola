export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "P-INF",
	description: "",
	navItems: [
    {
      label: "Login",
      href: "/login",
    },
	{
		label: "Solicitud",
		href: "/solicitud",
	},
	{
		label: "Carta de aceptacion",
		href: "/aceptacion",
	},
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Login",
			href: "/login",
		  },
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Solicitud",
			href: "/solicitud",
		},
		{
			label: "Carta de aceptacion",
			href: "/aceptacion",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		docs: "https://nextui.org",
	},
};
