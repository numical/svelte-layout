<script>
	import Chat from './Chat.svelte';
	import Graph from './Graph.svelte';
	import Divider from './Divider.svelte';
</script>

<main>
	<Graph />
	<Chat />
</main>
<Divider />

<style>
	main {
		display: grid;
		width: 100vw;
		height: 100vh;
		grid-template-columns: 80% 20%;
		grid-template-rows: 100vh;

	}
	div {
		color: white;
		align-items: center;
		justify-content: center;
	}
</style>