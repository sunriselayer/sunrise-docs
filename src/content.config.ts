import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Starlight has no site-wide banner option and only reads `banner` from page
// frontmatter, so default it here to show the shutdown notice on every page.
const SITE_BANNER = {
	content:
		'Cosmos Sunrise shuts down on 5 October 2026 at 12:00 UTC (v2.0.0, block 6,504,000). Holdings move to Sunrise Edge. You do not need to move funds before shutdown. <a href="https://sunriselayer.io/">Details</a>',
};

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				banner: z.object({ content: z.string() }).default(SITE_BANNER),
			}),
		}),
	}),
};
