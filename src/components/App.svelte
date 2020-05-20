<script>
  import Graph from './graph/Graph.svelte';
  import Panel from './panel/Panel.svelte';
  import { products } from '../products/productPresenter';
  import { move, stop, wheel, WHEEL } from '../gestures/gestureManager';
  import MinimisedLeft from './panel/MinimisedLeft.svelte';
  import MinimisedRight from './panel/MinimisedRight.svelte';
  import GestureDisplay from '../gestures/DisplayGesture.svelte';

  const pinch = wheel.bind(null, { [WHEEL]: $products.pinch });

</script>

<main
  on:mousemove="{move}"
  on:touchmove="{move}"
  on:mouseup="{stop}"
  on:touchend="{stop}"
  on:wheel={pinch}
>
  <GestureDisplay />
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
