import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	const currentTheme = event.cookies.get('theme');
	const response = await resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('data-theme=""', `data-theme="${currentTheme}"`)
	});
	return response;
}) satisfies Handle;
