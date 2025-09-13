import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    heroImage: z.string().optional(),
    readingTime: z.number().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};