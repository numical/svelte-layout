<script>
  export let close;
  export let next;
</script>

<div class="top">
  <a href="#" on:click="{next}">Learn more</a>
</div>
<div class="bottom">
  <a href="#" on:click="{close}">Start app</a>
</div>

<style>
  div {
    position: absolute;
    width: 100%;
    text-align: center;
  }
  .top {
    top: 20%
  }
  .bottom {
    bottom: 20%;
  }
  a {
    font-size: xx-large;
    animation: appear 2s linear;
    animation-fill-mode: forwards;
  }
  a:hover {
    color: darkorange;
  }
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
