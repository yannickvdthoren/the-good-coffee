<template>
  <h1 :style="{ textAlign: textAlign, color: color, fontSize: fontSize }">
    <slot></slot>
  </h1>
</template>
<script>
export default {
  name: "Texts H1",
  props: {
    fontSize: {
      type: String,
      default: "var(--xxl)",
    },
    textAlign: {
      type: String,
      default: "left",
    },
    color: {
      type: String,
      default: "var(--Black)",
    },
  },
};
</script>
<style scoped>
h1 {
  font-weight: bold;
}
</style>
