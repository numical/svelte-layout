<script>
    import { onMount } from 'svelte';
    import DateLine from "./DateLine.svelte";
    import Product from './Product.svelte';
    import XAxis from './XAxis.svelte';
    import YAxis from './YAxis.svelte';
    import XGridLines from './XGridLines.svelte';
    import YGridLines from './YGridLines.svelte';
    import {chart, header, footer, left, right} from '../../common/svgDimensions';
    import {calculateScale} from './calculateScale';
    import { startPinch } from '../../gestures/gestureManager';
    import {graph} from '../../stores/graphManager';
    import {layout} from '../../stores/layoutManager';
    import {products} from '../../stores/productPresenter';
    import TouchLib from './TouchLib';

    const viewBox = `0 0 ${left.width + chart.width + right.width} ${header.height + chart.height + footer.height}`;

    const pinch = startPinch.bind(null, () => console.log('Graph pinched.'));

    $: style = `
        ${$layout.restorePanelPosition.graphPos}: 0;
        width:${$layout.graphWidth}%;
        transition: width ${$layout.transition}s;
     `;

    $: scale = calculateScale($products);

    let svg;

    onMount(() => {
        const touch = new TouchLib(svg, {
            pinch: function (evt) {
                console.log(evt.zoom);
            }
        });
    });
</script>

<svg id="svg"
     style={style}
     width="100%"
     height="100%"
     viewBox={viewBox}
     preserveAspectRatio="none"
     bind:this={svg}
    >
    <YAxis />
    <YGridLines scale={scale} />
    <XAxis />
    <XGridLines scale={scale} />
    {#each $products.visible as product, index}
        <Product product={product} colour={product.colour} scale={scale} />
    {/each}
    <DateLine scale={scale} />
</svg>


<style>
    svg {
        position: absolute;
        top: 0;
        bottom: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        touch-action: none;
    }
</style>