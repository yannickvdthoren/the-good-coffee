<template>
  <blockquote>
    <slot></slot>
  </blockquote>
</template>
<script>
export default {
  name: "Texts Quote",
};
</script>
<style scoped>
blockquote {
  color: var(--Black, var(--Black, #172b33));
  text-align: center;
  font-family: Sofia Pro;
  font-size: var(--xxl);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
