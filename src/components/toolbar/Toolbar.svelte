<script>
  import ToggleOverlay from './ToggleOverlay.svelte';
  import ToggleChat from './ToggleContent.svelte';
</script>

<style>
  div {
    flex: none;
    display: flex;
    justify-content: flex-end;
  }
</style>

<div>
  <ToggleChat />
  <ToggleOverlay />
</div>
