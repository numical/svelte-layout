<script>
    import { chart, header, left } from './dimensions';

    const dimensions = {
        x1: left.width,
        x2: left.width,
        y1: header.height,
        y2: header.height + chart.height
    };
</script>

<line {...dimensions} stroke="black" stroke-width="2" />
