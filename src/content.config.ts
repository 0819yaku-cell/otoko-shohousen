import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.string().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  affiliateNote: z.string().optional(),
  slug: z.string().optional(),
  image: z.string().optional(),
  faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
});

const aga = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/aga' }),
  schema: articleSchema,
});

const ed = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ed' }),
  schema: articleSchema,
});

const mensHealth = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/mens-health' }),
  schema: articleSchema,
});

export const collections = { aga, ed, 'mens-health': mensHealth };
