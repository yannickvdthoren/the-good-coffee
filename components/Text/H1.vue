<template>
  <h1
    :style="{
      textAlign: textAlign,
      color: color,
      fontSize: fontSize,
      textTransform: textTransform,
      fontFamily: fontFamily,
      letterSpacing: letterSpacing,
    }"
  >
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
    textTransform: {
      type: String,
      default: "initial",
    },
    fontFamily: {
      type: String,
      default: "initial",
    },
    letterSpacing: {
      type: String,
      default: "initial",
    },
  },
};
</script>
<style scoped>
h1 {
  font-weight: bold;
}
</style>
