<script>
  import Warning from 'carbon-icons-svelte/lib/Warning16'
  import { help } from '../../help/helpManager';
  import { meta } from '../meta';
  import Setting from './Setting.svelte';

  $: divStyle = $help.currentFocus === 'settings' ? 'color: darkorange' : 'color: white';
  $: iconStyle = `fill: ${$help.currentFocus === 'settings' ? 'darkorange' : 'white'}; margin-right: 0.5rem; transition: fill 0.6s;`;
</script>

<div style="{divStyle}">
  <Warning style="{iconStyle}"/>
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
    transition: color 0.6s;
  }
  table {
    border: 1px solid white;
    border-collapse: collapse;
    margin: 0.5rem;
  }
</style>
