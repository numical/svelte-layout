<script>
  import { products } from '../../products/productPresenter';
  import {
    breakpoint,
    chart,
    header,
    left,
    margin,
  } from '../../common/svgDimensions';

  $: yOffset =
    header.height +
    chart.height -
    ($products.scaleY.showBreakpoint ? breakpoint.height : 0);
  $: gridLines = $products.scaleY.intervals.map((value, index) => {
    const y =
      yOffset - (value - $products.scaleY.min) * $products.scaleY.unitHeight;
    return {
      dimensions: {
        x1: left.width,
        x2: left.width + chart.width,
        y1: y,
        y2: y,
      },
      label: {
        dimensions: {
          x: left.width - margin,
          y,
        },
        text: value % 1000 === 0 ? `£${value / 1000}k` : `£${value}`,
      },
    };
  });
  $: visibleGridLines = $products.scaleY.showBreakpoint
    ? gridLines.filter(gl => gl.dimensions.y1 <= header.height + chart.height)
    : gridLines;
</script>

{#each visibleGridLines as gridLine}
  <line {...gridLine.dimensions}></line>
  <text {...gridLine.label.dimensions}>{gridLine.label.text}</text>
{/each}

<style>
  line {
    stroke: darkgrey;
    stroke-width: 1;
    stroke-dasharray: 2;
  }
  text {
    text-anchor: end;
    font-size: x-small;
  }
</style>
