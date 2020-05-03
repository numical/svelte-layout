<script>
  import { products } from '../../products/productPresenter';
  import { chart, header, left } from '../../common/svgDimensions';

  $: dimensions = {
    x: left.width,
    y: header.height,
    width: $products.minInterval * $products.scaleXForAll.intervalWidth,
    height: chart.height,
  };
</script>

<rect {...dimensions}></rect>

<style>
  rect {
    fill: lightgrey;
    opacity: 0.3;
  }
</style>
