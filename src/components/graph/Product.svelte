<script>
    import { help } from '../../stores/helpManager';
    import { layout } from '../../stores/layoutManager';
    import { products } from '../../stores/productPresenter';
    import { info } from '../panel/panelContents';
    import { chart, header, left } from './dimensions';

    export let product;
    export let colour;
    export let scale;

    let state = 'unselected';

    const xOffset = left.width;
    const yOffset = chart.height + header.height;
    const points = product.data.reduce((points, value, interval) =>
        `${points} ${xOffset + interval * scale.x.intervalWidth},${yOffset - value * scale.y.unitHeight}`,
        "");
    const displayProduct = () => {
        if (state === 'selected') {
            $products.displayProduct(product);
            if ($layout.panelContent !== info) {
                $layout.togglePanelContent();
            }
            state = 'displaying'
        }
    }
    const mouseOver = () => {
        $help.setFocus('product');
        state = 'selected';
        setTimeout(displayProduct, 600);
    };
    const mouseLeave = () => {
        $help.loseFocus();
        if (state === 'displaying') {
            $layout.togglePanelContent();
            $products.displayProductsList();
        }
        state = 'unselected';
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
