<script>
  import { help } from '../../stores/helpManager';
  import { graph } from '../../stores/graphManager';
  import { products } from '../../products/productPresenter';
  import { start, DRAG } from '../../gestures/gestureManager';
  import { fromIntervalToText } from '../../common/dates';
  import {
    breakpoint,
    chart,
    header,
    left,
    margin,
  } from '../../common/svgDimensions';
  import { format } from '../../common/currency';

  const drag = start.bind(null, { [DRAG]: $graph.updateDateLine });

  $: x =
    $graph.dateLineX < left.width
      ? left.width
      : $graph.dateLineX > left.width + chart.width
      ? left.width + chart.width
      : $graph.dateLineX;
  $: dimensions = {
    rect: {
      x: x - 12,
      y: header.height,
      width: 25,
      height: chart.height,
    },
    line: {
      x1: x,
      x2: x,
      y1: header.height,
      y2: header.height + chart.height,
    },
    label: {
      x,
      y: header.height + chart.height + margin,
    },
  };
  $: interval = $products.scaleX.fromSVGCoordsToInterval({ x });
  $: yOffset =
    header.height +
    chart.height -
    ($products.scaleY.showBreakpoint ? breakpoint.height : 0);
  $: values = $products.visible.map((product, index) => {
    const value = product.data[interval - $products.scaleX.minInterval + 1];
    return {
      colour: product.colour,
      dimensions: {
        x,
        y: yOffset - (value - $products.scaleY.min) * $products.scaleY.unitHeight
      },
      text: format(value)
    };
  });
  $: colour = $help.currentFocus === 'dateline' ? 'darkorange;' : 'black';
</script>

{#if $graph.dateLineX}
  <rect
    {...dimensions.rect}
    on:mousedown="{drag}"
    on:touchstart="{drag}"
    on:mouseover="{event => $help.setFocus('dateline', event)}"
    on:mouseleave="{$help.loseFocus}"
  ></rect>
  <line
    {...dimensions.line}
    style="{`stroke : ${colour}`}"
    on:mousedown="{drag}"
    on:touchstart="{drag}"
    on:mouseover="{event => $help.setFocus('dateline', event)}"
  ></line>
  <text
    {...dimensions.label}
    style="{`fill: ${colour}`}"
    class="label"
    on:mousedown="{drag}"
    on:touchstart="{drag}"
    on:mouseover="{event => $help.setFocus('dateline', event)}"
  >
    {fromIntervalToText(interval)}
  </text>
  {#each values as value (value.text)}
    <text {...value.dimensions} class="background">{value.text}</text>
    <text {...value.dimensions} fill="{value.colour}">{value.text}</text>
  {/each}
{/if}

<style>
  rect {
    opacity: 0;
    cursor: url(horizontalResize.png), col-resize;
  }
  line {
    stroke-width: 1;
    stroke-dasharray: 4 1;
    cursor: url(horizontalResize.png), col-resize;
  }
  text {
    dominant-baseline: hanging;
    font-size: small;
    text-anchor: middle;
  }
  .label {
    fill: darkorange;
    font-size: x-small;
  }
  .background {
    fill: white;
    stroke: white;
    stroke-width: 0.5em;
  }
</style>
