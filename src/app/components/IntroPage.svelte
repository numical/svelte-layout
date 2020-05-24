<script>
  import { settings } from '../../settings/settings';

  const close = () => {
    $settings.set('app.show.intro', false);
  };
</script>

<main>

  <div>
    <h1>Intro Page</h1>
  </div>

  <div class="skip">
    <a href="#" on:click={close}>Skip intro</a>
  </div>

</main>

<style>
  main {
    width: 100%;
    height: 100%;
  }
  div {
    margin: auto;
    text-align: center;
  }
  .skip {
    position: fixed;
    bottom: 5vh;
    width: 100%;
  }
</style>
