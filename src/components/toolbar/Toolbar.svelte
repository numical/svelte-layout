<script>
  import ToggleOverlay from './ToggleOverlay.svelte';
  import ToggleContent from './ToggleContent.svelte';
</script>

<div>
  <ToggleContent />
  <ToggleOverlay />
</div>

<style>
  div {
    flex: none;
    display: flex;
    justify-content: flex-end;
  }
</style>
