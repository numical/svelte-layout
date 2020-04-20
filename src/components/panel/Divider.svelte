<script>
    import { help } from '../../stores/helpManager';
    import { startDrag } from '../../gestures/gestureManager';
    import { layout } from '../../stores/layoutManager';

    const resize = () => startDrag($layout.resize);

    $: dividerStyle =  `
        ${$layout.restorePanelPosition.graphPos}: -1vw;
    `;
</script>

<div class="divider"
     style={dividerStyle}
     on:mouseover={() => $help.setFocus('divider')}
     on:mousedown={resize}
     on:touchstart={resize}
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