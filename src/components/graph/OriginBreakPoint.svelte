<script>
  import { products } from '../../products/productPresenter';
  import { breakpoint, chart, header, left } from '../../common/svgDimensions';
  import HorizontalBreakPoint from './HorizontalBreakPoint.svelte'

  const props = {
    helpId: 'breakpoint-origin',
    onClick: $products.scrollLeft,
    translate: {
      x: left.width,
      y: header.height + chart.height - breakpoint.zag,
    },
    tooltip: {
      text: "<< click to scroll left",
      textAnchor: 'start',
      translate: { x: 15, y: 25 }
    },
  };
</script>

{#if $products.scaleX.showOriginBreakpoint}
  <HorizontalBreakPoint {props} />
{/if}
