<script>
  import { fade } from 'svelte/transition';
  import { help } from '../../../help/helpManager';
  import { products } from '../../../products/productPresenter';
  import { chart, header, left } from '../../../common/svgDimensions';
  import YAxis from '../axes/YAxis.svelte';
  import ZoomProduct from './ZoomProduct.svelte';
  import ZoomXAxis from './ZoomXAxis.svelte';
  import ZoomFilter from './ZoomFilter.svelte';
  import ZoomDateLine from './ZoomDateLine.svelte';
  import ZoomTooltip from './ZoomTooltip.svelte';

  const style = `transform: translate(${left.width * 2}px,${header.height *
    2}px) scale(0.15) `;
</script>

{#if $products.showZoomWindow}
  <g
    {style}
    transition:fade
    on:click="{$products.resetZoom}"
    on:mouseover="{() => $help.setFocus('zoomWindow')}"
    on:mouseleave="{$help.loseFocus}"
  >
    <ZoomXAxis />
    <YAxis />
    {#each $products.all as product}
      {#if product.visible}
        <ZoomProduct {product} />
      {/if}
    {/each}
    <ZoomDateLine />
    <ZoomFilter />
    <ZoomTooltip />
  </g>
{/if}
