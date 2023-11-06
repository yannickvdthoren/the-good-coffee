<template>
  <h3 :style="{ textAlign: textAlign, color: color, fontSize: fontSize }">
    <slot></slot>
    <span>
      <slot name="country"></slot>
    </span>
    <slot name="flag"></slot>
  </h3>
</template>
<script>
export default {
  name: "Texts H3",
  props: {
    fontSize: {
      type: String,
      default: "var(--lg)",
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
h3 {
  font-weight: bold;
}
span {
  color: rgba(23, 43, 51, 0.5);
  font-family: var(--sans-serif);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
