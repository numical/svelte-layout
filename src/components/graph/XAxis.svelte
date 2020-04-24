<script>
  import { help } from '../../stores/helpManager';
  import { graph } from '../../stores/graphManager';
  import {
    chart,
    footer,
    header,
    left,
    margin,
  } from '../../common/svgDimensions';

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
    tooltip: {
      x: left.width + chart.width / 2,
      y: header.height + chart.height - 2 * margin,
    },
  };

  const toggleDateLine = event => {
    $graph.updateDateLine($graph.dateLineX ? null : event);
  };

  $: lineStyle = $help.currentFocus === 'date' ? 'stroke: darkorange' : '';
  $: toolTipText = $graph.dateLineX
    ? 'click to hide date line'
    : 'click to show date line';
</script>

<style>
  rect {
    opacity: 0;
  }
  line {
    stroke: black;
    stroke-width: 2;
    padding: 5px;
  }
  text {
    fill: darkorange;
    font-size: x-small;
  }
</style>

<rect
  {...dimensions.rect}
  on:mouseover={() => $help.setFocus('date')}
  on:mouseleave={$help.loseFocus}
  on:click={toggleDateLine} />
<line
  {...dimensions.line}
  style={lineStyle}
  on:mouseover={() => $help.setFocus('date')}
  on:mouseleave={$help.loseFocus}
  on:click={toggleDateLine} />
{#if $help.currentFocus === 'date'}
  <text {...dimensions.tooltip}>{toolTipText}</text>
{/if}
