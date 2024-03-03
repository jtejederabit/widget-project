<script setup lang="ts">
import Tooltip from '@/components/widgets/WidgetTooltip.vue'
import InfoIcon from '@/components/icons/InfoIcon.vue'
import Checkbox from '@/components/UI/CheckBox.vue'
import type { Widget } from '@/types/widget'

defineProps<{
  widget: Widget
  toggleLinked: () => void
}>()
</script>

<template>
  <div class="body-option">
    <div class="widget-row">
      Link to Public Profile
      <Tooltip>
        <template v-slot:trigger>
          <InfoIcon />
        </template>
      </Tooltip>
    </div>
    <checkbox :id="widget.id" :handler="toggleLinked" :linked="widget.linked" />
  </div>
</template>

<style scoped lang="scss"></style>
