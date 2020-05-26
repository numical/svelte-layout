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
  
  const showMsg = msg => () => {
    textMsg = msg;
    textStyle = 'animation: intro-text-appear 2s linear;';
  }
  const hideMsg = () => textStyle = 'animation: intro-text-disappear 1s linear;';

  const timeLine = {
    4: showMsg('This is a line.'),
    7: hideMsg,
    8: showMsg('Not very interesting is it?'),
    10: hideMsg,
    11: showMsg("Let's make it more interesting"),
    13: hideMsg,
    14: showMsg("Let's make it about money."),
    16: hideMsg,
    17: showMsg("Let's make it about your money.")
  };

  const tick = () => setTimeout(() => {
    clockTick += 1;
    if(timeLine[clockTick]) {
      timeLine[clockTick]();
    }
    if (clockTick < 20) {
      tick();
    }
  }, 1000);

  let textMsg =  '';
  let textStyle = 'opacity: 0;';
  let clockTick = 0;

  tick();
</script>

<polyline {...borderProps}></polyline>
<line {...lineProps}></line>
<text {...textProps} style="{textStyle}">{textMsg}</text>

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
</style>
