<script>
    import MenuLeft from "svelte-material-icons/MenuLeft.svelte";
    import MinimisedButton from './MinimisedButton.svelte';
    import { layout } from '../../stores/layoutManager';
    import { minimisedRight } from '../../stores/layouts';
    import { SwipeLeft } from "../../stores/swipes";

    const onClick = () => {
        console.log(JSON.stringify($layout));
        $layout.swipe(SwipeLeft);
    };
    const style = "right: 1vw";
    const tooltipStyle = "text-align: left; right: 75%"
</script>

{#if $layout.current === minimisedRight}
    <MinimisedButton onClick={onClick} style={style} tooltipStyle={tooltipStyle} >
        <MenuLeft width="2vw" height="2vw" />
    </MinimisedButton>
{/if}