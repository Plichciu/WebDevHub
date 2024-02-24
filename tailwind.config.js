/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		},
		screens: {
			xxs: { max: '320px' },

			sm: '640px',

			md: '768px',

			lg: '1024px', 

			xl: '1280px',

			'2xl': '1536px',
		},
		extend: {
			colors: {
				mainColor: '#030413',
				secondColor: '#0A1219',
				accentColor: '#66E5FB',
				hoverButton: '#2002a1',
			},
		},
	},
	plugins: [require('daisyui')],
}
