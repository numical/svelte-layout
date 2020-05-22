<script>
  import DateLine from './DateLine.svelte';
  import XAxis from './axes/XAxis.svelte';
  import Product from './Product.svelte';
  import YAxis from './axes/YAxis.svelte';
  import XGridLines from './axes/XGridLines.svelte';
  import YGridLines from './axes/YGridLines.svelte';
  import ZoomWindow from './zoom/ZoomWindow.svelte';
  import {
    chart,
    header,
    footer,
    left,
    right,
  } from '../../common/svgDimensions';
  import { start, PINCH, SWIPE } from '../../gestures/gestureManager';
  import { graph } from '../graphManager';
  import { layout } from '../../layout/layoutManager';
  import { products } from '../../products/productPresenter';

  const viewBox = `0 0 ${left.width +
    chart.width +
    right.width} ${header.height + chart.height + footer.height}`;

  const pinch = start.bind(null, {
    [PINCH]: $products.pinch,
    [SWIPE]: $products.scroll,
  });

  $: style = `
        ${$layout.restorePanelPosition.graphPos}: 0;
        width:${$layout.graphWidth}%;
        transition: width ${$layout.transition}s;
     `;
</script>

<svg
  id="svg"
  {style}
  width="100%"
  height="100%"
  {viewBox}
  preserveAspectRatio="none"
  on:touchstart="{pinch}"
>
  <YAxis />
  <YGridLines />
  <XAxis />
  <XGridLines />
  {#each $products.visible as product (product.id)}
    <Product {product} />
  {/each}
  <DateLine />
  <ZoomWindow />
</svg>

<style>
  svg {
    position: absolute;
    top: 0;
    bottom: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    touch-action: none;
  }
</style>
