<script>
  import { fade } from 'svelte/transition';
  import Timeline from './Timeline';
  export let next;

  const props = {
    border: {
      points: '10,10 10,990, 990,990 990,10 10,10',
      fill: 'none',
    },
    line: {
      x1: 50,
      x2: 950,
      y1: 500,
      y2: 500,
      class: 'line',
    },
    text: {
      x: 500,
      y: 480,
      class: 'mainText',
    },
    xAxis: {
      x1: 50,
      x2: 950,
      y1: 950,
      y2: 950,
      class: 'line',
    },
    yAxis: {
      x1: 50,
      x2: 50,
      y1: 950,
      y2: 50,
      class: 'line',
    },
    xAxisArrow: {
      x1: 950,
      y1: 950,
      x2: 940,
      y2: 960,
      class: 'arrow',
    },
    yAxisArrow: {
      x1: 50,
      y1: 50,
      x2: 40,
      y2: 60,
      class: 'arrow',
    },
    currency: {
      x: 35,
      y: 80,
      class: 'label',
    },
    time: {
      x: 895,
      y: 965,
      class: 'label',
    },
  };

  const showMsg = msg => () => {
    if (Array.isArray(msg)) {
      textMsg = msg;
    } else {
      textMsg = [msg, '', ''];
    }
    textStyle = 'animation: intro-text-appear 2s linear;';
  };

  const hideMsg = () =>
    (textStyle = 'animation: intro-text-disappear 0.5s linear;');

  const incrementSubStep = description => () => (subStep = subStep + 1);

  const deEmphasiseText = () =>
          (emphasisTextStyle = 'animation: intro-deemphasise-text 2s ease-out; animation-fill-mode: forwards;');

  let textMsg = ['', '', ''];
  let textStyle = 'opacity: 0;';
  let emphasisTextStyle = '';
  let subStep = 0;

  new Timeline()
    .plus(20, incrementSubStep('show line and text'))
    .plus(20, showMsg('This is a line.'))
    .plus(30, hideMsg)
    .plus(5, showMsg('Not very interesting is it?'))
    .plus(20, hideMsg)
    .plus(5, showMsg("Let's make it more interesting..."))
    .plus(20, hideMsg)
    .plus(5, showMsg("Let's make it about money."))
    .plus(20, hideMsg)
    .plus(5, showMsg(["Let's make it about ", 'your', 'money.']))
    .plus(10, incrementSubStep('show axes'))
    .plus(10, deEmphasiseText)
    .plus(10, incrementSubStep('add axes labels'))
    .start();
</script>

<polyline {...props.border}></polyline>
{#if subStep > 0}
  <line {...props.line}></line>
  <text {...props.text} style="{textStyle}">
    {textMsg[0]}
    <tspan style="{emphasisTextStyle}">{textMsg[1]}</tspan>
    {textMsg[2]}
  </text>
{/if}
}
{#if subStep > 1}
  <line {...props.xAxis}></line>
  <line {...props.yAxis}></line>
{/if}
}
{#if subStep > 2}
  <line {...props.xAxisArrow}></line>
  <line {...props.yAxisArrow}></line>stroke
  <text {...props.currency}>£</text>
  <text {...props.time}>years</text>
{/if}

<style>
  polyline {
    stroke: black;
    stroke-width: 2;
    stroke-dasharray: 4000;
    stroke-dashoffset: 4000;
    animation: border-appear 2s linear;
    animation-fill-mode: forwards;
  }
  .line {
    stroke: darkorange;
    stroke-width: 2;
    stroke-dasharray: 900;
    stroke-dashoffset: 900;
    animation: line-appear 4s linear;
    animation-fill-mode: forwards;
  }
  .mainText {
    text-anchor: middle;
    font-size: x-large;
    animation-fill-mode: forwards;
  }
  tspan {
    fill: darkorange;
    font-weight: bold;
  }
  .arrow {
    stroke-width: 2;
    opacity: 0;
    animation: arrow-appear 2s linear;
    animation-fill-mode: forwards;
  }
  .label {
    opacity: 0;
    animation: label-appear 2s linear;
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
      animation: label-appear 2s linear;
      animation-fill-mode: forwards;
    }
  }
  @keyframes border-appear {
    to {
      stroke-dashoffset: 0;
    }
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
  @keyframes arrow-appear {
    0% {
      stroke: darkorange;
      opacity: 0;
    }
    100% {
      stroke: black;
      opacity: 1;
    }
  }
  @keyframes label-appear {
    0% {
      color: darkorange;
      opacity: 0;
    }
    100% {
      color: black;
      opacity: 1;
    }
  }
</style>
