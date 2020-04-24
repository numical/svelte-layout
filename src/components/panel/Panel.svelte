<script>
  import { layout } from '../../stores/layoutManager';
  import Toolbar from '../toolbar/Toolbar.svelte';
  import Divider from './Divider.svelte';

  $: mainStyle = $layout.overlayPanel
    ? ` ${$layout.restorePanelPosition.panelPos}: 0;
            width:calc(${$layout.panelWidth}% - 0.5rem);
            background-color:rgb(0,0,0,0.75);
            border-radius:0.5rem;
            margin:0.25rem;
            transition: width ${$layout.transition}s`
    : `${$layout.restorePanelPosition.panelPos}: 0;
            width:${$layout.panelWidth}%;
            background-color:black;
            border-radius:0;
            margin:0,
            transition: width ${$layout.transition}s`;
</script>

<style>
  main {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    color: white;
    display: flex;
    flex-flow: column nowrap;
    transition: background-color 0.6s, border-radius 0.6s, margin 0.6s;
  }
</style>

<main style={mainStyle}>
  <Toolbar />
  <svelte:component this={$layout.panelContent.component} />
  <Divider />
</main>
