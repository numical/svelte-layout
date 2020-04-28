<script>
  import { breakpoint } from '../../common/svgDimensions';

  export let origin;

  const { zig, zag, width, height } = breakpoint;
  const coords = {
    x1: 0,
    y1: zag,
    x2: 5 * zig,
    y2: zag,
  };
  const points = `0, ${zag} ${zig},${zag} ${zig * 2},0 ${zig * 3},${zag *
    2} ${zig * 4},${zag}, ${zig * 5}, ${zag}`;
  const transform = `translate(${origin.x} ${origin.y})`;
</script>

<g {transform}>
  <line {...coords}></line>
  <polyline {points}></polyline>
</g>

<style>
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
</style>
