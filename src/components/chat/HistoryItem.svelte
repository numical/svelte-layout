<script>
    export let item;
    export let isUser;
</script>

<div class={isUser ? "historyItem userHistoryItem" : "historyItem botHistoryItem"}>
    {#each item as line}
        <div>{line}</div>
    {/each}
</div>

<style>
    .historyItem {
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