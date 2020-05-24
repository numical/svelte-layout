<script>
  import { fade } from 'svelte/transition';
  import { settings } from '../../settings/settings';
  import { debug } from '../gestureManager';
</script>

{#if $settings['gesture.display'] && !$settings['app.show.intro'] && $debug}
  <div out:fade>{$debug}</div>
{/if}

<style>
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    color: darkorange;
    opacity: 0.5;
    font-size: 10vh;
  }
</style>
