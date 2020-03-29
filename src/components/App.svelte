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
	const resize = ({ clientX }) => {
		if (state.resizing) {
			state.graphWidth = `${clientX - main.offsetLeft}px`;
			state.chatWidth = `${main.clientWidth - clientX + main.offsetLeft}px`;
		}
	};
</script>

<main on:mousemove={resize} on:mouseup={stopResize} bind:this={main}>
	<Graph width={state.graphWidth} />
	<Chat width={state.chatWidth}>
		<Divider mouseDown={startResize} />
	</Chat>
</main>

<style>
	main {
		width: 100%;
		height: 100%;
	}
</style>