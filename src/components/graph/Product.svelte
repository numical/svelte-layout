<script>
  import { fade } from 'svelte/transition';
  import { help } from '../../stores/helpManager';
  import { layout } from '../../stores/layoutManager';
  import { products } from '../../products/productPresenter';
  import { settings } from '../../settings/settings';
  import { info } from '../panel/panelContents';
  import { breakpoint, chart, header, left } from '../../common/svgDimensions';
  import { delayedAction } from '../../common/delayedAction';
  import { raw, smoothed } from './generateProductPoints';

  export let product;

  let endDisplay;

  const displayProduct = () =>
    $layout.panelContent !== info
      ? delayedAction(
          300,
          () => {
            $products.highlightProduct(product);
            $layout.togglePanelContent();
          },
          () => {
            $products.noHighlight();
            $layout.togglePanelContent();
          }
        )
      : delayedAction(
          300,
          () => $products.highlightProduct(product),
          () => $products.noHighlight()
        );
  const mouseOver = () => {
    $help.setFocus('product');
    endDisplay = displayProduct();
  };
  const mouseLeave = () => {
    $help.loseFocus();
    endDisplay();
  };
  const draw = () => $settings['component.graph.product.animate'] ? {
    duration: 1000,
    css: (t, u) => `stroke-dasharray: 1000; stroke-dashoffset: ${u * 1000};`,
  } : undefined;

  $: xOffset =
          left.width + ($products.scaleX.showOriginBreakpoint ? breakpoint.width : 0);
  $: yOffset =
          header.height +
          chart.height -
          ($products.scaleY.showBreakpoint ? breakpoint.height : 0);
  $: generateFn = $settings['component.graph.product.smoothed'] ? smoothed : raw;
  $: points = generateFn(product.data, xOffset, yOffset, $products);

</script>

<polyline
  {points}
  pathLength="1000"
  stroke="{product.colour}"
  on:mouseover="{mouseOver}"
  on:mouseleave="{mouseLeave}"
  transition:draw
></polyline>

<style>
  polyline {
    stroke-width: 2;
    fill: none;
  }
  polyline:hover {
    stroke: darkorange;
  }
</style>
