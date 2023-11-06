<template>
  <figure
    :style="{ aspectRatio: aspectRatio, borderRadius: borderRadius }"
    :class="{ 'full-bleed': fullBleed === true }"
  >
    <ImageImg :src="src" :alt="alt" :objectFit="objectFit" />
    <figcaption v-if="credit">
      Photo by
      <a :href="link" target="_blank">{{ credit }}</a>
    </figcaption>
  </figure>
</template>
<script>
export default {
  name: "Image figure",
  props: {
    src: String,
    alt: String,
    credit: String,
    link: String,
    fullBleed: {
      type: Boolean,
      default: false,
    },
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
  },
};
</script>
<style scoped>
.full-bleed {
  width: 100vw;
  margin-left: var(--full-bleed);
}
</style>
