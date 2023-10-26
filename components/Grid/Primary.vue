<template>
  <section :class="section">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: "Grid Primary",
  props: {
    section: String,
  },
};
</script>
<style scoped>
section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: calc(10 * var(--margin));
  max-width: 1512px;
  padding: 0 100px;
}
</style>
