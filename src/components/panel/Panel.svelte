<script>
    import {layout} from '../../stores/layoutManager';
    import Toolbar from "../toolbar/Toolbar.svelte";
    import Divider from "./Divider.svelte";

    const lines = Array.from({ length: 100 }, (_, index) => `line ${index}`);

    $: mainStyle = $layout.overlayPanel
        ? ` ${$layout.restorePanelPosition.panelPos}: 0;
            width:calc(${$layout.panelWidth}% - 0.5rem);
            background-color:rgb(0,0,0,0.75);
            border-radius:0.5rem;
            margin:0.25rem;
            transition: width ${$layout.transition}s`
        : `${$layout.restorePanelPosition.panelPos}: 0;
            width:${$layout.panelWidth}%;
            background-color:black;
            border-radius:0;
            margin:0,
            transition: width ${$layout.transition}s`;
</script>

<main style={mainStyle}>
    <Toolbar />
    <div class="temp">
        {#each lines as line}
            <div>{line}</div>
        {/each}
    </div>
    <Divider />
</main>

<style>
    main {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        color: white;
        display: flex;
        flex-flow: column nowrap;
        transition: background-color .6s, border-radius .6s, margin .6s;
    }
    .temp {
        flex: 1 1 10%;
        background-color: seagreen;
        overflow-y: auto;
    }
</style>