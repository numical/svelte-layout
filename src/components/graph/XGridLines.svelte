<script>
    import { help } from '../../stores/helpManager';
    import { graph } from '../../stores/graphManager';
    import { chart, header, left, margin } from '../../common/svgDimensions';
    import { fromIntervalToText } from '../../common/dates';

    export let scale;

    $: ticks = scale.x.intervals.map((interval, index) => {
        const x = left.width + (interval - scale.minInterval) * scale.x.intervalWidth;
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
            visible: !$graph.dateLineX || Math.abs($graph.dateLineX - x) > 50
        };
    });
    $: colour = $help.currentFocus === 'date' ? "darkorange" : "black";
</script>

{#each ticks as tick}
    {#if tick.visible}
        <line {...tick.dimensions} stroke={colour} />
        <text {...tick.label.dimensions} fill={colour} >
            {tick.label.text}
        </text>
    {/if}
{/each}

<style>
    text {
        text-anchor: middle;
        dominant-baseline: hanging;
        font-size: x-small;
    }
</style>
