<script>
    import { fade } from 'svelte/transition';
    import { products } from '../../stores/productPresenter';
</script>

<div in:fade="{{duration: 300}}">
    <div>Products</div>
    {#each $products.all as product}
        <div>{product.name}</div>
    {/each}
</div>