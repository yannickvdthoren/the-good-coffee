<template>
  <img :src="src" :alt="alt" :style="{ objectFit: objectFit }" />
</template>
<script>
export default {
  name: "Image Img",
  props: {
    src: String,
    alt: String,
    objectFit: String,
  },
};
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
