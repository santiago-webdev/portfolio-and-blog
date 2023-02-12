import { Post } from '$lib/utils/utils'
import { get, writable } from 'svelte/store'

const getPosts = () => {
	const tmpPost: Array<Post> = []

	const modules = import.meta.glob(
		['../../posts/*.svelte', '../../posts/*.md'],
		{
			eager: true
		}
	)

	function isMarkdown(path: string) {
		const regex = '^.*.md$'
		const newStr = path
		const replaced = newStr.search(regex) >= 0
		return (replaced && 'md') || 'svelte'
	}

	for (const path in modules) {
		const postData: Post = modules[path] as Post
		const extension = isMarkdown(path)
		const href = path
			.replace('../../posts', '')
			.replace('.svelte', '')
			.replace('.md', '')

		if (postData.metadata === undefined) {
			tmpPost.unshift(
				new Post(
					href,
					postData.title,
					postData.description,
					postData.date,
					extension
				)
			)
		} else {
			const postMD: Post = postData.metadata as unknown as Post
			tmpPost.unshift(
				new Post(href, postMD.title, postMD.description, postMD.date, extension)
			)
		}
	}

	return tmpPost
}

export const Posts = writable<Array<Post>>(getPosts())

export const FilteredPosts = writable<Array<Post>>(get(Posts))

export const searchHandler = (async (filterPosts: string) => {
	const filtered = get(Posts).filter(post => {
		let searchTerms = `${post.description} ${post.title}`.toLowerCase()
		return searchTerms.toLowerCase().includes(filterPosts.toLowerCase())
	})
	FilteredPosts.set(filtered)
})
