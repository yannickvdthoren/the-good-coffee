<template>
  <ul>
    <MetadataTags :tags="tags" :size="size" v-if="tags !== ''" />
    <MetadataDate :date="date" :size="size" v-if="tags !== ''" />
  </ul>
</template>
<script>
export default {
  name: "Metadata Primary",
  props: {
    tags: Object,
    date: String,
    size: {
      type: String,
      default: "sm",
    },
  },
};
</script>
<style scoped>
ul {
  display: inline-flex;
  gap: 16px;
}
</style>
