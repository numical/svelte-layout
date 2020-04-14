<script>
    import { fade } from 'svelte/transition';
    import { products } from '../../stores/productPresenter';
    $: title = $products.display.product.name;
    $: data = $products.display.product.data;
</script>

<div in:fade="{{duration: 300}}">
    <h2>{title}</h2>
    <div>
        {`Start amount: £${data[0]}`}
    </div>
    <div>
        {`End amount: £${data[data.length - 1]}`}
    </div>
</div>  