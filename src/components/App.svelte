<script>
	import Chat from './chat/Chat.svelte';
	import Divider from "./layout/Divider.svelte";
	import Graph from './graph/Graph.svelte';
	import Toolbar from './toolbar/Toolbar.svelte';
	import {layout} from '../stores/layoutManager';
	import {gesture} from '../stores/gestureManager';
	import MinimisedLeft from "./layout/MinimisedLeft.svelte";
	import MinimisedRight from "./layout/MinimisedRight.svelte";
</script>

<main on:mousedown={e => !$gesture.startSwipe(e, $layout.swipe)}
	  on:touchstart={e => $gesture.startSwipe(e, $layout.swipe)}
	  on:mousemove={e => $gesture.isDragging && $layout.drag(e)}
	  on:touchmove={e => $gesture.isDragging && $layout.drag(e)}
	  on:mouseup={$gesture.stop}
	  on:touchend={$gesture.stop}>
	<MinimisedLeft />
	<Graph />
	<Chat>
		<div slot="toolbar">
			<Toolbar />
		</div>
		<div slot="divider">
			<Divider />
		</div>
	</Chat>
	<MinimisedRight />
</main>

<style>
	main {
		width: 100%;
		height: 100%;
	}
</style>