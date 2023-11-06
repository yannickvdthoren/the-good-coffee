<template>
  <button>
    <IconsMenu v-if="!menuState" />
    <IconsClose v-else />
  </button>
</template>
<script>
export default {
  name: "Buttons Menu",
  props: {
    menuState: Boolean,
  },
};
</script>
<style scoped>
button {
  justify-self: end;
  display: flex;
  padding: 8px;
  color: var(--Black);
  background: none;
  border: none;
}
button svg {
  width: 24px;
  height: 24px;
}
</style>
