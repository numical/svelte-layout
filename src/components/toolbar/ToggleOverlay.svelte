<script>
  import Notebook32  from 'carbon-icons-svelte/lib/Notebook32'
  import OpenPanelFilledRight32 from 'carbon-icons-svelte/lib/OpenPanelFilledRight32'
  import ToolbarItem from './ToolbarItem.svelte';
  import { iconProps } from '../../common/iconProps';
  import { layout } from '../../stores/layoutManager';
</script>

<ToolbarItem onClick="{$layout.toggleOverlay}" helpId="toggleOverlay">
  <div slot="tooltip">
    {#if $layout.overlayPanel}side-by-side{:else}overlay chat{/if}
  </div>
  <div slot="icon">
    {#if $layout.overlayPanel}
      <OpenPanelFilledRight32 {...iconProps} />
    {:else}
      <Notebook32 {...iconProps} />
    {/if}
  </div>
</ToolbarItem>
