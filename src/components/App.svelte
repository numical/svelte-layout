<script>
	import Chat from './chat/Chat.svelte';
	import Divider from "./divider/Divider.svelte";
	import Graph from './graph/Graph.svelte';
	import Toolbar from './toolbar/Toolbar.svelte';
	import { layout } from '../stores/layoutManager';
	import { gesture } from '../stores/gestureManager';
</script>

<main on:mousedown={e => !$gesture.startSwipe(e, $layout.swipe)}
	  on:touchstart={e => $gesture.startSwipe(e, $layout.swipe)}
	  on:mousemove={e => $gesture.isDragging && $layout.drag(e)}
	  on:touchmove={e => $gesture.isDragging && $layout.drag(e)}
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