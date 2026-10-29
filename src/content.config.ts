import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Free Resources posts: one .md file per post in src/content/resources/.
// `slug` sets the web address (/free-resources/<slug>); keep old slugs unchanged.
const resources = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/resources' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      date: z.coerce.date(),
      // Optional exact publish time; only used to order posts from the same day.
      published: z.coerce.date().optional(),
      category: z.enum(['Article', 'Newsletter', 'Video']),
      excerpt: z.string(),
      cover: image(),
    }),
});

export const collections = { resources };
