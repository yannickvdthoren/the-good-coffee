<template>
  <p
    :style="{
      textAlign: textAlign,
      color: color,
      fontSize: fontSize,
      textTransform: textTransform,
      fontFamily: fontFamily,
      letterSpacing: letterSpacing,
      fontWeight: fontWeight,
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
      default: "var(--xl)",
    },
    textAlign: {
      type: String,
      default: "left",
    },
    color: {
      type: String,
      default: "var(--black)",
    },
    textTransform: {
      type: String,
      default: "initial",
    },
    fontFamily: {
      type: String,
      default: "var(--sans-serif)",
    },
    letterSpacing: {
      type: String,
      default: "initial",
    },
    fontWeight: {
      type: String,
      default: "400",
    },
  },
};
</script>
