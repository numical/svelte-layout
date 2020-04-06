<script>
    import { chart, header, left } from './dimensions';

    export let product;
    export let colour;
    export let maxValue;

    const unitHeight = chart.height/maxValue;
    const intervalWidth = chart.width/product.length;
    const xOffset = left.width;
    const yOffset = chart.height + header.height;
    const points = product.reduce((points, value, interval) =>
        `${points} ${xOffset + interval * intervalWidth},${yOffset - value * unitHeight}`,
        "");

</script>

<polyline points={points} stroke={colour} stroke-width="2" fill="none" />
