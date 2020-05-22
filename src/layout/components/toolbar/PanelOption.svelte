<script>
  import ToolbarItem from './ToolbarItem.svelte';
  import { iconProps } from '../../../common/iconProps';
  import { layout } from '../../layoutManager';

  export let panelContent;
</script>

{#if $layout.panelContent !== panelContent}
  <ToolbarItem
    onClick="{() => $layout.setPanelContent(panelContent)}"
    helpId="{panelContent.helpId}"
  >
    <div slot="tooltip">{panelContent.tooltip}</div>
    <div slot="icon">
      <svelte:component this="{panelContent.icon}" {...iconProps} />
    </div>
  </ToolbarItem>
{/if}
