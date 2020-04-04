<script>
	import Chat from './Chat.svelte';
	import Divider from "./Divider.svelte";
	import Graph from './Graph.svelte';
	import Toolbar from './Toolbar.svelte';
	import { layout,
			 stopResize,
			 resize} from '../managers/layoutManager';

	let main;
	const resized = event => resize(main, event);

</script>

<main on:mousemove={resized} on:touchmove={resized} on:mouseup={stopResize} on:touchend={stopResize} bind:this={main}>
	<Graph />
	{#if $layout.showChat}
		<Chat>
			<div slot="toolbar">
				<Toolbar />
			</div>
			<div slot="divider">
				<Divider />
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