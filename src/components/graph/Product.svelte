<script>
    import { convertToPoints } from './coordinates';

    export let product;
    export let colour;
    export let maxValue;

</script>

<polyline points={convertToPoints(product, maxValue)} stroke={colour} stroke-width="2" fill="none" />
