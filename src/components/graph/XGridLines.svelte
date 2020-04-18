<script>
    import {layout} from '../../stores/layoutManager';
    import { chart, header, left, margin } from '../../common/svgDimensions';
    import { fromIntervalToText } from '../../common/dateUtils';

    export let scale;

    $: ticks = scale.x.intervals.map(interval => {
        const x = left.width + interval * scale.x.intervalWidth;
        const y = header.height + chart.height;
        return {
            dimensions: {
                x1: x,
                x2: x,
                y1: y - margin,
                y2: y + margin
            },
            label: {
                dimensions: {
                    x,
                    y: y + margin
                },
                text: fromIntervalToText(interval)
            },
            visible: !$layout.dateLineX || Math.abs($layout.dateLineX - x) > 50
        };
    });
</script>

{#each ticks as tick}
    {#if tick.visible}
        <line {...tick.dimensions} />
        <text {...tick.label.dimensions}>
            {tick.label.text}
        </text>
    {/if}
{/each}

<style>
    line {
        stroke: black;
        stroke-width: 1;
    }
    text {
        text-anchor: middle;
        dominant-baseline: hanging;
        font-size: x-small;
    }
</style>
