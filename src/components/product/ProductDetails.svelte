<script>
  import { graph } from '../../stores/graphManager';
  import { layout } from '../../stores/layoutManager';
  import { products } from '../../stores/productPresenter';
  import { format } from '../../common/currency';
  import { fromTodayToInterval, fromIntervalToText } from '../../common/dates';
  import { fromSVGCoordsToInterval } from '../../common/coords';

  export let product;
  $: style =
    product === $products.highlighted
      ? `
                background-color: darkorange;
                border-radius: ${$layout.overlayPanel ? '0.25rem' : '0'};
                border: solid ${product.colour};
              `
      : '';
  $: titleStyle =
    product === $products.highlighted
      ? `
            color: ${product.colour}
        `
      : '';
  $: interval = $graph.dateLineX
    ? fromSVGCoordsToInterval({ x: $graph.dateLineX })
    : fromTodayToInterval();
  $: label = $graph.dateLineX
    ? `Value at ${fromIntervalToText(interval)}:`
    : "Today's value:";
</script>

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
    grid-template-columns: 16ch auto 1fr;
    grid-column-gap: 0.5rem;
  }
  .values div {
    text-align: end;
  }
</style>

<div class="container" {style}>
  <div class="title" style={titleStyle}>{product.name}</div>
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
