import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'resources'>;

// Newest first.
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('resources');
  const time = (p: Post) => (p.data.published ?? p.data.date).getTime();
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || time(b) - time(a));
}

export const postUrl = (p: Post) => `/free-resources/${p.id}`;

// Dates are stored as plain days, so format in UTC to avoid shifting a day.
export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
