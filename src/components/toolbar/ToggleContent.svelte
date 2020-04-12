<script>
    import ToolbarItem from './ToolbarItem.svelte';
    import { iconProps } from './commonProps';
    import { layout } from '../../stores/layoutManager';
</script>

<ToolbarItem onClick={$layout.togglePanelContent} helpId='togglePanelContent'>
    <div slot="tooltip">
        {$layout.panelContent.tooltip}
    </div>
    <div slot="icon">
        <svelte:component this={$layout.panelContent.icon} {...iconProps} />
    </div>
</ToolbarItem>
