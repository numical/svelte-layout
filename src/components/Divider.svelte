<script>
    import { fade } from 'svelte/transition';
    import MenuLeft from "svelte-material-icons/MenuLeft.svelte";
    import { help } from '../stores/helpManager';
    import { gesture } from '../stores/gestureManager';
    import { layout } from '../stores/layoutManager';
    import { SwipeLeft } from "../stores/Swipe";
</script>

<div class="divider"
     on:mouseover={() => $help.setFocus('divider')}
     on:mousedown={$gesture.startDrag}
     on:touchstart={$gesture.startDrag}
     on:mouseleave={$help.loseFocus}
     on:touchend={$help.loseFocus}>
    {#if $layout.chatWidth === 0}
        <div class="button"
             transition:fade="{{duration: 600}}"
             on:click={() => $layout.maximisePanel(SwipeLeft)}>
            <span class="tooltip">show chat</span>
            <MenuLeft width="2vw" height="2vw" />
        </div>
    {/if}
</div>

<style>
    .divider {
        position: absolute;
        left: -2vw;
        top: 0;
        bottom: 0;
        width: 4vw;
        cursor: url(horizontalResize.png), col-resize;
    }
    .divider:focus {
        cursor: url(horizontalResize.png), col-resize;
    }
    .button {
        position: absolute;
        top: 50vh;
        border-bottom-left-radius: 0.25rem;
        border-top-left-radius: 0.25rem;
        border: none;
        color: white;
        background-color: black;
        opacity: 0.75;
    }
    .button .tooltip {
        visibility: hidden;
        position: absolute;
        width: 11ch;
        text-align: left;
        color: darkorange;
        opacity: 0;
        transition: opacity .6s;
        z-index: 1;
        top: 30%;
        right: 50%;
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