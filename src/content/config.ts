import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date().optional().default(() => new Date()),
    tags: z.array(z.string()).optional().default(['note']),
  }),
});

export const collections = { posts };
