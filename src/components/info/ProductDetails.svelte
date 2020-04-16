<script>
    import { products } from '../../stores/productPresenter';
    $: title = $products.display.product.name;
    $: data = $products.display.product.data;
</script>

<h2>{title}</h2>
<div>
    {`Start amount: £${data[0]}`}
</div>
<div>
    {`End amount: £${data[data.length - 1]}`}
</div>
