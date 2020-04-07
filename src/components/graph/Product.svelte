<script>
    import { help } from '../../stores/helpManager';
    import { chart, header, left } from './dimensions';

    export let product;
    export let colour;
    export let scale;

    const xOffset = left.width;
    const yOffset = chart.height + header.height;
    const points = product.reduce((points, value, interval) =>
        `${points} ${xOffset + interval * scale.x.intervalWidth},${yOffset - value * scale.y.unitHeight}`,
        "");
</script>

<polyline points={points}
          stroke={colour}
          on:mouseover={() => $help.setFocus('product')}
          on:mouseleave={$help.loseFocus} />

<style>
    polyline {
        stroke-width: 2;
        fill: none;
    }
    polyline:hover {
        stroke: darkorange;
    }
</style>
