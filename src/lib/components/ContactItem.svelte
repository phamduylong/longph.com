<script lang="ts">
	import type { ContactItem } from '../assets/types';
	export let contact: ContactItem = { img: '', content: '', url: '' };
</script>

<span id="wrapper" class="m-1/20 w-fit text-1vw">
	<a href={contact.url} target="blank" class="inline-block w-fit text-primary-green no-underline"
		><img src={contact.img} alt="duy-long-pham" class="inline-block h-[8%] w-[8%]" />
		<p class="inline-block font-semibold lg:hover:underline">{contact.content}</p>
	</a>
</span>
