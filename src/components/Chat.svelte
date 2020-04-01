<script>
    export let width;
    export let overlay;
    import { afterUpdate } from 'svelte';
    import chatHistory from "../data/chatHistory";

    $: mainStyle =  `
        width:${width};
        background-color:rgb(0,0,0,${overlay ? 0.75 : 1});
        border-radius:${overlay ? '0.5rem' : '0'};
        margin:${overlay ? '0.25rem' : '0'};
    `;

    $: inputStyle = `border-radius:${overlay ? '0.25rem' : '0'};`;

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

<main style={mainStyle}>
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
    <input id="command" placeholder="next command..?" style={inputStyle} bind:this={command} on:change={addCommand}/>
    <slot name="divider"/>
</main>

<style>
    main {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        color: white;
        display: grid;
        grid-template-rows: 2rem calc(100vh - 4.5rem) 2rem;
        grid-template-columns: 100%;
        transition: background-color .6s, border-radius .6s, margin 0.6s;
    }
    input {
        color: black;
        background-color: white;
        opacity: 100%;
        font-weight: bold;
        border: thin solid black;
        margin: 0.25rem;
        transition: border-radius .6s;
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