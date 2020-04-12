<script>
    import {layout} from '../../stores/layoutManager';

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
    <slot name="toolbar"/>
    <div class="container">
        <svelte:component this={$layout.panelContent.component} />
    </div>
    <slot name="divider"/>
</main>

<style>
    main {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        color: white;
        display: grid;
        grid-template-rows: 2rem calc(100vh - 3rem);
        grid-template-columns: 100%;
        transition: background-color .6s, border-radius .6s, margin .6s;
    }
    .container {
        padding: 0.25rem;
    }
</style>