<template>
  <section :class="{ section, 'header-padding': hasPadding }">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: "Grid Primary",
  props: {
    section: String,
    headerPadding: Boolean,
  },
  data() {
    return {
      hasPadding: this.headerPadding,
    };
  },
};
</script>
<style scoped>
section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: calc(5 * var(--margin));
  width: 100%;
}
@media screen and (max-width: 650px) {
  .header-padding {
    padding-top: 88px;
  }
}
@media screen and (min-width: 651px) {
  section {
    max-width: 1512px;
    padding: 0 100px;
  }
  .header-padding {
    padding-top: 160px;
  }
}
</style>
