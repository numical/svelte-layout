<script>
	import Chat from './Chat.svelte';
	import Divider from "./Divider.svelte";
	import Graph from './Graph.svelte';
	import Toolbar from './Toolbar.svelte';
	import { layout, updateLayout} from '../managers/layoutManager';
	import { stopDrag } from '../managers/dragManager';
</script>

<main on:mousemove={updateLayout}
	  on:touchmove={updateLayout}
	  on:mouseup={stopDrag}
	  on:touchend={stopDrag}>
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