import { base } from '$app/paths';
import { get, readable, writable } from 'svelte/store';

interface Metadata {
  metadata: {
    href: string;
    title: string;
    description: string;
    datetime?: string;
    tags?: string[];
    summary?: string;
  };
}

class Post {
  href: string;
  title: string;
  description: string;
  datetime?: string;
  tags?: string[];
  summary?: string;

  constructor(
    href: string,
    title: string,
    description: string,
    datetime?: string,
    tags?: Array<string>,
    summary?: string
  ) {
    this.href = href;
    this.title = title;
    this.description = description;
    this.datetime = datetime;
    this.tags = tags;
    this.summary = summary;
  }
}

const retrievePosts = () => {
  const tmpPosts: Array<Post> = [];

  const modules = import.meta.glob('../../posts/*.md', { eager: true });

  for (const path in modules) {
    const postData = modules[path] as Metadata;
    const href = path.replace('../../posts', '').replace('.md', '');
    const post: Metadata = postData as unknown as Metadata;
    tmpPosts.unshift(
      new Post(
        `${base}/blog${href}`,
        post.metadata.title,
        post.metadata.description,
        post.metadata.datetime,
        post.metadata.tags,
        post.metadata.summary
      )
    );
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
    const dateA = a.datetime ? Date.parse(a.datetime) : NaN;
    const dateB = b.datetime ? Date.parse(b.datetime) : NaN;
    if (isNaN(dateA) && isNaN(dateB)) {
      return 0;
    }
    if (isNaN(dateA)) {
      return -1;
    }
    if (isNaN(dateB)) {
      return 1;
    }
    return dateB - dateA;
  });

  return tmpPosts;
};

export const Posts = readable<Array<Post>>(retrievePosts());

export const FilteredPosts = writable<Array<Post>>(get(Posts));

export const searchHandler = (filterPosts: string) => {
  const filtered = get(Posts).filter((post) => {
    const searchTerms =
      `${post.description} ${post.title} ${post.summary}`.toLowerCase();
    return searchTerms.toLowerCase().includes(filterPosts.toLowerCase());
  });
  FilteredPosts.set(filtered);
  return filterPosts;
};
