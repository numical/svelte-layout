<script>
  import DateLine from './DateLine.svelte';
  import Product from './Product.svelte';
  import XAxis from './XAxis.svelte';
  import YAxis from './YAxis.svelte';
  import XGridLines from './XGridLines.svelte';
  import YGridLines from './YGridLines.svelte';
  import {
    chart,
    header,
    footer,
    left,
    right,
  } from '../../common/svgDimensions';
  import { calculateScale } from './calculateScale';
  import { start, PINCH, SWIPE } from '../../gestures/gestureManager';
  import { graph } from '../../stores/graphManager';
  import { layout } from '../../stores/layoutManager';
  import { products } from '../../stores/productPresenter';

  const viewBox = `0 0 ${left.width +
    chart.width +
    right.width} ${header.height + chart.height + footer.height}`;

  const pinch = start.bind(null, {
    [PINCH]: $products.pinch,
    [SWIPE]: $layout.swipe
  });

  $: style = `
        ${$layout.restorePanelPosition.graphPos}: 0;
        width:${$layout.graphWidth}%;
        transition: width ${$layout.transition}s;
     `;

  $: scale = calculateScale($products);
</script>

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

<svg
  id="svg"
  {style}
  width="100%"
  height="100%"
  {viewBox}
  preserveAspectRatio="none"
  on:touchstart={pinch}>
  <YAxis />
  <YGridLines {scale} />
  <XAxis />
  <XGridLines {scale} />
  {#each $products.visible as product}
    <Product {product} {scale} />
  {/each}
  <DateLine {scale} />
</svg>
