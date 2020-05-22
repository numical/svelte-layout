<script>
  import { products } from '../../../products/productPresenter';
  import { chart, header, left } from '../../../common/svgDimensions';

  export let product;

  const xOffset = left.width
  const yOffset = chart.height + header.height;

  $: points = product.data.reduce(
    (points, value, interval) =>
      `${points} ${xOffset +
        interval * $products.scaleXForAll.intervalWidth},${yOffset -
        value * $products.scaleYForAll.unitHeight}`,
    ''
  );
</script>

<polyline
  {points}
  stroke="{product.colour}"
></polyline>

<style>
  polyline {
    stroke-width: 2;
    fill: none;
  }
  polyline:hover {
    stroke: darkorange;
  }
</style>
