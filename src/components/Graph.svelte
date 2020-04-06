<script>
    import XAxis from './graph/XAxis.svelte';
    import YAxis from './graph/YAxis.svelte';
    import Product from './graph/Product.svelte';
    import { layout } from '../stores/layoutManager';
    import { products } from '../stores/modelManager';
    import { viewBox } from './graph/coordinates';

    const colours = ['darkblue', 'blue', 'cornflowerblue', 'lightblue'];

    $: style = `
        width:${$layout.graphWidth}%;
        transition: width ${$layout.transition}s
     `;

    $: maxValue = Math.max(...$products.flat());
</script>

<svg style={style} width="100%" height="100%" viewBox={viewBox} preserveAspectRatio="none">
    <YAxis />
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