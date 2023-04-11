import type { PageLoad } from './$types'

export const load = (({ url }) => {
  const { pathname } = url

  return {
    pathname,
  }
}) satisfies PageLoad
