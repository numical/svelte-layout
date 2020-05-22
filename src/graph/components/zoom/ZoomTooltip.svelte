<script>
  import { fade } from 'svelte/transition';
  import { help } from '../../../help/helpManager';
  import { chart, header, footer, left } from '../../../common/svgDimensions';

  const dimensions = {
    x: left.width + chart.width / 4,
    y: header.height + chart.height + footer.height,
  };
</script>

{#if $help.currentFocus === 'zoomWindow'}
  <text {...dimensions} transition:fade>Click to reset zoom</text>
{/if}

<style>
  text {
    fill: darkorange;
    font-size: 5vh;
    dominant-baseline: hanging;
  }
</style>
