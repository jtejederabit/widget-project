<script setup lang="ts">
defineProps<{
  id: number
  active: boolean
  handler: () => void
}>()
</script>

<template>
  <div class="toggle-button" :class="{ active: active }" @click="handler()">
    <div class="ripple-shadow" :style="{ top: '-3.9px', left: '-3.1px' }" />
    <div class="toggle-knob"></div>
  </div>
</template>

<style scoped lang="scss">
.toggle-button {
  width: 46.49px;
  height: 23.25px;
  background-color: #f9f9f9;
  border: rgba(175, 198, 189, 0.59) solid 0.568px;
  box-shadow: 0 0.884669303894043px 5.897795677185059px 0 #00000026 inset;
  transition:
    transform 0.2s ease-in-out,
    background-color 0.2s ease-in-out;
  border-radius: 25px;
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    .ripple-shadow {
      opacity: 0.6;
    }
  }

  .toggle-knob {
    width: 23.5px;
    height: 23.5px;
    background-color: #f9f9f9;
    border-radius: 29.49px;
    outline: rgba(242, 235, 219, 0.59) solid 0.68px;
    box-shadow: 0 0 1.3672161102294922px 0 #00000059;
    position: absolute;
    top: -0.5px;
    left: 0;
    transition: transform 0.2s ease-in-out;
    z-index: 3;
  }

  &.active {
    background-color: var(--color-green);
    border: #b0b0b0 solid 0.68px;
    box-shadow: 0 1.0254120826721191px 6.836080551147461px 0 #00000026 inset;

    .toggle-knob {
      transform: translateX(23.5px);
      outline: var(--color-green) solid 0.68px;
      box-shadow: 0 0 1.3672161102294922px 0 #00000059;
    }

    .ripple-shadow {
      transform: translateX(23.5px);
    }
  }
}
</style>
