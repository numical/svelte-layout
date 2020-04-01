<script>
    export let width;
    export let opacity;
    import { afterUpdate } from 'svelte';
    import chatHistory from "../data/chatHistory";

    let historyItems = chatHistory.map(s => s.split('.'));
    let history;
    let command;

    const addCommand = ({ target }) => {
        const { value } = target;
        target.value = '';
        historyItems = [...historyItems, [value], [`Sorry, I do not understand '${value}'`]];
    };

    afterUpdate(() => {
        history.scrollTop = history.scrollHeight;
        command.focus();
    });
</script>

<main style="width:{width}; opacity:{opacity}">
    <slot name="toolbar"/>
    <div id="history" class="history" bind:this={history}>
        {#each historyItems as item, i}
            <div class={i % 2 === 0 ? "chatItem userHistoryItem" : "chatItem botHistoryItem"}>
                {#each item as line}
                    <div>{line}</div>
                {/each}
            </div>
        {/each}
    </div>
    <input id="command" placeholder="next command..?" bind:this={command} on:change={addCommand}/>
    <slot name="divider"/>
</main>

<style>
    main {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        color: white;
        background-color: black;
        display: grid;
        grid-template-rows: 2rem calc(100vh - 4rem) 2rem;
        transition: opacity .6s;
    }
    input {
        color: black;
        background-color: white;
        opacity: 100%;
        font-weight: bold;
        border: none;
        margin: 0.25rem;
    }
    .history {
        overflow-y: auto;
    }
    .chatItem {
        padding: 0.5rem;
    }
    .userHistoryItem {
        text-align: left;
        font-style: italic;
    }
    .botHistoryItem {
        text-align: right;
        font-weight: bold;
    }
</style>