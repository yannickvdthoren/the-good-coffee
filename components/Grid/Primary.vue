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
  gap: calc(5 * var(--margin));
}
@media screen and (max-width: 650px) {
}
@media screen and (min-width: 651px) {
  section {
    max-width: 1512px;
    padding: 0 100px;
  }
}
</style>
