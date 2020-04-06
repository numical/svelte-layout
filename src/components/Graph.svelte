<script>
    import XAxis from './graph/XAxis.svelte';
    import YAxis from './graph/YAxis.svelte';
    import { layout } from '../stores/layoutManager';
    import { pension } from '../stores/modelManager';
    import { convertToPoints, viewBox } from './graph/coordinates';

    $: style = `
        width:${$layout.graphWidth}%;
        transition: width ${$layout.transition}s
     `;
    $: points = convertToPoints($pension)

    //console.log(points);
</script>

<svg style={style} width="100%" height="100%" viewBox={viewBox} preserveAspectRatio="none">
    <YAxis />
    <XAxis />
    <polyline points={points} stroke="blue" stroke-width="2" fill="none" />
</svg>


<style>
    svg {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
    }
</style>