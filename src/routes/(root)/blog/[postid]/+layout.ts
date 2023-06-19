import type { LayoutLoad } from './$types';

export const load = (async ({ params }) => {
  const module = await import(`../../../../lib/posts/${params.postid}.md`);

  const content = module.default;
  const title = module.metadata.title;
  const description = module.metadata.description;

  return {
    content,
    title,
    description
  };
}) satisfies LayoutLoad;
