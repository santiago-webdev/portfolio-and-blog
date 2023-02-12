import { FilteredPosts, Posts } from './store';
import { get } from 'svelte/store';

export const searchHandler = async (filterPosts: string) => {
  const filtered = get(Posts).filter(post => {
    const searchTerms = `${post.description} ${post.title}`.toLowerCase();
    return searchTerms.toLowerCase().includes(filterPosts.toLowerCase());
  });
  FilteredPosts.set(filtered);
};
