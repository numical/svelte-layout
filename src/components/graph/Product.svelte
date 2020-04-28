<script>
  import { help } from '../../stores/helpManager';
  import { layout } from '../../stores/layoutManager';
  import { products } from '../../products/productPresenter';
  import { info } from '../panel/panelContents';
  import { breakpoint, chart, header, left } from '../../common/svgDimensions';
  import { delayedAction } from '../../common/delayedAction';

  export let product;

  let endDisplay;

  $: xOffset =
    left.width + ($products.scaleX.showOriginBreakpoint ? breakpoint.width : 0);
  const yOffset = chart.height + header.height;

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

  $: points = product.data.reduce(
    (points, value, interval) =>
      `${points} ${xOffset +
        interval * $products.scaleX.intervalWidth},${yOffset -
        value * $products.scaleY.unitHeight}`,
    ''
  );
</script>

<polyline
  {points}
  stroke="{product.colour}"
  on:mouseover="{mouseOver}"
  on:mouseleave="{mouseLeave}"
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
