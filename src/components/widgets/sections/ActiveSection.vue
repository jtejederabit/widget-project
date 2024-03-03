<script setup lang="ts">
import Toggle from '@/components/UI/ToggleButton.vue'
import type { Widget } from '@/types/widget'

defineProps<{
  widget: Widget
  toggleActive: () => void
}>()
</script>

<template>
  <div class="body-option">
    <div class="widget-row">Activate badge</div>
    <Toggle :id="widget.id" :active="widget.active" :handler="toggleActive" />
  </div>
</template>

<style scoped lang="scss"></style>
