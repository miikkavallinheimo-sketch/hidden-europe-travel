import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('Hidden Europe Team'),
    category: z.enum(['destination-guide', 'travel-tips', 'hotel-review', 'hidden-gems']),
    tags: z.array(z.string()),
    heroImage: z.string().optional(),
    featured: z.boolean().default(false),
    readingTime: z.number().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
