<script>
    import { chart, header, margin } from '../../common/svgDimensions';

    const dimensions = {
        x1: 200,
        x2: 200,
        y1: header.height,
        y2: header.height + chart.height + margin
    };
</script>

<line {...dimensions} />

<style>
    line {
        stroke: darkorange;
        stroke-width: 2;
        cursor: url(horizontalResize.png), col-resize;
    }
</style>
