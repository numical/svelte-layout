<script>
  import { meta } from '../meta';
  import BooleanSetting from './BooleanSetting.svelte';
  import StringSetting from './StringSetting.svelte';

  export let key;
</script>

<tr>
  <td>{key}</td>
  <td>
    {#if meta[key].isBoolean}
      <BooleanSetting {key} />
    {:else}
      <StringSetting {key} />
    {/if}
  </td>
  <td>{meta[key].description}</td>
</tr>

<style>
  td {
    border: 1px solid white;
    padding: 0.5rem;
  }
</style>
