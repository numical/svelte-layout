<script>
    import { products } from '../../stores/productPresenter';
</script>

<div>
    <div>Products</div>
    {#each $products.all as product}
        <div>{product.name}</div>
    {/each}
</div>