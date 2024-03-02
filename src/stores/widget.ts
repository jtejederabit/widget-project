import { defineStore } from 'pinia'
import { ref } from 'vue'
import { fetchWidgets } from '@/services/fetchWidgets'
import type { Widget } from '@/types/widget'

export const useWidgetStore = defineStore('widgets', () => {
  const widgets = ref<Array<Widget>>([])

  async function initWidgets(): Promise<void> {
    try {
      widgets.value = (await fetchWidgets()) || []
    } catch (error) {
      console.error(error)
    }
  }

  function setActiveWidget(id: number): void {
    widgets.value.forEach((widget: Widget) => {
      if (widget.id !== id && widget.active) {
        widget.active = false
      }
      if (widget.id === id) {
        widget.active = !widget.active
      }
    })
  }

  function toggleLinkToProfile(id: number): void {
    const widget: Widget | undefined = widgets.value.find((widget: Widget) => widget.id === id)
    if (widget) {
      widget.linked = !widget.linked
    }
  }

  function changeWidgetColor(id: number, color: string): void {
    const widget: Widget | undefined = widgets.value.find((widget: Widget) => widget.id === id)
    if (widget) {
      widget.selectedColor = color
    }
  }

  return { widgets, initWidgets, setActiveWidget, toggleLinkToProfile, changeWidgetColor }
})
