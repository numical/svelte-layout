<script>
  import { help } from '../../../help/helpManager';
  import { start, DRAG } from '../../../gestures/gestureManager';
  import { layout } from '../../layoutManager';

  const drag = start.bind(null, { [DRAG]: $layout.resize });

  $: dividerStyle = `
        ${$layout.restorePanelPosition.graphPos}: -1vw;
    `;
</script>

<div
  class="divider"
  style="{dividerStyle}"
  on:mouseover="{() => $help.setFocus('divider')}"
  on:mousedown="{drag}"
  on:touchstart="{drag}"
  on:mouseleave="{$help.loseFocus}"
  on:touchend="{$help.loseFocus}"
></div>

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
