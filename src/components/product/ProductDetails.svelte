<script>
    import { layout } from '../../stores/layoutManager';
    import { products } from '../../stores/productPresenter';
    import { format } from '../../common/currency';
    import { fromTodayToInterval, fromIntervalToText } from '../../common/dates';
    import { fromSVGCoordsToInterval } from '../../common/coords';

    export let product;
    $: style = product === $products.highlighted
            ? `
                background-color: orange;
                opacity:${$layout.overlayPanel ? '0.75' : '1'};
                border-radius:${$layout.overlayPanel ? '0.25rem' : '0'};
              `
            : '';
    $: interval = $layout.dateLineX ? fromSVGCoordsToInterval({ x: $layout.dateLineX }) : fromTodayToInterval();
    $: label = $layout.dateLineX ? `Value at ${fromIntervalToText(interval)}:` : "Today's value:";
</script>

<div class="container" style={style}>
    <div class="title">{product.name}</div>
    <div class="values">
        <div>Start value:</div>
        <div>{format(product.data[0])}</div>
        <div />
        <div>{label}</div>
        <div>{format(product.data[interval])}</div>
        <div />
        <div>End value:</div>
        <div>{format(product.data[product.data.length - 1])}</div>
        <div />
    </div>
</div>

<style>
    .container {
        padding: 0.25rem;
        margin-bottom: 0.5rem;
        color: white;
    }
    .title {
        font-weight: bold;
        padding-bottom: 0.25rem;
    }
    .values {
        display: grid;
        grid-template-columns: auto auto 1fr;
        grid-column-gap: 0.5rem;
    }
    .values div {
       text-align: end;
    }
</style>


