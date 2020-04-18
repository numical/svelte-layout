<script>
    import { gesture } from '../../stores/gestureManager';
    import { layout } from '../../stores/layoutManager';
    import { products } from '../../stores/productPresenter';
    import { fromIntervalToText } from '../../common/dates';
    import { fromSVGCoordsToInterval } from '../../common/coords';
    import { chart, header, left, margin } from '../../common/svgDimensions';
    import { format } from '../../common/currency';

    export let scale;

    const startDrag = () => $gesture.setDragBehaviour(event => $layout.updateDateLine(event));

    $: x = $layout.dateLineX < left.width
        ? left.width
        : $layout.dateLineX > left.width + chart.width
        ? left.width + chart.width
        : $layout.dateLineX;
    $: interval = fromSVGCoordsToInterval({ x });
    $: dimensions = {
        rect: {
            x: x - 12,
            y: header.height,
            width: 25,
            height: chart.height
        },
        line: {
            x1: x,
            x2: x,
            y1: header.height,
            y2: header.height + chart.height
        },
        label: {
            x,
            y: header.height + chart.height + margin
        }
    };
    $: values = $products.visible.map((product, index) => ({
        colour: product.colour,
        dimensions: {
            x,
            y: header.height + chart.height  - product.data[interval] * scale.y.unitHeight
        },
        text: format(product.data[interval])
    }));
</script>

{#if $layout.dateLineX}
    <rect {...dimensions.rect}
          on:mousedown={startDrag}
          on:touchstart={startDrag} />
    <line {...dimensions.line}
          on:mousedown={startDrag}
          on:touchstart={startDrag} />
    <text {...dimensions.label}
          class="label"
          on:mousedown={startDrag}
          on:touchstart={startDrag} >
        {fromIntervalToText(interval)}
    </text>
    {#each values as value}
        <text {...value.dimensions} class="background" >
            {value.text}
        </text>
        <text {...value.dimensions} fill={value.colour}>
            {value.text}
        </text>
    {/each}
{/if}

<style>
    rect {
        opacity: 0;
        cursor: url(horizontalResize.png), col-resize;
    }
    line {
        stroke: darkorange;
        stroke-width: 2;
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
