<script>
  import ArrowRight32 from 'carbon-icons-svelte/lib/ArrowRight32'
  import MinimisedButton from './MinimisedButton.svelte';
  import { layout } from '../../layoutManager';
  import { iconProps } from '../../../common/iconProps';
  import { maximised, minimised, left } from '../../panelPositions';
  import { SwipeRight } from '../../../gestures/swipes';

  const onClick = () => $layout.swipe(SwipeRight);
  const style = 'left: 1vw';
  const tooltipStyle = 'text-align: right; left: 100%';

  $: visible =
    ($layout.panelPosition === minimised &&
      $layout.restorePanelPosition === left) ||
    $layout.panelPosition === maximised;

</script>

{#if visible}
  <MinimisedButton {onClick} {style} {tooltipStyle}>
    <ArrowRight32 {...iconProps} />
  </MinimisedButton>
{/if}
