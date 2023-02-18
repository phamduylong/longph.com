<script>
	import SideTab from '../lib/SideTab.svelte';
	import MainPage from '../lib/MainPage.svelte';
	import SvelteSeo from 'svelte-seo';
	import 'agnostic-svelte/css/common.min.css';
</script>

<SvelteSeo
	openGraph={{
		title: 'Long Pham | Personal Page',
		description: "Long Pham's Personal Page",
		type: 'website',
		url: 'https://longph.com'
	}}
/>
<SideTab />
<MainPage />

<style global>
	::-webkit-scrollbar {
		width: 6px;
	}

	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 3px rgba(240, 240, 240, 0.8);
		border-radius: 5px;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 5px;
		-webkit-box-shadow: inset 0 0 3px rgba(136, 96, 96, 0.6);
	}

	::-webkit-scrollbar-thumb:hover {
		background: rgba(136, 96, 96, 0.8);
	}

	@media screen and (min-width: 960px) {
		::-webkit-scrollbar {
			width: 12px;
		}

		::-webkit-scrollbar-track {
			-webkit-box-shadow: inset 0 0 6px rgba(240, 240, 240, 0.8);
			border-radius: 10px;
		}

		::-webkit-scrollbar-thumb {
			border-radius: 10px;
			-webkit-box-shadow: inset 0 0 6px rgba(136, 96, 96, 0.6);
		}

		::-webkit-scrollbar-thumb:hover {
			background: rgba(136, 96, 96, 0.8);
		}
	}

	a:focus,
	input:focus,
	textarea:focus {
		box-shadow: none !important;
	}
</style>
