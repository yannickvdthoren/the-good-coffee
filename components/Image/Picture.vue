<template>
  <picture
    :style="{ aspectRatio: aspectRatio, borderRadius: borderRadius }"
    :class="{ 'full-bleed': fullBleed === true }"
  >
    <ImageImg :src="src" :alt="alt" :objectFit="objectFit" />
  </picture>
</template>
<script>
export default {
  name: "Image Picture",
  props: {
    src: String,
    alt: String,
    aspectRatio: {
      type: String,
      default: "3/4",
    },
    borderRadius: {
      type: String,
      default: "0px",
    },
    objectFit: {
      type: String,
      default: "Cover",
    },
    fullBleed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
.full-bleed {
  width: 100vw;
  margin-left: var(--full-bleed);
}
</style>
