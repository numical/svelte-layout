<script>
    import { layout } from '../../stores/layoutManager';
    import { products } from '../../stores/productPresenter';
    export let product;
    $: style = product === $products.highlighted
            ? `
                background-color: orange;
                opacity:${$layout.overlayPanel ? '0.75' : '1'};
                border-radius:${$layout.overlayPanel ? '0.25rem' : '0'};
              `
            : '';
</script>

<div class="container" style={style}>
    <div class="title">{product.name}</div>
    <div>
        {`Start amount: £${product.data[0]}`}
    </div>
    <div>
        {`End amount: £${product.data[product.data.length - 1]}`}
    </div>
</div>

<style>
    .container {
        padding: 0.25rem;
        margin-bottom: 0.5rem;
        color: white;
    }
    .title {
        font-size: x-large;
        font-weight: bold;
        padding-bottom: 0.25rem;
    }
</style>


