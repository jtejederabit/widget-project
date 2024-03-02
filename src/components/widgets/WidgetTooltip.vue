<template>
  <div class="tooltip-container" @mouseenter="hover = true" @mouseleave="hover = false">
    <slot name="trigger"></slot>
    <transition name="fade">
      <div class="tooltip-content" v-show="hover">
        <span
          >This widget links directly to your public profile so that you can easily share your
          impact with your customers. Turn it off here if you do not want the badge to link to
          it.</span
        >
        <button class="tooltip-action-button">View Public Profile</button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hover = ref(false)
</script>

<style scoped lang="scss">
.tooltip-container {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  align-self: self-start;
}

.tooltip-content {
  width: 248px;
  height: 162px;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-white);
  color: var(--color-black);
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
  z-index: 100;
  box-shadow:
    0 0.7777777910232544px 2.9907407760620117px 0 #00000003,
    0 3.422222137451172px 6.192592620849609px 0 #00000005,
    0 8.399999618530273px 12.350000381469727px 0 #00000006,
    0 16.177778244018555px 24.207406997680664px 0 #00000008,
    0 27.22222137451172px 44.50925827026367px 0 #0000000a,
    0 42px 76px 0 #0000000d;
}
.tooltip-action-button {
  font-weight: 700;
  background-color: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
  color: var(--color-green);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
