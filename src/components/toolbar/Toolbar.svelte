<script>
  import ToggleOverlay from './ToggleOverlay.svelte';
  import ToggleChat from './ToggleContent.svelte';
</script>

<div>
  <ToggleChat />
  <ToggleOverlay />
</div>

<style>
  div {
    flex: none;
    display: flex;
    justify-content: flex-end;
  }
</style>
