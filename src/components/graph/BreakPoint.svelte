<script>
  import { fade } from 'svelte/transition';
  import { help } from '../../stores/helpManager';
  import { breakpoint, chart } from '../../common/svgDimensions';
  import { fromDomToSVGCoords } from '../../common/coords';

  export let props;

  const { zig, zag, width, height } = breakpoint;
  const rectProps = {
    x: 0,
    y: zag - chart.height,
    height: chart.height,
    width: 5 * zig,
  };
  const lineProps = {
    x1: 0,
    y1: zag,
    x2: 5 * zig,
    y2: zag,
  };
  const points = `0, ${zag} ${zig},${zag} ${zig * 2},0 ${zig * 3},${zag *
    2} ${zig * 4},${zag}, ${zig * 5}, ${zag}`;
  const transform = `translate(${props.translate.x} ${props.translate.y})`;

  $: tooltip = {
    ...props.tooltip,
    pos:  $help.currentPosition
            ? fromDomToSVGCoords($help.currentPosition, props.tooltip.translate)
            : { x: 0, y: zag - chart.height /2 }
  };
</script>

<g {transform}>
  <rect
    {...rectProps}
    on:mouseenter="{event => $help.setFocus(props.helpId, event)}"
    on:mouseleave="{$help.loseFocus}"
    on:click={props.onClick}
  ></rect>
  <line {...lineProps}></line>
  <polyline {points}></polyline>
</g>
{#if $help.currentFocus === props.helpId}
  <text
          {...tooltip.pos}
          in:fade="{{ duration: 300 }}"
          text-anchor={tooltip.textAnchor}
  >
    {tooltip.text}
  </text>
{/if}

<style>
  rect {
    opacity: 0;
    fill: darkorange;
    transition: opacity 0.6s;
  }
  rect:hover {
    opacity: 0.3;
  }
  line {
    stroke: white;
    stroke-width: 3;
    padding: 5px;
  }
  polyline {
    stroke: black;
    stroke-width: 2;
    fill: none;
  }
  polyline:hover {
    stroke: darkorange;
  }
  text {
    fill: darkorange;
    font-size: x-small;
  }
</style>
