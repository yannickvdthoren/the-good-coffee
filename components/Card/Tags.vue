<template>
  <li class="category">
    <IconsTags />
    {{ tags[0] }}
  </li>
</template>
<script>
export default {
  name: "Card Tags",
  props: {
    tags: Object,
  },
};
</script>
<style></style>
