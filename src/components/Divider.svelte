<script>
    import { help } from '../stores/helpManager';
    import { gesture } from '../stores/gestureManager';
</script>

<div class="divider"
     on:mouseover={() => $help.setFocus('divider')}
     on:mousedown={$gesture.startDrag}
     on:touchstart={$gesture.startDrag}
     on:mouseleave={$help.loseFocus}
     on:touchend={$help.loseFocus}
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