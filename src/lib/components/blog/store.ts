import { base } from '$app/paths';
import { get, readable, writable } from 'svelte/store';

interface Metadata {
	metadata: {
		title: string;
		description: string;
		datetime: string;
		href: string;
	};
}

class Post {
	title: string;
	description: string;
	datetime: string;
	href: string;

	constructor(href: string, title: string, description: string, datetime: string) {
		this.href = href;
		this.title = title;
		this.description = description;
		this.datetime = datetime;
	}
}

const retrievePosts = () => {
	const tmpPosts: Array<Post> = [];

	const modules = import.meta.glob('../../posts/*.md', { eager: true });

	for (const path in modules) {
		const postData = modules[path] as Metadata;
		const href = path.replace('../../posts', '').replace('.md', '');
		const post: Metadata = postData as unknown as Metadata;
		tmpPosts.unshift(
			new Post(
				`${base}/blog${href}`,
				post.metadata.title,
				post.metadata.description,
				post.metadata.datetime
			)
		);
	}

	tmpPosts.sort((a, b) => {
		if (!a.datetime && !b.datetime) {
			return 0;
		}
		if (a.datetime && !b.datetime) {
			return -1;
		}
		if (!a.datetime && b.datetime) {
			return 1;
		}
		const dateA = Date.parse(a.datetime);
		const dateB = Date.parse(b.datetime);
		return dateB - dateA; // Compare dateB with dateA instead of dateA with dateB
	});

	return tmpPosts;
};

export const Posts = readable<Array<Post>>(retrievePosts());

export const FilteredPosts = writable<Array<Post>>(get(Posts));

export const searchHandler = (filterPosts: string) => {
	const filtered = get(Posts).filter((post) => {
		const searchTerms = `${post.description} ${post.title}`.toLowerCase();
		return searchTerms.toLowerCase().includes(filterPosts.toLowerCase());
	});
	FilteredPosts.set(filtered);
	return filterPosts;
};
