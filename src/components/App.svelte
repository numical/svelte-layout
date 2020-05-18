<script>
  import Graph from './graph/Graph.svelte';
  import Panel from './panel/Panel.svelte';
  import { layout } from '../stores/layoutManager';
  import { products } from '../products/productPresenter';
  import { start, move, stop, wheel, PINCH, SWIPE, WHEEL } from '../gestures/gestureManager';
  import MinimisedLeft from './panel/MinimisedLeft.svelte';
  import MinimisedRight from './panel/MinimisedRight.svelte';
  import GestureDisplay from './debug/GestureDisplay.svelte';


  const pinch = wheel.bind(null, { [WHEEL]: $products.pinch });

  const debugGestures = false;

</script>

<main
  on:mousemove="{move}"
  on:touchmove="{move}"
  on:mouseup="{stop}"
  on:touchend="{stop}"
  on:wheel={pinch}
>
  {#if debugGestures}
    <GestureDisplay />
  {/if}
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
