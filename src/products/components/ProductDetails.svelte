<script>
  import { ToggleSmall } from 'carbon-components-svelte';
  import { graph } from '../../graph/graphManager';
  import { layout } from '../../layout/layoutManager';
  import { products } from '../productPresenter';
  import { format } from '../../common/currency';
  import { fromTodayToInterval, fromIntervalToText } from '../../common/dates';

  export let product;

  const toggleVisibility = () => $products.toggleVisibility(product);
  const getToggled = () => product.visible;

  $: highlight =
    $products.highlighted && product.id === $products.highlighted.id;
  $: style = highlight
    ? `
                background-color: darkorange;
                border-radius: ${$layout.overlayPanel ? '0.25rem' : '0'};
                border: solid ${product.colour};
              `
    : '';
  $: titleStyle = highlight
    ? `
            color: ${product.colour}
        `
    : '';
  $: interval = $graph.dateLineX
    ? $products.scaleX.fromSVGCoordsToInterval({ x: $graph.dateLineX })
    : fromTodayToInterval();
  $: label = $graph.dateLineX
    ? `Value at ${fromIntervalToText(interval)}:`
    : "Today's value:";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components@10.9.0/css/carbon-components.min.css"
  />
</svelte:head>
<div class="container" {style}>
  <div class="header">
    <div class="toggle">
      <ToggleSmall
        toggled="{getToggled()}"
        labelA=""
        labelB=""
        on:change="{toggleVisibility}"
      />
    </div>
    <div class="title" style="{titleStyle}">{product.name}</div>
  </div>
  <div class="values">
    <div>Start value:</div>
    <div>{format(product.data[0])}</div>
    <div></div>
    <div>{label}</div>
    <div>{format(product.data[interval])}</div>
    <div></div>
    <div>End value:</div>
    <div>{format(product.data[product.data.length - 1])}</div>
    <div></div>
  </div>
</div>

<style>
  .container {
    padding: 0.25rem;
    margin-bottom: 0.5rem;
    color: white;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .toggle {
    flex: none;
    padding: 0.25rem;
  }
  .title {
    font-weight: bold;
    padding-bottom: 0.25rem;
    padding-left: 0.25rem;
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
