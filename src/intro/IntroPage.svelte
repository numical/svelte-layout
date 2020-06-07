<script>
  import { fade } from 'svelte/transition';
  import { settings } from '../settings/settings';
  import steps from './steps';

  let step = 0;

  const next = () => {
    step += 1;
    if (step === steps.length) {
      close();
    }
  };

  const close = () => {
    step = 0;
    $settings.set('app.show.intro', false);
  };
</script>

<main transition:fade={{duration: 1000}}>
  <svelte:component this="{steps[step]}" {next} {close} />
</main>

<style>
  main {
    width: 100%;
    height: 100%;
  }
</style>
