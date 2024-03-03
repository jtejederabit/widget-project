<script setup lang="ts">
import { computed } from 'vue'
import GreensPark from '@/components/icons/GreensPark.vue'
import type { Widget } from '@/types/widget'

const props = defineProps<{
  widget: Widget
  className: string
}>()
const darkTextColors = ['beige', 'white']
const textColor = computed(() => {
  return darkTextColors.includes(props.widget.selectedColor)
    ? 'var(--color-green)'
    : 'var(--color-white)'
})
</script>

<template>
  <div class="widget-badge" :class="[className]">
    <div class="widget-badge-logo">
      <GreensPark :color="textColor" />
    </div>
    <div class="widget-badge-description" :style="{ backgroundColor: 'inherit', color: textColor }">
      <h3>This product {{ widget.action }}</h3>
      <h1>{{ widget.amount }} {{ widget.type }}</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.widget-badge {
  display: flex;
  flex-direction: row;
  background-color: var(--color-blue);
  padding-right: 13.89px;
  height: 66px;
  border-radius: 5.95px;
  width: 100%;
  margin-bottom: 5px;
  transition: background-color 0.2s ease-in-out;
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

  .widget-badge-logo {
    padding: 10.3px 11.91px 10.3px 11.91px;
  }

  .widget-badge-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #f9f9f9;
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
    h3 {
      font-weight: 400;
      font-size: 12.41px;
    }
    h1 {
      font-weight: 700;
      font-size: 17px;
    }
  }
}
</style>
