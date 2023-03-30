/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const config = {
	important: true,
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			margin: {
				'1/100': '1%',
				'1/50': '2%',
				'1/20': '5%',
				'1/10': '10%',
				'1/5': '20%',
				'1/4': '25%',
				'1/3': '33%',
				'1/2': '50%',
				'2/3': '67%',
				'3/4': '75%'
			},

			padding: {
				'1/100': '1%',
				'1/50': '2%',
				'1/20': '5%',
				'1/10': '10%',
				'1/5': '20%',
				'1/4': '25%',
				'1/3': '33%',
				'1/2': '50%',
				'2/3': '67%',
				'3/4': '75%'
			},

			fontSize: {
				'1vw': '1vw',
				'2vw': '2vw',
				'3vw': '3vw',
				'4vw': '4vw',
				'5vw': '5vw',
				'6vw': '6vw',
				'7vw': '7vw',
				'8vw': '8vw',
				'9vw': '9vw',
				'10vw': '10vw'
			}
		},
		colors: {
			'coral': '#ff7f50',
			'primary-green': '#338566'
		}
	},

	plugins: [
		require('flowbite/plugin'), 		
		plugin(function ({ addBase }) {
		addBase({
			'.absolute-center': {
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)'
			}
		})
	}),
],
	darkMode: 'class'
};

module.exports = config;
