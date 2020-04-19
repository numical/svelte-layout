import { writable } from "svelte/store";
import { getProducts } from "../data/personalFinancialModel";

const colours = ["darkblue", "blue", "cornflowerblue", "lightblue"];

const all = getProducts().map((product, id) => ({
  ...product,
  id,
  colour: colours[id % colours.length],
  visible: true,
}));

export const products = writable({
  all,
  visible: all,
  highlighted: undefined,
  highlightProduct: (product) => {
    products.update((state) => ({
      ...state,
      highlighted: product,
    }));
  },
  noHighlight: () => {
    products.update((state) => ({
      ...state,
      highlighted: undefined,
    }));
  },
});
