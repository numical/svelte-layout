<script>
  import { settings } from '../settings/settings';
  import steps from './steps';

  let step = 0;

  const next = () => {
    step += 1;
    if (step === steps.length) {
      close();
    }
  }

  const close = () => {
    $settings.set('app.show.intro', false);
  };
</script>

<main>

  <div class="step">
    <svelte:component this="{steps[step]}" {next} />
  </div>

  <div class="close">
    <a href="#" on:click={close}>Skip intro</a>
  </div>

</main>

<style>
  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
  }
  .step {
    flex: 1 1 0;
  }
  .close {
    flex: none;
    text-align: center;
    padding: 1rem;
  }
  a:hover {
    color: darkorange;
  }
</style>
