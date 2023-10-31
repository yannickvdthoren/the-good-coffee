<template>
  <article :class="article">
    <slot></slot>
  </article>
</template>
<script>
export default {
  name: "Grid Secondary",
  props: {
    article: String,
  },
};
</script>
<style scoped>
article {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: calc(5 * var(--margin));
  width: 100%;
  align-items: flex-start;
}
@media screen and (max-width: 650px) {
}
@media screen and (min-width: 651px) {
  article {
    max-width: 1512px;
    padding: 98.79px 100px 80px;
  }
}
</style>
