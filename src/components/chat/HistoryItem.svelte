<script>
  export let item;
  export let isUser;
</script>

<style>
  .historyItem {
    padding: 0.25rem;
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

<div
  class={isUser ? 'historyItem userHistoryItem' : 'historyItem botHistoryItem'}>
  {#each item as line}
    <div>{line}</div>
  {/each}
</div>
