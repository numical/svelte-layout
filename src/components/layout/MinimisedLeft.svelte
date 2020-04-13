<script>
    import MenuRight from "svelte-material-icons/MenuRight.svelte";
    import MinimisedButton from './MinimisedButton.svelte';
    import { layout } from '../../stores/layoutManager';
    import { maximised, minimised, left } from '../panel/panelPositions';
    import { SwipeRight } from "../../stores/swipes";

    const onClick = () => $layout.swipe(SwipeRight);
    const style = "left: 1vw";
    const tooltipStyle = "text-align: right; left: 75%"

    $: visible = ($layout.panelPosition === minimised && $layout.restorePanelPosition === left) || ($layout.panelPosition === maximised);
    $: tooltip = $layout.panelPosition === minimised ? 'show panel' : 'show chart';
</script>

{#if visible}
    <MinimisedButton onClick={onClick} style={style} tooltipStyle={tooltipStyle} tooltip={tooltip} >
        <MenuRight width="2vw" height="2vw" />
    </MinimisedButton>
{/if}