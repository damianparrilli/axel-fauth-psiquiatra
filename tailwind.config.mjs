/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: {
	  files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/preline/dist/*.js'],
	  relative: true,
	  transform: (content) => content.replace(/taos:/g, ''),
	},
	theme: {
		extend: {
		  colors: {
			claro: '#FDFDFD',
			oscuro: '#121212',
			hoverClaro: '#dfdfdf',
			hoverHeader: '#15668C',
			problematicas: '#428BA820',
			bgBody: '#F0F5F9',
			bgBodyDark: '#233442',
			hoverHeaderDark: '#6BCCF9',
			botonDark: '#2586B3',
			acento: '#2586B3',
		  },
		},
	  },
	plugins: [
	  require('taos/plugin'),
	],
	safelist: [
	  '!duration-[0ms]',
	  '!delay-[0ms]',
	  'html.js :where([class*="taos:"]:not(.taos-init))',
	],
  }
  