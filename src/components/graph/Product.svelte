<script>
    import { help } from '../../stores/helpManager';
    import { layout } from '../../stores/layoutManager';
    import { products } from '../../stores/productPresenter';
    import { info } from '../panel/panelContents';
    import { chart, header, left } from '../../common/svgDimensions';
    import { delayedAction } from '../../common/delayedAction';

    export let product;
    export let colour;
    export let scale;

    let endDisplay;

    const xOffset = left.width;
    const yOffset = chart.height + header.height;
    const points = product.data.reduce((points, value, interval) =>
        `${points} ${xOffset + interval * scale.x.intervalWidth},${yOffset - value * scale.y.unitHeight}`,
        "");
    const displayProduct = () => ($layout.panelContent !== info)
        ? delayedAction(
            300,
            () => {
                $products.highlightProduct(product);
                $layout.togglePanelContent();
            },
            () => {
                $products.noHighlight();
                $layout.togglePanelContent();
            })
        : delayedAction(
            300,
            () => $products.highlightProduct(product),
            () =>  $products.noHighlight()
            );
    const mouseOver = () => {
        $help.setFocus('product');
        endDisplay = displayProduct();
    };
    const mouseLeave = () => {
        $help.loseFocus();
        endDisplay();
    };
</script>

<polyline points={points}
          stroke={colour}
          on:mouseover={mouseOver}
          on:mouseleave={mouseLeave} />

<style>
    polyline {
        stroke-width: 2;
        fill: none;
    }
    polyline:hover {
        stroke: darkorange;
    }
</style>
