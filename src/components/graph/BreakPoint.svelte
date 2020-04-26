<script>
    import { breakpoint } from '../../common/svgDimensions';

    export let origin;

    const { zig, zag, width, height } = breakpoint;
    const bounds = {
      x: 0,
      y: 0,
      width,
      height
    };
    const points = `0, ${zag} ${zig},${zag} ${zig * 2},0 ${zig * 3},${zag * 2} ${zig * 4},${zag}, ${zig * 5}, ${zag}`;
    const transform = `translate(${origin.x} ${origin.y})`;
</script>

<g {transform}>
    <rect {...bounds} />
    <polyline {points} />
</g>


<style>
    rect {
        fill: white;
        opacity: 1;
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