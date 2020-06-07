<polygon points="940,50 950,50 950,60"></polygon>

<style>
  polygon {
    stroke: black;
    fill:black;
    opacity: 0;
    animation: arrow-appear 0.5s linear;
    animation-fill-mode: forwards;
  }
  @keyframes arrow-appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
