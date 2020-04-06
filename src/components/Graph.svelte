<script>
    import Product from './graph/Product.svelte';
    import XAxis from './graph/XAxis.svelte';
    import YAxis from './graph/YAxis.svelte';
    import YGridLines from './graph/YGridLines.svelte';
    import { chart, header, footer, left, right } from './graph/dimensions';
    import { layout } from '../stores/layoutManager';
    import { products } from '../stores/modelManager';

    const colours = ['darkblue', 'blue', 'cornflowerblue', 'lightblue'];
    const viewBox = `0 0 ${left.width + chart.width + right.width} ${header.height + chart.height + footer.height}`;

    $: style = `
        width:${$layout.graphWidth}%;
        transition: width ${$layout.transition}s
     `;

    $: maxValue = Math.max(...$products.flat());
</script>

<svg style={style} width="100%" height="100%" viewBox={viewBox} preserveAspectRatio="none">
    <YAxis />
    <YGridLines maxValue={maxValue} />
    <XAxis />
    {#each $products as product, index}
        <Product product={product} colour={colours[(index % colours.length)]} maxValue={maxValue} />
    {/each}
</svg>


<style>
    svg {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
    }
</style>