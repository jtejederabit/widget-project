<script setup lang="ts">
import { ref } from 'vue'
defineProps<{
  id: number
  selectedColor: string
  handler: (color: string) => void
}>()
const colors = ref(['blue', 'green', 'beige', 'white', 'black'])
</script>

<template>
  <div class="color-options">
    <div
      v-for="color in colors"
      :key="color"
      :class="['color-option', color, { active: selectedColor === color }]"
      @click="handler(color)"
    ></div>
  </div>
</template>

<style scoped lang="scss">
.color-options {
  display: flex;
}

.color-option {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &.blue {
    background-color: var(--color-blue);
  }
  &.beige {
    background-color: var(--color-beige);
  }
  &.green {
    background-color: var(--color-green);
  }
  &.white {
    background-color: var(--color-white);
  }
  &.black {
    background-color: var(--color-black);
  }

  &.active {
    box-shadow: inset 0 0 0 2px #b0b0b0;
    transition: box-shadow 0.3s ease-in-out;
    opacity: 1;
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>
