<script>
    export let togglePin;
    import Pin from "svelte-material-icons/Pin.svelte";
    import PinOutline from "svelte-material-icons/PinOutline.svelte";
</script>

<div class="toolbar">
    <div class="toolbarItem" on:click={togglePin}>
        <PinOutline />
    </div>
</div>

<style>
    .toolbar {
        display: grid;
        justify-items: end;
    }
    .toolbarItem {
        border-radius: 0.25em;
        padding: 0.25rem;
    }
    .toolbarItem:hover {
        background-color: grey;
    }
</style>