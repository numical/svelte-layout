<script>
    import MenuLeft from "svelte-material-icons/MenuLeft.svelte";
    import MinimisedButton from './MinimisedButton.svelte';
    import { layout } from '../../stores/layoutManager';
    import { minimised } from '../../stores/layouts';
    import { SwipeLeft } from "../../stores/swipes";

    const onClick = () => $layout.swipe(SwipeLeft);
    const style = "right: 1vw";
    const tooltipStyle = "text-align: left; right: 75%"
</script>

{#if $layout.current === minimised && $layout.chatRight}
    <MinimisedButton onClick={onClick} style={style} tooltipStyle={tooltipStyle} >
        <MenuLeft width="2vw" height="2vw" />
    </MinimisedButton>
{/if}