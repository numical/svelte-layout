<script>
    import { fade } from 'svelte/transition';
    export let onClick;
    export let style;
    export let tooltip;
    export let tooltipStyle;
</script>


<div style={style}
     transition:fade="{{duration: 600}}"
     on:click={onClick}>
    <span style={tooltipStyle}>{tooltip}</span>
    <slot></slot>
</div>


<style>
    div {
        position: absolute;
        top: 50vh;
        width: 5vmin;
        border: none;
        border-radius: 0.25rem;
        color: white;
        background-color: black;
        opacity: 0.75;
        z-index: 1;
    }
    span {
        visibility: hidden;
        position: absolute;
        width: 11ch;
        color: darkorange;
        opacity: 0;
        transition: opacity .6s;
        top: 30%;
    }
    div:hover {
        background-color: darkorange;
        cursor: default;
    }
    div:hover span {
        visibility: visible;
        opacity: 1;
    }

</style>