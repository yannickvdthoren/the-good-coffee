<template>
  <button>
    <IconsMenu v-if="!menuState" />
    <IconsClose v-else />
  </button>
</template>
<script setup>
const props = defineProps({
  menuState: Boolean,
});
</script>
<style scoped>
button {
  justify-self: end;
  background: none;
  border: none;
  color: var(--blue);
}
</style>
