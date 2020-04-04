<script>
    import Pin from "svelte-material-icons/Pin.svelte";
    import PinOutline from "svelte-material-icons/PinOutline.svelte";
    import { help } from '../managers/helpManager';
    import { layout } from '../managers/layoutManager';
</script>

<div class="toolbar">
    <div class="toolbarItem"
         on:click={$layout.toggleOverlay}
         on:mouseover={() => $help.setFocus('toggleOverlay')}
         on:mouseleave={$help.loseFocus}
    >
        <span class="tooltip">
             {#if $layout.overlayChat}
                 side-by-side
             {:else}
                 overlay chat
             {/if}
        </span>
        {#if $layout.overlayChat}
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
        background-color: darkorange;
    }
    .toolbarItem .tooltip {
        visibility: hidden;
        position: absolute;
        width: 12ch;
        text-align: center;
        color: darkorange;
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