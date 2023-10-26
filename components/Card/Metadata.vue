<template>
  <ul class="metadata">
    <CardTags :tags="tags" />
    <CardDate :date="date" />
  </ul>
</template>
<script>
export default {
  name: "Card Metadata",
  props: {
    tags: Object,
    date: String,
  },
};
</script>
<style></style>
