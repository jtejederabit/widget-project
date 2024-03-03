<script setup lang="ts">
import WidgetCard from '@/components/widgets/WidgetCard.vue'
import { useWidgetStore } from '@/stores/widget'
import { onMounted } from 'vue'

const widgetStore = useWidgetStore()

onMounted(async () => {
  await widgetStore.initWidgets()
})
const handleToggleActive = (id: number) => {
  widgetStore.setActiveWidget(id)
}
const handleToggleLinked = (id: number) => {
  widgetStore.toggleLinkToProfile(id)
}

const handleToggleColor = (payload: {
  id: number
  color: 'white' | 'black' | 'blue' | 'green' | 'beige'
}) => {
  widgetStore.changeWidgetColor(payload.id, payload.color)
}
</script>

<template>
  <div class="main-container">
    <div class="header">
      <h3>Per product widgets</h3>
    </div>
    <div class="widgets-container">
      <widget-card
        v-for="widget in widgetStore.widgets"
        :key="widget.id"
        :widget="widget"
        @toggle-active="handleToggleActive"
        @toggle-linked="handleToggleLinked"
        @toggle-color="handleToggleColor"
      />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  width: 851px;
  height: 316px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow:
    0 0.7777777910232544px 2.9907407760620117px 0 rgba(0, 0, 0, 0.03),
    0 3.422222137451172px 6.192592620849609px 0 rgba(0, 0, 0, 0.05),
    0 8.399999618530273px 12.350000381469727px 0 rgba(0, 0, 0, 0.06),
    0 16.177778244018555px 24.207406997680664px 0 rgba(0, 0, 0, 0.08),
    0 27.22222137451172px 44.50925827026367px 0 rgba(0, 0, 0, 0.1),
    0 42px 76px 0 rgba(0, 0, 0, 0.13);
  max-width: 851px;
  max-height: 316px;
  margin: auto;

  .header {
    padding: 0 36px 0 36px;
    width: 100%;
    align-self: self-start;
    text-align: left;
    :after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: #b0b0b0;
      margin-bottom: 20px;
    }
    h3 {
      font-family: 'Cabin', sans-serif;
      font-weight: 700;
      font-size: 30px;
      color: var(--color-black);
    }
  }
}

@media (max-width: 600px) {
  .main-container {
    max-height: none;
    height: auto;
    width: auto;
  }
}

.widgets-container {
  display: flex;
  justify-content: space-between;
  gap: 37px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
}
</style>
