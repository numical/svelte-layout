<script>
  import { ToggleSmall } from 'carbon-components-svelte';
  import { settings } from '../settings';
  import { help } from '../../help/helpManager';

  export let key;

  const getToggled = () => $settings[key];
  const toggle = () => $settings.set(key, !$settings[key]);
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components@10.9.0/css/carbon-components.min.css"
  />
</svelte:head>

<div
  on:mouseup|stopPropagation="{$help.loseFocus}"
  on:mouseover="{() => $help.setFocus('settings')}"
  on:mouseleave="{$help.loseFocus}"
>
  <ToggleSmall
    labelA=""
    labelB=""
    toggled="{getToggled()}"
    on:change="{toggle}"
  />
</div>
