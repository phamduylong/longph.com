<script lang="ts">
	import type { ContactItem } from './assets/types';
	export let contact: ContactItem = { img: '', content: '', url: '' };
</script>

<span id="wrapper">
	<a href={contact.url} target="blank" class="inline-block w-fit text-primary-green"
		><img src={contact.img} alt="duy-long-pham" />
		<p class="inline-block font-semibold lg:hover:underline">{contact.content}</p>
	</a>
</span>

<style>
	#wrapper {
		margin: 5%;
		width: fit-content;
		font-size: 1vw;
	}

	img {
		height: 8%;
		width: 8%;
		display: inline-block;
	}

	a {
		text-decoration: none !important;
	}
</style>
