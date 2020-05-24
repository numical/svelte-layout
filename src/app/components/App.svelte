<script>
  import { settings } from '../../settings/settings';
  import IntroPage from '../../intro/IntroPage.svelte';
  import MainPage from './MainPage.svelte';

  $: showIntro = $settings['app.show.intro'];
</script>

{#if showIntro}
  <IntroPage />
{:else}
  <MainPage />
{/if}
