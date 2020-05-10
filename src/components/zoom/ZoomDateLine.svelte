<script>
  import { graph } from '../../stores/graphManager';
  import { products } from '../../products/productPresenter';
  import { chart, header, left } from '../../common/svgDimensions';

  $: interval = $products.scaleX.fromSVGCoordsToInterval( { x: $graph.dateLineX });
  $: x = $products.scaleXForAll.intervalWidth * interval + left.width;
  $: dimensions = {
    x1: x,
    x2: x,
    y1: header.height,
    y2: header.height + chart.height,
  };
</script>

{#if $graph.dateLineX}
  <line {...dimensions}></line>
{/if}

<style>
  line {
    stroke: darkorange;
    stroke-width: 2;
  }
</style>
