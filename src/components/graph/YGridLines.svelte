<script>
    import { chart, header, left } from './dimensions';

    export let maxValue;

    const unitHeight = chart.height/maxValue;
    const fractions = [0, 0.25, 0.5, 0.75];
    const gridLines = fractions.map(f => ({
        dimensions: {
            x1: left.width,
            x2: left.width + chart.width,
            y1: header.height + f * chart.height,
            y2: header.height + f * chart.height
        },
        label: {
            dimensions: {
                x: left.margin,
                y: header.height + f * chart.height
            },
            text: `£${Math.round((1 -f) * maxValue)}`
        }
    }));

</script>

{#each gridLines as gridLine}
    <line {...gridLine.dimensions} stroke="darkgrey" stroke-width="1" stroke-dasharray="2" />
    <text {...gridLine.label.dimensions} class="label">{gridLine.label.text}</text>
{/each}

<style>
    .label {
        color: red;
        font-size: x-small;
    }
</style>
