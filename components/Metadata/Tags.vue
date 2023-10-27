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
  gap: var(--md);
}
.lg svg {
  width: var(--lg);
  height: var(--lg);
}
.lg span {
  font-size: var(--md);
}
</style>
