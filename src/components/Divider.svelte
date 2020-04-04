<script>
    import { setFocus, loseFocus } from '../managers/helpManager';
    import { startDrag } from '../managers/dragManager';

    const gainFocus = setFocus.bind(null, 'divider');
</script>

<div class="divider"
     on:mouseover={gainFocus}
     on:mousedown={startDrag}
     on:touchstart={startDrag}
     on:mouseleave={loseFocus}
     on:touchend={loseFocus}
/>

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
</style>