<script>
    import { fade } from 'svelte/transition';
    import { products } from '../../stores/productPresenter';
</script>

<div class='container' in:fade="{{duration: 300}}">
    <svelte:component this={$products.display.component} />
</div>

<style>
    .container {
        flex: 1 1 0;
        padding: 0.25rem;
    }
</style>

