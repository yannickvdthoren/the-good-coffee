<template>
  <section :class="section">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: "Grid Secondary",
  props: {
    section: String,
  },
};
</script>
<style scoped>
section {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: calc(5 * var(--margin));
  width: 100%;
}
@media screen and (max-width: 650px) {
}
@media screen and (min-width: 651px) {
  section {
    max-width: 1512px;
  }
}
</style>
