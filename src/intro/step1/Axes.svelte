<script>
  const props = {
    xAxis: {
      x1: 50,
      x2: 950,
      y1: 950,
      y2: 950,
    },
    yAxis: {
      x1: 50,
      x2: 50,
      y1: 950,
      y2: 50,
    },
  };
</script>

<line {...props.xAxis}></line>
<line {...props.yAxis}></line>

<style>
  line {
    stroke: darkorange;
    stroke-width: 2;
    stroke-dasharray: 900;
    stroke-dashoffset: 900;
    animation: line-appear 4s linear;
    animation-fill-mode: forwards;
  }
  @keyframes line-appear {
    0% {
      stroke: darkorange;
      stroke-dashoffset: 900;
    }
    50% {
      stroke: darkorange;
      stroke-dashoffset: 0;
    }
    100% {
      stroke: black;
      stroke-dashoffset: 0;
    }
  }
</style>
