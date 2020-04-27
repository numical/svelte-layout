<script>
  import { help } from '../../stores/helpManager';
  import { graph } from '../../stores/graphManager';
  import { products } from '../../products/productPresenter';
  import { breakpoint, chart, header, left, margin } from '../../common/svgDimensions';
  import { fromIntervalToText } from '../../common/dates';

  $: ticks = $products.scaleX.intervals.map((interval, index, array) => {
    const x = left.width
            + ($products.scaleX.showOriginBreakpoint ? breakpoint.width : 0)
            + (interval - $products.minInterval) * $products.scaleX.intervalWidth;
    const y = header.height + chart.height;
    return {
      dimensions: {
        x1: x,
        x2: x,
        y1: y - margin,
        y2: y + margin,
      },
      label: {
        dimensions: {
          x,
          y: y + margin,
        },
        text: fromIntervalToText(interval),
        textAnchor: index === 0
          ? 'start'
          : index === array.length -1
          ? 'end'
          : 'middle'
      },
      visible: !$graph.dateLineX || Math.abs($graph.dateLineX - x) > 50,
    };
  });
  $: colour = $help.currentFocus === 'date' ? 'darkorange' : 'black';
</script>

<style>
  text {
    dominant-baseline: hanging;
    font-size: x-small;
  }
</style>

{#each ticks as tick}
  {#if tick.visible}
    <line {...tick.dimensions} stroke={colour} />
    <text {...tick.label.dimensions} fill={colour} text-anchor={tick.label.textAnchor}>
      {tick.label.text}
    </text>
  {/if}
{/each}
