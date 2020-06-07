<script>
  import { fade } from 'svelte/transition';
  import Timeline from '../Timeline';
  import Border from './Border.svelte';
  import Axes from './Axes.svelte';
  import AxesLabels from './AxesLabels.svelte';
  import LineArrow from './LineArrow.svelte';
  import Skip from './Skip.svelte';
  import Exit from './Exit.svelte';

  export let close;
  export let next;

  let svgStyle = '';
  let lineStyle = '';
  let textMsg = ['', '', ''];
  let textStyle = 'opacity: 0;';
  let emphasisTextStyle = '';
  let subStep = 0;

  const incrementSubStep = description => () => (subStep = subStep + 1);

  const showMsg = msg => () => {
    textMsg = Array.isArray(msg) ? msg : [msg, '', ''];
    textStyle = 'animation: text-appear 2s linear;';
  };

  const hideMsg = () =>
          (textStyle =
                  'animation: text-disappear 0.5s linear; animation-fill-mode: forwards;');

  const deEmphasiseText = () =>
          (emphasisTextStyle =
                  'animation: deemphasise-text 2s ease-out; animation-fill-mode: forwards;');

  const tilt = () => {
    lineStyle = 'transition: 2s linear; transform: rotate(-45deg) scale(1.41);';
    textStyle = 'transition: 2s linear; transform: rotate(-45deg);';
  };

  const dim = () => {
    svgStyle = 'transition: 2s linear; opacity: 10%';
  };

  new Timeline()
          .plus(20, incrementSubStep('show line and text'))
          .plus(20, showMsg('This is a line.'))
          .plus(30, hideMsg)
          .plus(5, showMsg('Not very interesting is it?'))
          .plus(30, hideMsg)
          .plus(5, showMsg('Let\'s make it more interesting...'))
          .plus(30, hideMsg)
          .plus(10, incrementSubStep('show axes'))
          .plus(5, showMsg('Let\'s make it about money.'))
          .plus(20, incrementSubStep('add axes labels'))
          .plus(10, hideMsg)
          .plus(5, showMsg(['Let\'s make it about ', 'your', 'money.']))
          .plus(20, deEmphasiseText)
          .plus(20, hideMsg)
          .plus(5, showMsg('We want your money to do this...'))
          .plus(10, tilt)
          .plus(20, incrementSubStep('add line arrow'))
          .plus(20, dim)
          .plus(5, incrementSubStep('exit options'))
          .start();
</script>

<svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid" style="{svgStyle}">

  <Border />
  {#if subStep > 0}
    <line x1=50 x2=950 y1=500 y2=500 style="{lineStyle}"></line>
    <text x=500 y =480 style="{textStyle}">
      {textMsg[0]}
      <tspan style="{emphasisTextStyle}">{textMsg[1]}</tspan>
      {textMsg[2]}
    </text>
  {/if}
  }
  {#if subStep > 1}
    <Axes />
  {/if}

  {#if subStep > 2}
    <AxesLabels />
  {/if}

  {#if subStep > 3}
    <LineArrow />
  {/if}
</svg>

{#if subStep > 4 }
 <Exit {close} {next} />
{/if}

{#if subStep < 5}
  <Skip {close} />
{/if}

<style>
  svg {
    height: calc(100% - 2rem);
    width: 100%
  }
  line {
    stroke: darkorange;
    stroke-width: 2;
    stroke-dasharray: 900;
    stroke-dashoffset: 900;
    animation: line-appear 4s linear;
    animation-fill-mode: forwards;
    transform-origin: center;
  }
  text {
    text-anchor: middle;
    font-size: x-large;
    animation-fill-mode: forwards;
    transform-origin: center;
  }
  tspan {
    fill: darkorange;
    font-weight: bold;
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
  @keyframes -global-text-appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes -global-text-disappear {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes -global-deemphasise-text {
    0% {
      fill: darkorange;
      font-weight: bold;
    }
    100% {
      fill: black;
      font-weight: normal;
    }
  }
</style>
