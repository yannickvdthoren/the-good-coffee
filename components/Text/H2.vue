<template>
  <h2 :style="{ textAlign: textAlign, color: color, fontSize: fontSize }">
    <slot></slot>
  </h2>
</template>
<script>
export default {
  name: "Texts H2",
  props: {
    fontSize: {
      type: String,
      default: "var(--xl)",
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
h2 {
  font-weight: bold;
}
</style>
