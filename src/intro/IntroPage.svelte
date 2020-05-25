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

  <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
    <svelte:component this="{steps[step]}" {next} />
  </svg>

  <div>
    <a href="#" on:click="{close}">Skip intro</a>
  </div>

</main>

<style>
  main {
    width: 100%;
    height: 100%;
  }
  svg {
    height: calc(100% - 2rem);
    width: 100%;
  }
  div {
    height: 2rem;
    text-align: center;
  }
  a:hover {
    color: darkorange;
  }
</style>
