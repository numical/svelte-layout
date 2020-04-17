<script>
    import { help } from '../../stores/helpManager';
    import { gesture } from '../../stores/gestureManager';
    import { layout } from '../../stores/layoutManager';

    const startResize = () => $gesture.setDragBehaviour(event => $layout.resize(event));

    $: dividerStyle =  `
        ${$layout.restorePanelPosition.graphPos}: -1vw;
    `;
</script>

<div class="divider"
     style={dividerStyle}
     on:mouseover={() => $help.setFocus('divider')}
     on:mousedown={startResize}
     on:touchstart={startResize}
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