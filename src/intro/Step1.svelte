<script>
  import { fade } from 'svelte/transition';
  import Timeline from './Timeline';
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
  };

  const hideMsg = () =>
    (textStyle = 'animation: intro-text-disappear 0.5s linear;');

  let textMsg = '';
  let textStyle = 'opacity: 0;';

  new Timeline()
    .plus(40, showMsg('This is a line.'))
    .plus(30, hideMsg)
    .plus(5, showMsg('Not very interesting is it?'))
    .plus(20, hideMsg)
    .plus(5, showMsg("Let's make it more interesting"))
    .plus(20, hideMsg)
    .plus(5, showMsg("Let's make it about money."))
    .plus(20, hideMsg)
    .plus(5, showMsg("Let's make it about your money."))
    .start();
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
