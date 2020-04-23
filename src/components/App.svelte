<script>
	import Graph from './graph/Graph.svelte';
	import Panel from "./panel/Panel.svelte";
	import {layout} from '../stores/layoutManager';
	import { start, move, stop } from '../gestures/gestureManager';
	import MinimisedLeft from "./panel/MinimisedLeft.svelte";
	import MinimisedRight from "./panel/MinimisedRight.svelte";

	const swipe = start.bind(null, $layout.swipe);
</script>

<main on:mousedown={swipe}
	  on:touchstart={swipe}
	  on:mousemove={move}
	  on:touchmove={move}
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