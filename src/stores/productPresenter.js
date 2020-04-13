import { writable } from 'svelte/store';
import ProductDetails from '../components/info/ProductDetails.svelte';
import ProductsList from '../components/info/ProductsList.svelte';
import { getProducts } from "../data/personalFinancialModel";

const all = getProducts().map((product, id) => ({
    ...product,
    id,
    visible: true
}));

export const products = writable({
    all,
    visible: all,
    display: {
        component: ProductsList
    },
    displayProduct: product => {
        products.update(state => ({
            ...state,
            display: {
                component: ProductDetails,
                product
            }
        }));
    },
    displayProductsList: () => {
        products.update(state => ({
            ...state,
            display: {
                component: ProductsList
            }
        }));
    },
});


