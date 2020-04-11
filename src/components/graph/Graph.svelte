<script>
    import Product from './Product.svelte';
    import XAxis from './XAxis.svelte';
    import YAxis from './YAxis.svelte';
    import XGridLines from './XGridLines.svelte';
    import YGridLines from './YGridLines.svelte';
    import { chart, header, footer, left, right } from './dimensions';
    import { calculateScale } from './calculateScale';
    import { layout } from '../../stores/layoutManager';
    import { products } from '../../stores/modelManager';


    const colours = ['darkblue', 'blue', 'cornflowerblue', 'lightblue'];
    const viewBox = `0 0 ${left.width + chart.width + right.width} ${header.height + chart.height + footer.height}`;

    $: style = `
        ${$layout.restorePanelPosition.graphPos}: 0;
        width:${$layout.graphWidth}%;
        transition: width ${$layout.transition}s;
     `;

    $: scale = calculateScale($products);
</script>

<svg style={style} width="100%" height="100%" viewBox={viewBox} preserveAspectRatio="none">
    <YAxis />
    <YGridLines scale={scale} />
    <XAxis />
    <XGridLines scale={scale} />
    {#each $products as product, index}
        <Product product={product} colour={colours[(index % colours.length)]} scale={scale} />
    {/each}
</svg>


<style>
    svg {
        position: absolute;
        top: 0;
        bottom: 0;
    }
</style>