<script>
  import Notebook32 from 'carbon-icons-svelte/lib/Notebook32';
  import OpenPanelFilledRight32 from 'carbon-icons-svelte/lib/OpenPanelFilledRight32';
  import ToolbarItem from './ToolbarItem.svelte';
  import { layout } from '../../layoutManager';
  import { help } from '../../../help/helpManager';

  const helpId = 'toggleOverlay';

  $: style =
    $help.currentFocus === helpId
      ? 'fill: darkorange; transition: fill 0.6s'
      : 'fill: white;';
</script>

<ToolbarItem onClick="{$layout.toggleOverlay}" {helpId}>
  <div slot="tooltip">
    {#if $layout.overlayPanel}side-by-side{:else}overlay chat{/if}
  </div>
  <div slot="icon">
    {#if $layout.overlayPanel}
      <OpenPanelFilledRight32 {style} />
    {:else}
      <Notebook32 {style} />
    {/if}
  </div>
</ToolbarItem>
