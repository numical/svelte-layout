<script>
  import { products } from '../../products/productPresenter';
  import { chart, header, left } from '../../common/svgDimensions';

  $: x =
    left.width + $products.maxInterval * $products.scaleXForAll.intervalWidth;
  $: dimensions = {
    x,
    y: header.height,
    width: left.width + chart.width - x,
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
