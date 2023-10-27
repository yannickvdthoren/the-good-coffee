<template>
  <li :class="size">
    <IconsTags />
    <span v-for="tag in tags" :key="tag">{{ tag }}</span>
  </li>
</template>
<script>
export default {
  name: "Metadata Tags",
  props: {
    tags: Object,
    size: String,
  },
};
</script>
<style scoped>
li {
  display: inline-flex;
  gap: 8px;
  text-transform: uppercase;
  font-weight: bold;
}
.lg li {
  gap: 16px;
}
.lg svg {
  width: 20px;
  height: 20px;
}
.lg span {
  font-size: 16px;
}
</style>
