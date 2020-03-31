<script>
    export let toggleOverlay;
    export let overlayChat;
    import Pin from "svelte-material-icons/Pin.svelte";
    import PinOutline from "svelte-material-icons/PinOutline.svelte";
</script>

<div class="toolbar">
    <div class="toolbarItem" on:click={toggleOverlay}>
        <span class="tooltip">
             {#if overlayChat}
                 side-by-side
             {:else}
                 overlay chat
             {/if}
        </span>
        {#if overlayChat}
            <Pin />
        {:else}
            <PinOutline />
        {/if}
    </div>
</div>

<style>
    .toolbar {
        display: grid;
        justify-items: end;
    }
    .toolbarItem {
        position: relative;
        display: inline-block;
        border-radius: 0.25em;
        padding: 0.25rem;
    }
    .toolbarItem:hover {
        background-color: grey;
    }
    .toolbarItem .tooltip {
        visibility: hidden;
        position: absolute;
        width: 12ch;
        text-align: center;
        z-index: 1;
        opacity: 0;
        transition: opacity .6s;
        top: 100%;
        right: 50%;
    }
    .toolbarItem:hover .tooltip {
        visibility: visible;
        opacity: 1;
    }
</style>