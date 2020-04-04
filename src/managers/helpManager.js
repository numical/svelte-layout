import { writable } from 'svelte/store';

export const help = writable({
    currentFocus: 'default',
    setFocus: focus => help.update(help => ({
        ...help,
        currentFocus: focus
    })),
    loseFocus: () => help.update( help => ({
        ...help,
        currentFocus: 'default'
    }))
});
