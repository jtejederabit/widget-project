<script setup lang="ts">
import { defineEmits, computed } from 'vue'
import type { Widget } from '@/types/widget'
import GreensPark from '@/components/icons/GreensPark.vue'
import InfoIcon from '@/components/icons/InfoIcon.vue'

import Checkbox from '@/components/UI/CheckBox.vue'
import Toggle from '@/components/UI/ToggleButton.vue'
import ColorSelector from '@/components/UI/ColorSelector.vue'
import Tooltip from './WidgetTooltip.vue'

const props = defineProps<{
  widget: Widget
}>()

const emit = defineEmits(['toggle-active', 'toggle-linked', 'toggle-color'])
const darkTextColors = ['beige', 'white']
const toggleActive = () => {
  emit('toggle-active', props.widget.id)
}
const toggleLinked = () => {
  emit('toggle-linked', props.widget.id)
}
const toggleColor = (color: string) => {
  emit('toggle-color', { id: props.widget.id, color })
}

const textColor = computed(() => {
  return darkTextColors.includes(props.widget.selectedColor)
    ? 'var(--color-green)'
    : 'var(--color-white)'
})
</script>

<template>
  <div class="widget">
    <div class="widget-badge" :class="[widget.selectedColor]">
      <div class="widget-badge-logo">
        <GreensPark :color="textColor" />
      </div>
      <div
        class="widget-badge-description"
        :style="{ backgroundColor: 'inherit', color: textColor }"
      >
        <h3>This product {{ widget.action }}</h3>
        <h1>{{ widget.amount }} {{ widget.type }}</h1>
      </div>
    </div>
    <div class="widget-body">
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
      <div class="body-option">
        <div class="widget-row">Badge colour</div>
        <div class="color-options">
          <color-selector
            :id="widget.id"
            :selected-color="widget.selectedColor"
            :handler="toggleColor"
          />
        </div>
      </div>
      <div class="body-option">
        <div class="widget-row">Activate badge</div>
        <Toggle :id="widget.id" :active="widget.active" :handler="toggleActive" />
      </div>
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

.widget-body {
  color: var(--color-green);
  font-size: 14px;
  width: 100%;
  .body-option {
    padding: 5px 0 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .widget-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
}
</style>
