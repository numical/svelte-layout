<script>
  import { chart, header, left } from '../../common/svgDimensions';

  const dimensions = {
    x1: left.width,
    x2: left.width,
    y1: header.height,
    y2: header.height + chart.height,
  };
</script>

<line {...dimensions}></line>

<style>
  line {
    stroke: black;
    stroke-width: 1;
  }
</style>
