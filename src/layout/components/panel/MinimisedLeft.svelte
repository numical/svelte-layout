<script>
  import ArrowRight32 from 'carbon-icons-svelte/lib/ArrowRight32'
  import MinimisedButton from './MinimisedButton.svelte';
  import { left } from '../../panelPositions';
  import { SwipeRight } from '../../../gestures/swipes';

  const props = {
    icon: ArrowRight32,
    onClickGesture: SwipeRight,
    restorePosition: left,
    style: 'left: 1vw',
    tooltipStyle: 'text-align: right; left: 50%'
  };

</script>

<MinimisedButton {...props }/>
