<script>
  import Pin from 'svelte-material-icons/Pin.svelte';
  import PinOutline from 'svelte-material-icons/PinOutline.svelte';
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
      <Pin {...iconProps} />
    {:else}
      <PinOutline {...iconProps} />
    {/if}
  </div>
</ToolbarItem>
