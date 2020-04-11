<script>
    import { help } from '../../stores/helpManager';
    import { gesture } from '../../stores/gestureManager';
    import { layout } from '../../stores/layoutManager';

    $: dividerStyle =  `
        ${$layout.restorePanelPosition.graphPos}: -1vw;
    `;
</script>

<div class="divider"
     style={dividerStyle}
     on:mouseover={() => $help.setFocus('divider')}
     on:mousedown={$gesture.startDrag}
     on:touchstart={$gesture.startDrag}
     on:mouseleave={$help.loseFocus}
     on:touchend={$help.loseFocus} />

<style>
    .divider {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 2vw;
        cursor: url(horizontalResize.png), col-resize;
    }
    .divider:focus {
        cursor: url(horizontalResize.png), col-resize;
    }
</style>