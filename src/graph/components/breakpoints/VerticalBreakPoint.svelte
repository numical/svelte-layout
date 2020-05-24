<script>
  import { products } from '../../../products/productPresenter';
  import {
    breakpoint,
    chart,
    header,
    left,
  } from '../../../common/svgDimensions';

  const { zig, zag, width, height } = breakpoint;
  const lineProps = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 6 * zig,
  };
  const points = `0,0 0,${zig} ${zag},${zig * 2}, -${zag},${zig * 4}, 0, ${zig *
    5} 0, ${zig * 6}`;
  const transform = `translate(${left.width} ${header.height +
    chart.height -
    6 * zig})`;
</script>

{#if $products.scaleY.showBreakpoint}
  <g {transform}>
    <line {...lineProps}></line>
    <polyline {points}></polyline>
  </g>
{/if}

<style>
  line {
    stroke: white;
    stroke-width: 3;
    padding: 5px;
  }
  polyline {
    stroke: black;
    stroke-width: 1;
    fill: none;
  }
</style>
