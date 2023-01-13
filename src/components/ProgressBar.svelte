<script>
    import { tweened } from 'svelte/motion';
    const progress = tweened(0.75);
</script>
<div><p>C++</p><progress value={$progress} ></progress></div>

<style>
</style>