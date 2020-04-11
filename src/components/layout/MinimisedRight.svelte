<script>
    import MenuLeft from "svelte-material-icons/MenuLeft.svelte";
    import MinimisedButton from './MinimisedButton.svelte';
    import { layout } from '../../stores/layoutManager';
    import { maximised, minimised, right } from '../../stores/panelPositions';
    import { SwipeLeft } from "../../stores/swipes";

    const onClick = () => $layout.swipe(SwipeLeft);
    const style = "right: 1vw";
    const tooltipStyle = "text-align: left; right: 75%"

    $: visible = ($layout.panelPosition === minimised && $layout.restorePanelPosition === right) || ($layout.panelPosition === maximised);
    $: tooltip = $layout.panelPosition === minimised ? 'show panel' : 'show chart';
</script>

{#if visible}
    <MinimisedButton onClick={onClick} style={style} tooltipStyle={tooltipStyle} tooltip={tooltip} >
        <MenuLeft width="2vw" height="2vw" />
    </MinimisedButton>
{/if}