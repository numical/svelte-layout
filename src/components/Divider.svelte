<script>
    export let mouseDown;
</script>

<div class="divider" on:mousedown={mouseDown}>
    <div class="line"></div>
    <div class="line"></div>
</div>

<style>
    .divider {
        position: absolute;
        left: -2px;
        top: 0;
        bottom: 0;
        width: 6px;
        cursor: w-resize;
        background-color: grey;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .line {
        width: 2px;
        height: 100%;
        background: darkgrey;
        margin-left: 2px;
    }
</style>