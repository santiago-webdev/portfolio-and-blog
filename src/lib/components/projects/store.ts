import { get, readable, writable } from 'svelte/store';

type Stack = {
	frontend?: string[];
	api?: string[];
	backend?: string[];
};

interface Project {
	name: string;
	description: string;
	short_description?: string;
	category: Category[];
	repo: URL;
	link: URL;
	stack: Stack;
	img?: string;
	accent?: string;
}

export const AllProjects = readable<Array<Project>>([
	{
		name: 'Website for zap',
		description:
			"I helped creating the landing page for Zap, an open-source plugin manager for zsh. It's one of my first steps into the web dev world.",
		short_description:
			'One of my first steps into the web dev world, I helped creating the landing page',
		category: ['featured', 'frontend', 'opensource'],
		stack: {
			frontend: ['JavaScript', 'HTML', 'CSS'],
			backend: ['JavaScript', 'HTML', 'CSS'],
			api: ['GitHub REST API']
		},
		img: '/portfolio/zap-website.webp',
		repo: new URL('https://github.com/zap-zsh/zapzsh.org/'),
		link: new URL('https://www.zapzsh.org/'),
		accent: '--clr-orange-50'
	},
	{
		name: 'Personal Portfolio and Blog',
		description: 'This is my personal blog and portfolio, check the case study below',
		category: ['featured', 'frontend', 'opensource'],
		stack: {
			frontend: ['SvelteKit', 'TypeScript']
		},
		img: '/portfolio/portfolio-and-blog-website.webp',
		repo: new URL('https://github.com/santigo-zero/portfolio-and-blog'),
		link: new URL('https://www.santiagogonzalez.dev')
	},
	{
		name: 'example of fullstack',
		description:
			'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
		stack: {},
		category: ['fullstack'],
		repo: new URL('https://google.com'),
		link: new URL('https://google.com')
	},
	{
		name: 'example of opensource',
		description:
			'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
		stack: {},
		category: ['opensource'],
		repo: new URL('https://google.com'),
		link: new URL('https://google.com')
	},
	{
		name: 'example of redesign/rewrite',
		description:
			'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
		stack: {},
		category: ['redesign_rewrite'],
		repo: new URL('https://google.com'),
		link: new URL('https://google.com')
	}
]);

export const FilteredProjects = writable(get(AllProjects));

export type Category = 'featured' | 'frontend' | 'fullstack' | 'opensource' | 'redesign_rewrite';

type Categories = Record<Category, [label: string, description: string]>;

export const jobSelector: Categories = {
	featured: [
		'Featured',
		`Here's a selection of the most relevant projects I have for you to explore`
	],
	frontend: [
		'Front End',
		`In here you'll find rewrites with a focus on making the UI/UX of this
pages accesible to everyone`
	],
	fullstack: ['Full Stack', `This are some of the most 'complete' projects I have to date`],
	opensource: [
		'Open Source',
		`As a Linux enthusiast, I'm a firm believer in FOSS, check
      out the projects I'm being part of`
	],
	redesign_rewrite: [
		'Redesign or Rewrite',
		`Rewriting a site to test my
capabilities is fun, sometimes I do a complete revamp of the site`
	]
};

export const getCategoryInfo = (category: Category) => ({
	label: jobSelector[category][0],
	description: jobSelector[category][1]
});

export const currentGroupOfProjects = writable<Category>('featured');

currentGroupOfProjects.subscribe((selectionChange) => {
	FilteredProjects.update(() =>
		get(AllProjects).filter((currentProject) => currentProject.category.includes(selectionChange))
	);
});
