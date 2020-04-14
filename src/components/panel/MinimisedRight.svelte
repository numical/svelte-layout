<script>
    import MenuLeft from "svelte-material-icons/MenuLeft.svelte";
    import MinimisedButton from './MinimisedButton.svelte';
    import { layout } from '../../stores/layoutManager';
    import { iconProps } from '../../common/iconProps';
    import { maximised, minimised, right } from './panelPositions';
    import { SwipeLeft } from "../../common/swipes";

    const onClick = () => $layout.swipe(SwipeLeft);
    const style = "right: 1vw";
    const tooltipStyle = "text-align: left; right: 100%"

    $: visible = ($layout.panelPosition === minimised && $layout.restorePanelPosition === right) || ($layout.panelPosition === maximised);
    $: tooltip = $layout.panelPosition === minimised ? 'show panel' : 'show chart';
</script>

{#if visible}
    <MinimisedButton onClick={onClick} style={style} tooltipStyle={tooltipStyle} tooltip={tooltip} >
        <MenuLeft {...iconProps}  />
    </MinimisedButton>
{/if}