<template>
  <button>
    <IconsMenu v-if="!menuState" />
    <IconsClose v-else />
  </button>
</template>
<script>
export default {
  props: {
    menuState: Boolean,
  },
};
</script>
<style scoped>
button {
  justify-self: end;
  background: none;
  border: none;
  color: var(--blue);
}
</style>
