<template>
  <p
    :style="{
      textAlign: textAlign,
      color: color,
      fontSize: fontSize,
      letterSpacing: letterSpacing,
    }"
  >
    <slot></slot>
  </p>
</template>
<script>
export default {
  name: "Texts Paragraph",
  props: {
    fontSize: {
      type: String,
      default: "var(--md)",
    },
    textAlign: {
      type: String,
      default: "left",
    },
    color: {
      type: String,
      default: "var(--Black)",
    },
    letterSpacing: {
      type: String,
      default: "0",
    },
  },
};
</script>
<style scoped></style>
