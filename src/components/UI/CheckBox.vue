<script setup lang="ts">
defineProps<{
  id: number
  linked: boolean
  handler: () => void
}>()
</script>

<template>
  <div class="checkbox-container">
    <input
      type="checkbox"
      :id="`checkbox-${id}`"
      :checked="linked"
      @change="handler()"
      hidden
    />
    <label :for="`checkbox-${id}`" class="checkbox-label"></label>
    <div class="ripple-shadow"></div>
  </div>
</template>

<style scoped lang="scss">
.checkbox-container {
  display: inline-block;
  vertical-align: middle;
  position: relative;
}
.checkbox-label {
  position: relative;
  cursor: pointer;
  width: 18px;
  height: 18px;
  border: 2px solid var(--color-black);
  background-color: var(--color-white);
  display: inline-block;
  border-radius: 4px;
  transition:
    border-color 0.2s ease-in-out,
    background-color 0.2s ease-in-out;
  z-index: 1;
}

.checkbox-container:hover .ripple-shadow {
  opacity: 0.6;
}
.checkbox-label::after {
  content: '';
  position: absolute;
  width: 6px;
  height: 11px;
  border: solid var(--color-white);
  border-radius: 20%;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
  top: 0;
  left: 4px;
  display: none;
}

input[type='checkbox']:checked + .checkbox-label::after {
  display: block;
}

input[type='checkbox']:checked + .checkbox-label {
  background-color: var(--color-green);
  border-color: var(--color-green);
  transition:
    border-color 0.2s ease-in-out,
    background-color 0.2s ease-in-out;
}
input[type='checkbox']:focus + .checkbox-label {
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

input[type='checkbox']:hover + .checkbox-label {
  background-color: var(--color-green);
}

input[type='checkbox']:not(:checked) + .checkbox-label:hover {
  background-color: #e6e6e6;
}
input[type='checkbox']:checked + .checkbox-label:hover {
  background-color: var(--color-green);
}
</style>
