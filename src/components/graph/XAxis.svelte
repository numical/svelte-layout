<script>
    import { help } from '../../stores/helpManager';
    import { layout } from '../../stores/layoutManager';
    import { chart, header, left, margin } from '../../common/svgDimensions';

    const dimensions = {
        line: {
            x1: left.width,
            x2: left.width + chart.width,
            y1: header.height + chart.height,
            y2: header.height + chart.height
        },
        tooltip: {
            x: left.width + chart.width / 2,
            y: header.height + chart.height - 2 * margin
        }
    };

    const toggleDateLine = event => {
        $layout.updateDateLine( $layout.dateLineX ? null : event);
    };

    $: toolTipText = $layout.dateLineX ? "click to hide date line" : "click to show date line";
</script>

<line {...dimensions.line}
      on:mouseover={() => $help.setFocus('date')}
      on:mouseleave={$help.loseFocus}
      on:click={toggleDateLine}
/>
{#if $help.currentFocus === 'date'}
    <text {...dimensions.tooltip}>
        {toolTipText}
    </text>
{/if}

<style>
    line {
        stroke: black;
        stroke-width: 2;
        padding: 5px;
    }
    line:hover {
      stroke: darkorange;
    }
    text {
        fill: darkorange;
        font-size: x-small;
    }
</style>