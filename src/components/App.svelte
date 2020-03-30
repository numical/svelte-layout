<script>
	import Chat from './Chat.svelte';
	import Divider from "./Divider.svelte";
	import Graph from './Graph.svelte';
	import Toolbar from './Toolbar.svelte';

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
			const x = event.clientX || event.touches[0].clientX;
			const w = Math.floor(100 * x / main.clientWidth);
			state.graphWidth = `${w}%`;
			state.chatWidth = `${100-w}%`;
		}
	};

	const togglePin = () => {
		console.log('Pin toggled.');
	}
</script>

<main on:mousemove={resize} on:touchmove={resize} on:mouseup={stopResize} on:touchend={stopResize} bind:this={main}>
	<Graph width={state.graphWidth} />
	<Chat width={state.chatWidth}>
		<div slot="toolbar">
			<Toolbar togglePin={togglePin} />
		</div>
		<div slot="divider">
			<Divider startResize={startResize} />
		</div>
	</Chat>
</main>

<style>
	main {
		width: 100%;
		height: 100%;
	}
</style>;