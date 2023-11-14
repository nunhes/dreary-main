import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
					label: 'MD',
					collapsed: true,
					items: [
						// Each item here is one entry in the navigation menu.						
						{ label: 'Markdown', link: '/guides/markdown/introducion' },
						{ label: 'Folla de atallos', link: '/guides/markdown/markdown-cheat-sheet' },
					],
				},
				{
					label: 'HTML',
					collapsed: true,
					items: [
						// Each item here is one entry in the navigation menu.						
						{ label: 'HTML', link: '/guides/html/introducion' },
						{ label: 'Hipertexto', link: '/guides/html/html' },
					],
				},
				{
					label: 'CSS',
					collapsed: true,
					items: [
						// Each item here is one entry in the navigation menu.						
						{ label: 'CSS', link: '/guides/css/introducion/' },
						{ label: 'Flexbox', link: '/guides/css/flexbox/' },
					],
				},
				{
					label: 'JS',
					collapsed: true,
					items: [
						// Each item here is one entry in the navigation menu.						
						{ label: 'Javascript', link: '/guides/javascript/introducion' },
					],
				},
				{
					label: 'PHP',
					collapsed: true,
					items: [
						// Each item here is one entry in the navigation menu.						
						{ label: 'PHP', link: '/guides/php/introducion' },
					],
				},
				{
					label: 'Python',
					collapsed: true,
					items: [
						// Each item here is one entry in the navigation menu.						
						{ label: 'Python', link: '/guides/python/introducion' },
					],
				},
				{
					label: 'Referenzas',
					collapsed: true,
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
