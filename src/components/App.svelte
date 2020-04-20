<script>
	import Graph from './graph/Graph.svelte';
	import Panel from "./panel/Panel.svelte";
	import MinimisedLeft from "./panel/MinimisedLeft.svelte";
	import MinimisedRight from "./panel/MinimisedRight.svelte";
	import {layout} from '../stores/layoutManager';
	import {gesture} from '../stores/gestureManager';
</script>

<main on:mousedown={e => !$gesture.startSwipe(e, $layout.swipe)}
	  on:touchstart={e => $gesture.startSwipe(e, $layout.swipe)}
	  on:mousemove={e => $gesture.dragBehaviour(e)}
	  on:touchmove={e => $gesture.dragBehaviour(e)}
	  on:mouseup={$gesture.stop}
	  on:touchend={$gesture.stop}>
	<MinimisedLeft />
	<Graph />
	<Panel />
	<MinimisedRight />
</main>

<style>
	main {
		width: 100%;
		height: 100%;
	}
</style>