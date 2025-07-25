import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';


import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';


// https://astro.build/config
export default defineConfig({
	output: 'static',
	adapter: vercel({ target: 'static' }),
	integrations: [
		starlight({
			title: 'MegaBoot',
			customCss: [
				//  Path to your Tailwind base styles:
				'./src/styles/global.css',
			],
			defaultLocale: 'root', // optional
			locales: {
				root: {
					label: 'Galego',
					lang: 'gl', // lang is required for root locales
				},
			},
			social: [
				{ label: 'GitHub', icon: 'github', href: 'https://github.com/nunhes' },
			],
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
	vite: { plugins: [tailwindcss()] },
	markdown: {
		rehypePlugins: [rehypeHeadingIds, rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'append' }], rehypeAccessibleEmojis],
	},
});
