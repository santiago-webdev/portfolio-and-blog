import { Posts } from '$lib/components/search/store';
import { get } from 'svelte/store';
import type { LayoutLoad } from './$types';

export const load = (async ({ params }) => {
	const [localPost] = get(Posts).filter((obj) => {
		if (obj.href.replace('/', '') === (params.postid as string)) {
			return obj;
		}
	});

	const module = await import(`../../../../lib/posts/${params.postid}.${localPost.extension}`);
	const content = module.default;
	const title = module.metadata.title;
	const description = module.metadata.description;

	return {
		content,
		title,
		description
	};
}) satisfies LayoutLoad;
