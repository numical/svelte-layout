<script>
  import ArrowLeft32 from 'carbon-icons-svelte/lib/ArrowLeft32';
  import MinimisedButton from './MinimisedButton.svelte';
  import { right } from '../../panelPositions';
  import { SwipeLeft } from '../../../gestures/swipes';

  const props = {
    icon: ArrowLeft32,
    onClickGesture: SwipeLeft,
    restorePosition: right,
    style: 'right: 1vw',
    tooltipStyle: 'text-align: left; right: 50%',
  };
</script>

<MinimisedButton {...props} />
