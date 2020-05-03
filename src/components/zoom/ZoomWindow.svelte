<script>
  import { fade } from 'svelte/transition';
  import { chart, header, left } from '../../common/svgDimensions';
  import YAxis from '../graph/YAxis.svelte';
  import { products } from '../../products/productPresenter';
  import ZoomProduct from './ZoomProduct.svelte';
  import ZoomXAxis from './ZoomXAxis.svelte';
  import ZoomFilterLeft from './ZoomFilterLeft.svelte';
  import ZoomFilterRight from './ZoomFilterRight.svelte';

  const rectProps = {
    x: 0,
    y: 0,
    width: chart.width,
    height: chart.height,
  };
  const style = `transform: translate(${left.width * 2}px,${header.height *
  2}px) scale(0.15) `;

</script>

{#if $products.showZoomWindow}
  <g {style} transition:fade="{{ duration: 600 }}">
    <ZoomXAxis />
    <YAxis />
    {#each $products.all as product}
      <ZoomProduct {product} />
    {/each}
    <ZoomFilterLeft />
    <ZoomFilterRight />
  </g>
{/if}

<style>
  rect {
    fill: white;
    stroke: black;
    stroke-width: 2;
  }
</style>
