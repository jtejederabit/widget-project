<script setup lang="ts">
import Widgets from './components/WidgetsContainer.vue'
</script>

<template>
  <main class="layout-container">
    <Widgets />
  </main>
</template>

<style scoped lang="scss">
.layout-container {
  display: flex;
  height: 100vh;
}
</style>
