<script>
  import { products } from '../../products/productPresenter';
  import { breakpoint, chart, header, left } from '../../common/svgDimensions';
  import BreakPoint from './BreakPoint.svelte'

  const props = {
    helpId: 'breakpoint-end',
    onClick: $products.scrollRight,
    translate: {
      x: left.width + chart.width - breakpoint.width,
      y: header.height + chart.height - breakpoint.zag
    },
    tooltip: {
      text: "click to scroll right >>",
      textAnchor: 'end',
      translate: { x: -15, y: 25 }
    },
  };
</script>

{#if $products.scaleX.showEndBreakpoint}
  <BreakPoint {props} />
{/if}
