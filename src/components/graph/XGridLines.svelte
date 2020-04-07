<script>
    import { chart, header, left, margin } from './dimensions';

    export let scale;

    const printDate = d => {
        const month = d.getMonth();
        return `${month > 9 ? month : "0" + month}/${d.getFullYear()}`;
    };

    const printInterval = i => printDate( new Date(2020, i === 0 ? 1 : i, 1));

    const ticks = scale.x.intervals.map(interval => {
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
                text: printInterval(interval)
            }
        };
    });

</script>

{#each ticks as tick}
    <line {...tick.dimensions} />
    <text {...tick.label.dimensions} >{tick.label.text}</text>
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
