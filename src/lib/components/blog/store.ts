import { base } from '$app/paths';
import { get, readable, writable } from 'svelte/store';

export class Post {
	title: string;
	description: string;
	datetime: string;
	href: string;
	metadata?: Array<Post>;

	constructor(
		href: string,
		title: string,
		description: string,
		datetime: string,
		metadata?: Array<Post>
	) {
		this.href = href;
		this.title = title;
		this.description = description;
		this.datetime = datetime;
		this.metadata = metadata;
	}
}

const retrievePosts = () => {
	const tmpPosts: Array<Post> = [];

	const modules = import.meta.glob('../../posts/*.md', { eager: true });

	for (const path in modules) {
		const postData: Post = modules[path] as Post;
		const href = path.replace('../../posts', '').replace('.md', '');
		const post: Post = postData.metadata as unknown as Post;
		tmpPosts.unshift(new Post(`${base}/blog${href}`, post.title, post.description, post.datetime));
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
