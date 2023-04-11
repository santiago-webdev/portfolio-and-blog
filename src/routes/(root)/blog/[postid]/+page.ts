import { Posts } from '$lib/components/Search/store'
import { get } from 'svelte/store'
import type { PageLoad } from './$types'

export const load = (async ({ params }) => {
  const [localPost] = get(Posts).filter(obj => {
    if (obj.href.replace('/', '') === (params.postid as string)) {
      return obj
    }
  })

  const module = await import(
    `../../../../lib/posts/${params.postid}.${localPost.extension}`
  )
  const content = module.default

  return {
    content,
  }
}) satisfies PageLoad
