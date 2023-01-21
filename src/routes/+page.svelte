<script>
	export let data;
	console.log(data.server_data);
    import SideTab from "../lib/SideTab.svelte";
    import MainPage from "../lib/MainPage.svelte";
</script>
<SideTab />
<MainPage />

<style global>
    ::-webkit-scrollbar {
		width: 12px;
	}

	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
		border-radius: 10px;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.7);
	}

	::-webkit-scrollbar-thumb:hover {
		background: rgba(0, 0, 0, 0.1);
	}
</style>