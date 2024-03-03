<script setup lang="ts">
import ColorSelector from '@/components/UI/ColorSelector.vue'
import type { Widget } from '@/types/widget'

defineProps<{
  widget: Widget
  toggleColor: (color: string) => void
}>()
</script>

<template>
  <div class="body-option">
    <div class="widget-row">Badge colour</div>
    <color-selector :id="widget.id" :selected-color="widget.selectedColor" :handler="toggleColor" />
  </div>
</template>

<style scoped lang="scss"></style>
