<script>
  import { help } from '../../../help/helpManager';
  import { graph } from '../../graphManager';
  import { products } from '../../../products/productPresenter';
  import { fromDomToSVGCoords } from '../../../common/coords';
  import {
    breakpoint,
    chart,
    footer,
    header,
    left,
    margin,
  } from '../../../common/svgDimensions';
  import BreakPoint from '../breakpoints/HorizontalBreakPoint.svelte';
  import OriginBreakPoint from '../breakpoints/OriginBreakPoint.svelte';
  import EndBreakPoint from '../breakpoints/EndBreakPoint.svelte';

  const dimensions = {
    line: {
      x1: left.width,
      x2: left.width + chart.width,
      y1: header.height + chart.height,
      y2: header.height + chart.height,
    },
    rect: {
      x: left.width,
      y: header.height + chart.height - footer.height,
      width: chart.width,
      height: footer.height * 2,
    },
    breakpoints: {
      origin: {
        x: left.width,
        y: header.height + chart.height - breakpoint.zag,
      },
      end: {
        x: left.width + chart.width - breakpoint.width,
        y: header.height + chart.height - breakpoint.zag,
      },
    },
  };

  const toggleDateLine = event => {
    $graph.updateDateLine($graph.dateLineX ? null : event);
  };

  $: lineStyle =
    $help.currentFocus === 'date' ? 'stroke: url(#highlightXAxis)' : 'black';
  $: helpX = $help.currentPosition
    ? fromDomToSVGCoords($help.currentPosition).x
    : left.width + chart.width / 2;
  $: gradientOffset = helpX / chart.width;
  $: tooltip = {
    text: $graph.dateLineX
      ? 'click to hide date line'
      : 'click to show date line',
    pos: {
      x: helpX,
      y: header.height + chart.height - 2 * margin,
    },
  };
</script>

<defs>
  <linearGradient id="highlightXAxis" gradientUnits="userSpaceOnUse">
    <stop stop-color="black" offset="0"></stop>
    <stop stop-color="orange" offset="{gradientOffset}"></stop>
    <stop stop-color="black" offset="1"></stop>
  </linearGradient>
</defs>
<rect
  {...dimensions.rect}
  on:mouseover="{event => $help.setFocus('date', event)}"
  on:mouseleave="{$help.loseFocus}"
  on:click="{toggleDateLine}"
></rect>
<line
  {...dimensions.line}
  style="{lineStyle}"
  on:mouseover="{event => $help.setFocus('date', event)}"
  on:mouseleave="{$help.loseFocus}"
  on:click="{toggleDateLine}"
></line>
<OriginBreakPoint />
<EndBreakPoint />
{#if $help.currentFocus === 'date'}
  <text {...tooltip.pos}>{tooltip.text}</text>
{/if}

<style>
  rect {
    opacity: 0;
  }
  line {
    stroke: black;
    stroke-width: 1;
    padding: 5px;
  }
  text {
    fill: darkorange;
    font-size: x-small;
  }
</style>
