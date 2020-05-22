<script>
  import ArrowLeft32 from 'carbon-icons-svelte/lib/ArrowLeft32'
  import MinimisedButton from './MinimisedButton.svelte';
  import { layout } from '../../layoutManager';
  import { iconProps } from '../../../common/iconProps';
  import { maximised, minimised, right } from '../../panelPositions';
  import { SwipeLeft } from '../../../gestures/swipes';

  const onClick = () => $layout.swipe(SwipeLeft);
  const style = 'right: 1vw';
  const tooltipStyle = 'text-align: left; right: 100%';

  $: visible =
    ($layout.panelPosition === minimised &&
      $layout.restorePanelPosition === right) ||
    $layout.panelPosition === maximised;
</script>

{#if visible}
  <MinimisedButton {onClick} {style} {tooltipStyle}>
    <ArrowLeft32 {...iconProps} />
  </MinimisedButton>
{/if}
