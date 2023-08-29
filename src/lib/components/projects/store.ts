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
  case_study: string;
  stack: Stack;
  img?: string;
}

export const AllProjects = readable<Array<Project>>([
  {
    name: 'Zap zsh',
    description:
      "I helped creating the landing page for Zap, an open-source plugin manager for zsh. It's one of my first steps into the web dev world.",
    short_description:
      'One of my first steps into the web dev world, I helped creating the landing page',
    category: ['featured', 'webprojects', 'opensource'],
    stack: {
      frontend: ['JavaScript', 'HTML', 'CSS'],
      api: ['GitHub REST API']
    },
    img: '/portfolio/zap-website.webp',
    repo: new URL('https://github.com/zap-zsh/zapzsh.org/'),
    link: new URL('https://www.zapzsh.org/'),
    case_study: 'hello-world'
  },
  {
    name: 'Personal site',
    description: 'This is my personal blog and portfolio, check the case study below',
    short_description: 'This same site, here you can find more about me',
    category: ['featured', 'webprojects', 'opensource'],
    stack: {
      frontend: ['SvelteKit', 'TypeScript', 'CSS']
    },
    img: '/portfolio/portfolio-and-blog-website.webp',
    repo: new URL('https://github.com/santiagogonzalez-dev/portfolio-and-blog'),
    link: new URL('https://santiagogonzalez.dev'),
    case_study: 'hello-world'
  }
]);

export const FilteredProjects = writable(get(AllProjects));

export type Category = 'featured' | 'webprojects' | 'opensource' | 'redesign_rewrite';

type Categories = Record<Category, [label: string, description: string]>;

export const jobSelector: Categories = {
  featured: ['Featured', `A selection of the most relevant projects I have for you to explore`],
  webprojects: ['Web', `This are some of the most 'complete' projects I have to date`],
  opensource: [
    'Open Source',
    `As a Linux enthusiast, I'm a firm believer in FOSS, check
      out the projects I'm being part of`
  ],
  redesign_rewrite: [
    'Redesign',
    `Rewriting a site to test my capabilities is fun, I don't have any project at the time though :P`
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
