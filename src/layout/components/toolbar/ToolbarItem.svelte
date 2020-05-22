<script>
  import { help } from '../../../help/helpManager';
  export let onClick;
  export let helpId;
</script>

<div
  class="toolbarItem"
  on:click="{onClick}"
  on:mouseup|stopPropagation="{$help.loseFocus}"
  on:mouseover="{() => $help.setFocus({ helpId })}"
  on:mouseleave="{$help.loseFocus}"
>
  <span class="tooltip">
    <slot name="tooltip" />
  </span>
  <slot name="icon" />
</div>

<style>
  .toolbarItem {
    position: relative;
    margin-left: 0.25vw;
    border-radius: 0.25em;
    padding: 0.25rem;
  }
  .toolbarItem:hover {
    background-color: darkorange;
  }
  .toolbarItem .tooltip {
    visibility: hidden;
    position: absolute;
    width: 12ch;
    text-align: center;
    color: darkorange;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.6s;
    top: 100%;
    right: 50%;
  }
  .toolbarItem:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
</style>
