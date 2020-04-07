<script>
    import { chart, header, left } from './dimensions';

    const dimensions = {
        x1: left.width,
        x2: left.width + chart.width,
        y1: header.height + chart.height,
        y2: header.height + chart.height
    };
</script>

<line {...dimensions} />

<style>
    line {
        stroke: black;
        stroke-width: 2;
    }
</style>