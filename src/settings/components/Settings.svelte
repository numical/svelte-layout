<script>
  import Warning from 'carbon-icons-svelte/lib/Warning16'
  import { meta } from '../meta';
  import Setting from './Setting.svelte';
</script>

<div>
  <Warning style="fill: white; margin-right: 0.5rem"/>
  Warning: change at your own risk!
</div>
<table>
  <tbody>
  {#each Object.keys(meta) as key (key)}
    <Setting {key} />
  {/each}
  </tbody>
</table>

<style>
  div {
    display: flex;
    align-items: center;
    margin: 1rem 0.5rem;
    vertical-align: center;
  }
  table {
    border: 1px solid white;
    border-collapse: collapse;
    margin: 0.5rem;
  }
</style>
