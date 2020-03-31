<script>
	import Chat from './Chat.svelte';
	import Divider from "./Divider.svelte";
	import Graph from './Graph.svelte';
	import Toolbar from './Toolbar.svelte';

	let state = {
		graphWidth: 100,
		chatWidth: 20,
		resizing: false,
		overlayChat: true,
		showChat: true,
		chatOpacity: 75,
		transition: 0.6
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
			state.graphWidth = state.overlayChat ? 100 : w;
			state.chatWidth = 100-w;
			state.transition = 0;
		}
	};

	const toggleOverlay = () => {
		if (state.overlayChat) {
			state.overlayChat = false;
			state.chatOpacity = 100;
			state.graphWidth = 100 - state.chatWidth;
		} else {
			state.overlayChat = true;
			state.chatOpacity = 75;
			state.graphWidth = 100;
		}
		state.transition = 0.6;
	}
</script>

<main on:mousemove={resize} on:touchmove={resize} on:mouseup={stopResize} on:touchend={stopResize} bind:this={main}>
	<Graph width={`${state.graphWidth}%`} transition="{state.transition}"/>
	{#if state.showChat}
		<Chat width={`${state.chatWidth}%`} opacity={`${state.chatOpacity}%`}>
			<div slot="toolbar">
				<Toolbar toggleOverlay={toggleOverlay} overlayChat={state.overlayChat} />
			</div>
			<div slot="divider">
				<Divider startResize={startResize} />
			</div>
		</Chat>
	{/if}
</main>

<style>
	main {
		width: 100%;
		height: 100%;
	}
</style>