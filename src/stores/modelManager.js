import {get, readable} from 'svelte/store';
import { getProducts } from "../data/personalFinancialModel";

export const products = readable(null, set => {
    const products = getProducts();
    set(products);
    return () => {};
});

