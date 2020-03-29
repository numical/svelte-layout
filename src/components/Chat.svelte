<script>
    export let width;
    import chatHistory from "../data/chatHistory";
    let history = chatHistory.map(s => s.split('.'));

    const focus = el => el.focus();

    const addCommand = ({ target }) => {
        const { value } = target;
        target.value = '';
        history = [...history, [value], [`Sorry, I do not understand '${value}'`]];
    }



</script>

<main style="width:{width}">
    <div id="history" class="history">
        {#each history as item, i}
            <div class={i % 2 === 0 ? "chatItem userHistoryItem" : "chatItem botHistoryItem"}>
                {#each item as line}
                    <div>{line}</div>
                {/each}
            </div>
        {/each}
    </div>
    <input id="command" class="chatItem" use:focus on:change={addCommand}/>
    <slot></slot>
</main>

<style>
    main {
        color: white;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: black;
        display: flex;
        flex-direction: column;
    }
    input {
        color: white;
        background-color: black;
        font-weight: bold;
        border: none;
        padding: 0.5rem;
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