<script>
  import { products } from '../../../products/productPresenter';
  import {
    breakpoint,
    chart,
    header,
    left,
  } from '../../../common/svgDimensions';
  import { SwipeRight } from '../../../gestures/swipes';
  import HorizontalBreakPoint from './HorizontalBreakPoint.svelte';

  const props = {
    helpId: 'breakpoint-end',
    onClick: () => $products.scroll(SwipeRight),
    translate: {
      x: left.width + chart.width - breakpoint.width,
      y: header.height + chart.height - breakpoint.zag,
    },
    tooltip: {
      text: 'click to scroll right >>',
      textAnchor: 'end',
      translate: { x: -15, y: 25 },
    },
  };
</script>

{#if $products.scaleX.showEndBreakpoint}
  <HorizontalBreakPoint {props} />
{/if}
