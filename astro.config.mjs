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
					label: 'Guías',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Guías', link: '/guides/indice' },
						{ label: 'MD', link: '/guides/markdown/introducion' },
						{ label: 'HTML', link: '/guides/html/introducion' },
					//	{ label: 'CSS', link: '/guides/css/introducion' },
						{ label: 'JS', link: '/guides/javascript/introducion' },
						{ label: 'PHP', link: '/guides/php/introducion' },	
					],
				},
				{
					label: 'CSS',
					items: [
						// Each item here is one entry in the navigation menu.						
						{ label: 'CSS', link: '/guides/css/introducion/' },
						{ label: 'Flexbox', link: '/guides/css/flexbox/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
