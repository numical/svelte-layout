<script>
  import { ToggleSmall } from 'carbon-components-svelte';
  import { settings } from '../settings';

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

<ToggleSmall
  labelA=""
  labelB=""
  toggled="{getToggled()}"
  on:change="{toggle}"
/>
