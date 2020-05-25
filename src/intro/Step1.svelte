<script>
  import { fade } from 'svelte/transition';
  export let next;

  const borderProps = {
    points: '10,10 10,990, 990,990 990,10 10,10',
    fill: 'none',
  };

  const lineProps = {
    x1: 100,
    x2: 900,
    y1: 500,
    y2: 500,
  };

  const textProps = {
    x: 500,
    y: 480,
  };

  const words = [
    'This is a line.',
    'This is a line.',:wq

    'This is a line.',
    'This is a line.',
    'Not very interesting is it?',
    "Let's make it more interesting",
    "Let's make it about money.",
    "Let's make it about your money.",
  ];

  let clockTick = 0;

  let tick = () => setTimeout(() => {
    clockTick += 1;
    if (clockTick < 7) {
      tick();
    }
  }, 2000);
  tick();

</script>

<polyline {...borderProps}></polyline>
<line {...lineProps}></line>
<text {...textProps}>{words[clockTick]}</text>

<style>
  polyline {
    stroke: black;
    stroke-width: 2;
    stroke-dasharray: 4000;
    stroke-dashoffset: 4000;
    animation: border-appear 2s linear;
    animation-fill-mode: forwards;
  }
  line {
    stroke: darkorange;
    stroke-width: 2;
    stroke-dasharray: 800;
    stroke-dashoffset: 800;
    animation: line-appear 8s linear;
    animation-fill-mode: forwards;
  }
  text {
    text-anchor: middle;
    font-size: x-large;
    opacity: 0;
    animation: text-appear 8s linear;
    animation-fill-mode: forwards;
  }
  @keyframes border-appear {
    to {
      stroke-dashoffset: 0;
    }
  }
  @keyframes line-appear {
    37.5% {
      stroke: darkorange;
      stroke-dashoffset: 800;
    }
    62.5% {
      stroke: darkorange;
      stroke-dashoffset: 0;
    }
    75% {
      stroke: darkorange;
      stroke-dashoffset: 0;
    }
    100% {
      stroke: black;
      stroke-dashoffset: 0;
    }
  }
  @keyframes text-appear {
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
