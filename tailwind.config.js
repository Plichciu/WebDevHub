/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		},
		extend: {
			colors: {
				mainColor: '#000114',
				secondColor: '#0C161F',
				yellowColor: '#FFCA0F',
			},
		},
	},
	plugins: [require('daisyui')],
}
