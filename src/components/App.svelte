<script>
	import Chat from './Chat.svelte';
	import Divider from "./Divider.svelte";
	import Graph from './Graph.svelte';

	let state = {
		graphWidth: '80%',
		chatWidth: '20%',
		resizing: false
	};
	let main;

	const startResize = () => {
		state.resizing = true;
	};
	const stopResize = () => {
		state.resizing = false;
	};
	const resize = event => {
		if (state.resizing) {
			const x = event.clientX || event.touches[0].screenX;
			console.log(x);
			state.graphWidth = `${x - main.offsetLeft}px`;
			state.chatWidth = `${main.clientWidth - x + main.offsetLeft}px`;
		}
	};
</script>

<main on:mousemove={resize} on:touchmove={resize} on:mouseup={stopResize} on:touchend={stopResize} bind:this={main}>
	<Graph width={state.graphWidth} />
	<Chat width={state.chatWidth}>
		<Divider startResize={startResize} />
	</Chat>
</main>

<style>
	main {
		width: 100%;
		height: 100%;
	}
</style>