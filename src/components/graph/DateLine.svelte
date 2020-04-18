<script>
    import { gesture } from '../../stores/gestureManager';
    import {layout} from '../../stores/layoutManager';
    import { fromSVGCoordsToText } from '../../common/dateUtils';
    import { chart, header, left, margin } from '../../common/svgDimensions';

    const startDrag = () => $gesture.setDragBehaviour(event => $layout.updateDateLine(event));

    $: x = $layout.dateLineX < left.width
        ? left.width
        : $layout.dateLineX > left.width + chart.width
        ? left.width + chart.width
        : $layout.dateLineX;
    $: dimensions = {
        x1: x,
        x2: x,
        y1: header.height,
        y2: header.height + chart.height
    };
    $: label = {
        dimensions: {
            x,
            y: header.height + chart.height + margin
        },
        text: fromSVGCoordsToText({ x })
    }
</script>

{#if $layout.dateLineX}
    <line {...dimensions}
          on:mousedown={startDrag}
          on:touchstart={startDrag} />
    <text {...label.dimensions}>
        {label.text}
    </text>
{/if}

<style>
    line {
        stroke: darkorange;
        stroke-width: 2;
        cursor: url(horizontalResize.png), col-resize;
    }
    text {
        fill: darkorange;
        background-color: white;
        text-anchor: middle;
        dominant-baseline: hanging;
        font-size: x-small;
    }
</style>
