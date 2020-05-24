<script>
  import { fade } from 'svelte/transition';
  import { help } from '../../../help/helpManager';
  import { layout } from '../../layoutManager';
  import { maximised, minimised } from '../../panelPositions';

  export let icon;
  export let onClickGesture;
  export let restorePosition;
  export let style;
  export let tooltipStyle;

  const helpId = 'minimisedButton';

  $: iconStyle =
    $help.currentFocus === helpId
      ? 'fill:darkorange; transition: fill 0.6s'
      : $layout.panelPosition === minimised
      ? 'fill: black;'
      : 'fill: white;';
  $: visible =
    ($layout.panelPosition === minimised &&
      $layout.restorePanelPosition === restorePosition) ||
    $layout.panelPosition === maximised;
  $: tooltip =
    $layout.panelPosition === minimised ? 'show panel' : 'show chart';
</script>

{#if visible}
  <div
    {style}
    transition:fade
    on:click="{() => $layout.swipe(onClickGesture)}"
    on:mouseup|stopPropagation="{$help.loseFocus}"
    on:mouseover="{() => $help.setFocus(helpId)}"
    on:mouseleave="{$help.loseFocus}"
  >
    <span style="{tooltipStyle}">{tooltip}</span>
    <svelte:component this="{icon}" style="{iconStyle}" />
  </div>
{/if}

<style>
  div {
    position: absolute;
    top: 50vh;
    border: none;
    border-radius: 0.25rem;
    color: white;
    z-index: 1;
  }
  span {
    visibility: hidden;
    position: absolute;
    width: 11ch;
    color: darkorange;
    opacity: 0;
    transition: opacity 0.6s;
    top: 30%;
  }
  div:hover {
    cursor: default;
  }
  div:hover span {
    visibility: visible;
    opacity: 1;
  }
</style>
