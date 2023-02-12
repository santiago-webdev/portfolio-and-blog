import { FilteredPosts, FilterValue, Posts } from './store';
import { get } from 'svelte/store';

export const searchHandler = (filterPosts: string) => {
  // FilterValue.set(filterPosts)
  const filtered = get(Posts).filter(post => {
    const searchTerms = `${post.description} ${post.title}`.toLowerCase();
    return searchTerms.toLowerCase().includes(filterPosts.toLowerCase());
  });
  FilteredPosts.set(filtered);
  return filterPosts;
};
