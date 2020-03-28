<script>

    const dragging = ({ dataTransfer }) => {
      console.log(dataTransfer);
      // dataTransfer.setDragImage();
    };

</script>

<svg width="1%" height="100%" viewBox="0 0 1 100" draggable="true" on:dragstart={dragging}>
    <line x1="0" y1="0" x2="0" y2="100" stroke="red" stroke-width="1" />
</svg>

<style>
    svg {
        position: absolute;
        z-index: 10;
        top: 0px;
        left: 80%;
        cursor: ew-resize;
    }
</style>