import { optional, z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const translationCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    featured: z.boolean().optional(),
    layout: z.string().optional(),
    pubDate: z.string().optional(),
    heroImage: z.string().optional()
  }),
});

export const collections = {
  'traducciones': translationCollection,
};