<script>
  import { products } from '../../products/productPresenter';
  import { chart, header, left, margin } from '../../common/svgDimensions';

  $: gridLines = $products.scaleY.intervals.map((value, index) => {
    const y = header.height + chart.height - value * $products.scaleY.unitHeight;
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
</script>

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

{#each gridLines as gridLine}
  <line {...gridLine.dimensions} />
  <text {...gridLine.label.dimensions}>{gridLine.label.text}</text>
{/each}
