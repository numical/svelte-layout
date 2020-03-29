<script>
    export let startResize;
</script>

<div class="divider" on:mousedown={startResize} on:touchstart={startResize} />


<style>
    .divider {
        position: absolute;
        left: -1vw;
        top: 0;
        bottom: 0;
        width: 2vw;
        cursor: w-resize;
    }
</style>