<script>
	import Graph from './graph/Graph.svelte';
	import Panel from "./panel/Panel.svelte";
	import {layout} from '../stores/layoutManager';
	import { startSwipe, drag, stop } from '../gestures/gestureManager';
	import MinimisedLeft from "./panel/MinimisedLeft.svelte";
	import MinimisedRight from "./panel/MinimisedRight.svelte";

	const swipe = startSwipe.bind(null, $layout.swipe);
</script>

<main on:mousedown={swipe}
	  on:touchstart={swipe}
	  on:mousemove={drag}
	  on:touchmove={drag}
	  on:mouseup={stop}
	  on:touchend={stop}>
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