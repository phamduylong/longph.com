const config = {
	content: [
	  "./src/**/*.{html,js,svelte,ts}",
	  "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	],
  
	theme: {
	  extend: {
		margin: {
			"1/10": "10%",
			"1/5": "20%",
			"1/4": "25%",
			"1/3": "33%",
			"1/2": "50%",
			"2/3": "67%",
			"3/4": "75%",
		},

		padding: {
			"1/100": "1%"
		}
	  },
	  colors: {
		'coral': "rgb(255, 127, 80)",
		'primary-green': "#338566"
	  }
	},
  
	plugins: [
	  require('flowbite/plugin')
	],
	darkMode: 'class',
  };
  
  module.exports = config;