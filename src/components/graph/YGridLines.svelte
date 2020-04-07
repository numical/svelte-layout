<script>
    import { chart, header, left } from './dimensions';

    export let scale;

    const gridLines = scale.y.intervals.map((value, index) => {
        const y = header.height + chart.height - (value * scale.y.unitHeight);
        return {
            dimensions: {
                x1: left.width,
                x2: left.width + chart.width,
                y1: y,
                y2: y
            },
            label: {
                dimensions: {
                    x: left.width - left.margin,
                    y
                },
                text: value % 1000 === 0 ? `£${value/1000}k` : `£${value}`
            }
        };
    });

</script>

{#each gridLines as gridLine}
    <line {...gridLine.dimensions} stroke="darkgrey" stroke-width="1" stroke-dasharray="2" />
    <text {...gridLine.label.dimensions} text-anchor="end" class="label">{gridLine.label.text}</text>
{/each}

<style>
    .label {
        font-size: x-small;
    }
</style>
