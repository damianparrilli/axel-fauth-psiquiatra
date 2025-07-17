/** @type {import('tailwindcss').Config} */
export default {
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
			azulInicio: '#3A677C',
			azulFinal: '#5495B1',
			hoverClaro: '#dfdfdf',
			hoverHeader: '#15668C',
			problematicas: '#428BA820',
			bgBody: '#F0F5F9',
		  },
		},
	  },
	plugins: [
	  require('preline/plugin'),
	  require('taos/plugin'),
	],
	safelist: [
	  '!duration-[0ms]',
	  '!delay-[0ms]',
	  'html.js :where([class*="taos:"]:not(.taos-init))',
	],
  }
  