<script>
    import { fade } from 'svelte/transition';
    import MenuLeft from "svelte-material-icons/MenuLeft.svelte";
    import MenuRight from "svelte-material-icons/MenuRight.svelte";
    import { layout } from '../../stores/layoutManager';
    import { SwipeLeft, SwipeRight } from "../../stores/swipes";
</script>

{#if $layout.chatWidth === 0}
    {#if $layout.chatRight}
        <div class="button buttonRight"
             transition:fade="{{duration: 600}}"
             on:click={() => $layout.swipe(SwipeLeft)}>
            <span class="tooltip tooltipRight">show chat</span>
            <MenuLeft width="2vw" height="2vw" />
        </div>
    {:else}
        <div class="button buttonLeft"
             transition:fade="{{duration: 600}}"
             on:click={() => $layout.swipe(SwipeRight)}>
            <span class="tooltip tooltipLeft">show chat</span>
            <MenuRight width="2vw" height="2vw" />
        </div>
    {/if}
{/if}

<style>
    .button {
        position: absolute;
        top: 50vh;
        border: none;
        color: white;
        background-color: black;
        opacity: 0.75;
    }
    .buttonRight {
        right: 1vw;
        border-bottom-left-radius: 0.25rem;
        border-top-left-radius: 0.25rem;
    }
    .buttonLeft {
        left: 1vw;
        border-bottom-right-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }
    .button .tooltip {
        visibility: hidden;
        position: absolute;
        width: 11ch;
        color: darkorange;
        opacity: 0;
        transition: opacity .6s;
        z-index: 1;
        top: 30%;
    }
    .button .tooltipRight {
        text-align: left;
        right: 50%;
    }
    .button .tooltipLeft {
        text-align: right;
        left: 50%;
    }
    .button:hover {
        background-color: darkorange;
        cursor: default;
    }
    .button:hover .tooltip {
        visibility: visible;
        opacity: 1;
    }

</style>