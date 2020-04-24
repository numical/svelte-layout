<script>
  import { fade } from 'svelte/transition';
  import { products } from '../../stores/productPresenter';
  import ProductDetails from './ProductDetails.svelte';
</script>

<style>
  .container {
    flex: 1 1 0;
    padding: 0.25rem;
    overflow: auto;
  }
</style>

<div class="container" in:fade={{ duration: 300 }}>
  {#each $products.all as product}
    <ProductDetails {product} />
  {/each}
</div>
