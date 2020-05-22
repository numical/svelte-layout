<script>
  import { allPanels } from '../../panelContents';
  import ToggleOverlay from './ToggleOverlay.svelte';
  import PanelOption from './PanelOption.svelte';
</script>

<div>
  {#each allPanels as panelContent}
    <PanelOption {panelContent} />
  {/each}
  <ToggleOverlay />
</div>

<style>
  div {
    flex: none;
    display: flex;
    justify-content: flex-end;
  }
</style>
