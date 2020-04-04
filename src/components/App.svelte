<script>
	import Chat from './Chat.svelte';
	import Divider from "./Divider.svelte";
	import Graph from './Graph.svelte';
	import Toolbar from './Toolbar.svelte';
	import { layout } from '../managers/layoutManager';
	import { gesture } from '../managers/gestureManager';
</script>

<main on:mousemove={e => $gesture.isDragging && $layout.updateLayout(e)}
	  on:touchmove={e => $gesture.isDragging && $layout.updateLayout(e)}
	  on:mouseup={$gesture.stopDrag}
	  on:touchend={$gesture.stopDrag}>
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