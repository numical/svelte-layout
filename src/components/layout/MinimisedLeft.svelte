<script>
    import MenuRight from "svelte-material-icons/MenuRight.svelte";
    import MinimisedButton from './MinimisedButton.svelte';
    import { layout } from '../../stores/layoutManager';
    import { minimisedLeft } from '../../stores/layouts';
    import { SwipeRight } from "../../stores/swipes";

    const onClick = () => $layout.swipe(SwipeRight);
    const style = "left: 1vw";
    const tooltipStyle = "text-align: right; left: 75%"
</script>

{#if $layout.current === minimisedLeft}
    <MinimisedButton onClick={onClick} style={style} tooltipStyle={tooltipStyle} >
        <MenuRight width="2vw" height="2vw" />
    </MinimisedButton>
{/if}