<script>
    const props = {
        xAxisArrow: {
            x1: 950,
            y1: 950,
            x2: 940,
            y2: 960,
        },
        yAxisArrow: {
            x1: 50,
            y1: 50,
            x2: 40,
            y2: 60,
        },
        currency: {
            x: 35,
            y: 80,
        },
        time: {
            x: 895,
            y: 965,
        },
    };
</script>

<line {...props.xAxisArrow}></line>
<line {...props.yAxisArrow}></line>stroke
<text {...props.currency}>£</text>
<text {...props.time}>years</text>

<style>
    line {
        stroke-width: 2;
        opacity: 0;
        animation: arrow-appear 2s linear;
        animation-fill-mode: forwards;
    }
    text {
        opacity: 0;
        animation: label-appear 2s linear;
        animation-fill-mode: forwards;
    }
    @keyframes arrow-appear {
        0% {
            stroke: darkorange;
            opacity: 0;
        }
        100% {
            stroke: black;
            opacity: 1;
        }
    }
    @keyframes label-appear {
        0% {
            color: darkorange;
            opacity: 0;
        }
        100% {
            color: black;
            opacity: 1;
        }
    }
</style>