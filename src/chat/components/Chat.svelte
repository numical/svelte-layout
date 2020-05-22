<script>
  import { tick } from 'svelte';
  import { fade } from 'svelte/transition';
  import chatHistory from '../chatHistory';
  import { layout } from '../../layout/layoutManager';
  import { help } from '../../help/helpManager';
  import HistoryItem from './HistoryItem.svelte';

  $: inputStyle = `
        border-radius:${$layout.overlayPanel ? '0.25rem' : '0'};
        background-color: ${
          $help.currentFocus === 'default' ? 'darkorange' : 'transparent'
        };
    `;

  let historyItems = chatHistory.map(s => s.split('.'));
  let history;

  const addCommand = async ({ target }) => {
    const { value } = target;
    target.value = '';
    historyItems = [
      ...historyItems,
      [value],
      [`Sorry, I do not understand '${value}'`],
    ];
    await tick();
    scrollDown(history);
  };

  const scrollDown = element => {
    element.scrollTop = element.scrollHeight;
  };
</script>

<div class="container" in:fade="{{ duration: 300 }}">
  <div class="history" bind:this="{history}" use:scrollDown>
    {#each historyItems as item, i}
      <HistoryItem {item} isUser="{i % 2 === 0}" />
    {/each}
  </div>
  <input
    placeholder="next command..?"
    style="{inputStyle}"
    on:change="{addCommand}"
  />
</div>

<style>
  .container {
    flex: 1 1 0;
    display: flex;
    flex-flow: column nowrap;
    padding: 0.25rem;
  }
  .history {
    flex: 1 1 0;
    overflow-y: auto;
  }
  input {
    flex: none;
    color: black;
    background-color: darkorange;
    opacity: 100%;
    font-weight: bold;
    border: none;
    padding: 0.25rem;
    transition: border-radius 0.6s;
  }
  input::placeholder {
    color: white;
    opacity: 1;
  }
</style>
