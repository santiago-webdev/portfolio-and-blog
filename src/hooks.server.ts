// import type { Handle } from '@sveltejs/kit';

// export const handle = (async ({ event, resolve }) => {
// 	const theme = event.cookies.get('theme') || 'system';
// 	const response = await resolve(event, {
// 		transformPageChunk: ({ html }) =>
// 			html.replace('data-theme=""', `data-theme="${theme}"`)
// 	});
// 	return response;
// }) satisfies Handle;

// Since this is an SSG site, not an SSR site, we have to rely on changes to the <head> of
// each route instead of using this simpler logic.

export {};
