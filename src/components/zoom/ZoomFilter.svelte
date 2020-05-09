<script>
  import { products } from '../../products/productPresenter';
  import { chart, header, left } from '../../common/svgDimensions';

  $: zoomBounds = {
    x1:
      left.width + $products.minInterval * $products.scaleXForAll.intervalWidth,
    x2:
      left.width + $products.maxInterval * $products.scaleXForAll.intervalWidth,
    y1: (1 - $products.scaleY.max / $products.scaleYForAll.max) * chart.height,
    y2: ($products.scaleY.min / $products.scaleYForAll.max) * chart.height,
  };

  $: lft = {
    x: left.width,
    y: header.height,
    width: zoomBounds.x1 - left.width,
    height: chart.height,
  };
  $: right = {
    x: zoomBounds.x2,
    y: header.height,
    width: left.width + chart.width - zoomBounds.x2,
    height: chart.height,
  };
  $: top = {
    x: zoomBounds.x1,
    y: header.height,
    width: zoomBounds.x2 - zoomBounds.x1,
    height: zoomBounds.y1,
  };
  $: bottom = {
    x: zoomBounds.x1,
    y: header.height + chart.height - zoomBounds.y2,
    width: zoomBounds.x2 - zoomBounds.x1,
    height: zoomBounds.y2,
  };
</script>

<rect {...lft}></rect>
<rect {...right}></rect>
<rect {...top}></rect>
<rect {...bottom} ></rect>

<style>
  rect {
    fill: lightgrey;
    opacity: 0.3;
  }
</style>
