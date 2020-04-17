<script>
    import {layout} from '../../stores/layoutManager';
    import { chart, header, left, margin } from '../../common/svgDimensions';

    export let scale;

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const maxIndex = scale.x.intervals.length - 1;
    const ticks = scale.x.intervals.map((interval, index) => {
        const x = left.width + interval * scale.x.intervalWidth;
        const y = header.height + chart.height;
        const date = new Date(2020, index === maxIndex ? interval - 1 : interval, 1);
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
                text: `${months[date.getMonth()]} ${date.getFullYear()}`
            }
        };
    });

</script>

{#if !$layout.dateLineX}
    {#each ticks as tick}
        <line {...tick.dimensions} />
        <text {...tick.label.dimensions}>
            {tick.label.text}
        </text>
    {/each}
{/if}

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
