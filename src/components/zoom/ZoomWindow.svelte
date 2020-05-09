<script>
  import { fade } from 'svelte/transition';
  import { chart, header, left } from '../../common/svgDimensions';
  import YAxis from '../graph/YAxis.svelte';
  import { products } from '../../products/productPresenter';
  import ZoomProduct from './ZoomProduct.svelte';
  import ZoomXAxis from './ZoomXAxis.svelte';
  import ZoomFilter from './ZoomFilter.svelte';

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
  <g {style} transition:fade>
    <ZoomXAxis />
    <YAxis />
    {#each $products.all as product}
      {#if product.visible}
        <ZoomProduct {product} />
      {/if}
    {/each}
    <ZoomFilter />
  </g>
{/if}

<style>
  rect {
    fill: white;
    stroke: black;
    stroke-width: 2;
  }
</style>
