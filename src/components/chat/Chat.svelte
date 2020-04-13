<script>
    import { afterUpdate } from 'svelte';
    import chatHistory from "../../data/chatHistory";
    import {layout} from '../../stores/layoutManager';
    import {help} from '../../stores/helpManager';
    import HistoryItem from "./HistoryItem.svelte";

    $: inputStyle = `
        border-radius:${$layout.overlayPanel ? '0.25rem' : '0'};
        background-color: ${$help.currentFocus === 'default' ? 'darkorange' : 'transparent'};
    `;

    let historyItems = chatHistory.map(s => s.split('.'));
    let history;
    let command;

    const addCommand = ({target}) => {
        const {value} = target;
        target.value = '';
        historyItems = [...historyItems, [value], [`Sorry, I do not understand '${value}'`]];
    };

    afterUpdate(() => {
        if (history) {
            history.scrollTop = history.scrollHeight;
            command.focus();
        }
    });
</script>

<div class='container'>
    <div class="history" bind:this={history} >
        {#each historyItems as item, i}
            <HistoryItem item={item} isUser={i % 2 === 0} />
        {/each}
    </div>
    <input id="command" placeholder="next command..?" style={inputStyle} bind:this={command} on:change={addCommand}/>
</div>

<style>
    .container {
        display: grid;
        grid-template-rows: calc(100vh - 5rem) 2rem;
        grid-template-columns: 100%;
    }
    input {
        color: black;
        background-color: darkorange;
        opacity: 100%;
        font-weight: bold;
        border: none;
        padding: 0.25rem;
        transition: border-radius .6s;
    }
    input::placeholder {
        color: white;
        opacity: 1;
    }
    .history {
        overflow-y: auto;
    }
</style>