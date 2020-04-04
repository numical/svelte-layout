<script>
	import Chat from './Chat.svelte';
	import Divider from "./Divider.svelte";
	import Graph from './Graph.svelte';
	import Toolbar from './Toolbar.svelte';
	import { layout } from '../stores/layoutManager';
	import { gesture } from '../stores/gestureManager';
</script>

<main on:mousedown={e => !$gesture.startSwipe(e, $layout.maximisePanel)}
	  on:touchstart={e => $gesture.startSwipe(e, $layout.maximisePanel)}
	  on:mousemove={e => $gesture.isDragging && $layout.updateLayout(e)}
	  on:touchmove={e => $gesture.isDragging && $layout.updateLayout(e)}
	  on:mouseup={$gesture.stop}
	  on:touchend={$gesture.stop}>
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