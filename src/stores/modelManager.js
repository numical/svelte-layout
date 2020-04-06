import { readable } from 'svelte/store';
import { getPension } from "../data/personalFinancialModel";

export const pension = readable(null, set => {
    set(getPension());
    return () => {};
});

