import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'MegaBoot',
			defaultLocale: 'root', // optional
			locales: {
				root: {
					label: 'Galego',
					lang: 'gl', // lang is required for root locales
				},
			},
			social: {
				github: 'https://github.com/nunhes',
			},
			sidebar: [
				{
					label: 'Guías',
					collapsed: true,
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Referenzas',
					collapsed: true,
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Unidades',
					collapsed: true,
					autogenerate: { directory: 'unidades' },
				},
				{
					label: 'Exemplos',
					collapsed: true,
					autogenerate: { directory: 'exemplos' },
				},
			],
		}),
	],
	markdown: {
		rehypePlugins: [rehypeHeadingIds, rehypeAutolinkHeadings, rehypeAccessibleEmojis],
	},
});
