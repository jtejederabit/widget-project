<script setup lang="ts">
import { defineEmits } from 'vue'
import type { Widget } from '@/types/widget'

import BadgeSection from '@/components/widgets/sections/BadgeSection.vue'
import LinkProfileSection from '@/components/widgets/sections/LinkProfileSection.vue'
import ColorSelectorSection from '@/components/widgets/sections/ColorSelectorSection.vue'
import ActiveSection from '@/components/widgets/sections/ActiveSection.vue'
const props = defineProps<{
  widget: Widget
}>()

const emit = defineEmits(['toggle-active', 'toggle-linked', 'toggle-color'])
const toggleActive = () => {
  emit('toggle-active', props.widget.id)
}
const toggleLinked = () => {
  emit('toggle-linked', props.widget.id)
}
const toggleColor = (color: string) => {
  emit('toggle-color', { id: props.widget.id, color })
}
</script>

<template>
  <div class="widget">
    <BadgeSection :widget="widget" :class-name="widget.selectedColor" />
    <div class="widget-body">
      <LinkProfileSection :widget="widget" :toggle-linked="toggleLinked" />
      <ColorSelectorSection :widget="widget" :toggle-color="toggleColor" />
      <ActiveSection :widget="widget" :toggle-active="toggleActive" />
    </div>
  </div>
</template>

<style scoped>
.widget {
  display: flex;
  flex-wrap: wrap;
  max-width: 221px;
  max-height: 167px;
  width: 100%;
  height: 100%;
  font-family: 'Cabin', sans-serif;
}

.widget-body {
  color: var(--color-green);
  font-size: 14px;
  width: 100%;
}
</style>
