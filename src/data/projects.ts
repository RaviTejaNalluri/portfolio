// Add, remove, or edit projects here. They appear on /projects and the home page.

export type Project = {
	title: string;
	description: string;
	tags: string[];
	link?: string; // live demo
	repo?: string; // source code
	featured?: boolean; // show on home page
};

export const projects: Project[] = [
	{
		title: 'This Website',
		description: 'My personal portfolio and blog, built with Astro and hosted for free on Cloudflare Pages.',
		tags: ['Astro', 'Markdown', 'Cloudflare'],
		repo: '',
		featured: true,
	},
	{
		title: 'Project Two',
		description: 'A short description of what it does, the problem it solves, and what you learned.',
		tags: ['TypeScript', 'React'],
		link: '',
		repo: '',
		featured: true,
	},
	{
		title: 'Project Three',
		description: 'Another project. Replace this with something you are proud of.',
		tags: ['Python'],
		repo: '',
	},
];
