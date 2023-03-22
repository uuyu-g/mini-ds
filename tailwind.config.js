import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{html,js,tsx,mdx}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			gray: colors.gray,
			slate: colors.slate,
			sky: colors.sky,
		},
		extend: {},
	},
	plugins: [],
};
