<polyline points="10,10 10,990, 990,990 990,10 10,10"></polyline>

<style>
  polyline {
    fill: none;
    stroke: black;
    stroke-width: 2;
    stroke-dasharray: 4000;
    stroke-dashoffset: 4000;
    animation: border-appear 2s linear;
    animation-fill-mode: forwards;
  }
  @keyframes border-appear {
    to {
      stroke-dashoffset: 0;
    }
  }
</style>
