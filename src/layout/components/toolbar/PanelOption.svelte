<script>
  import ToolbarItem from './ToolbarItem.svelte';
  import { iconProps } from '../../../common/iconProps';
  import { layout } from '../../layoutManager';
  import { help } from '../../../help/helpManager';

  export let panelContent;

  $: style = $help.currentFocus === panelContent.helpId ? 'fill: darkorange; transition: fill 0.6s' : 'fill: white;';
</script>

{#if $layout.panelContent !== panelContent}
  <ToolbarItem
    onClick="{() => $layout.setPanelContent(panelContent)}"
    helpId="{panelContent.helpId}"
  >
    <div slot="tooltip">{panelContent.tooltip}</div>
    <div slot="icon">
      <svelte:component this="{panelContent.icon}" {style} />
    </div>
  </ToolbarItem>
{/if}
