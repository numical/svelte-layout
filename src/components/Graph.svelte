<script>
    export let width;
    export let transition;
</script>

<svg style="width:{width}; transition: width {transition}s" width="100%" height="100%" viewBox="0 0 1200 1200" preserveAspectRatio="none">
    <line x1="25" y1="25" x2="25" y2="1175" stroke="black" stroke-width="2" />
    <line x1="25" y1="1175" x2="1175" y2="1175" stroke="black" stroke-width="2" />
    <polyline points="100,900 200,1000 300,800 400,600 500,540 600,600 700,500 800,575 900,400 1000,300 1150,100" stroke="blue" stroke-width="2" fill="none" />
</svg>


<style>
    svg {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
    }
</style>