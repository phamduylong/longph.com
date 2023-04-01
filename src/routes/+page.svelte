<script lang="ts">
	import SideTab from '../lib/components/SideTab.svelte';
	import MainPage from '../lib/components/MainPage.svelte';
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
