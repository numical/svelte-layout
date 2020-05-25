<script>
  export let next;

  const svgProps = {
    viewBox: "0 0 1000 1000",
    preserveAspectRatio: "none"
  }

  const borderProps = {
    points: "10,10 10,990, 990,990 990,10 10,10",
    stroke: "black",
    strokeWidth: 2,
    fill: "none"
  }
</script>

<svg {...svgProps}>

  <polyline {...borderProps} />
  <line x1="100" x2="900" y1="100" y2="100" />
  <line x1="100" x2="900" y1="500" y2="500" />
  <line x1="100" x2="900" y1="900" y2="900" />
</svg>

<style>
  svg {
    background-color: lightblue;
  }
  line {
    stroke: darkorange;
  }
</style>
