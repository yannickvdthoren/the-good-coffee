<template>
  <p>
    {{ content }}
  </p>
</template>
<script>
export default {
  name: "Card Excerpt",
  props: {
    content: String,
  },
};
</script>
<style scoped>
p {
  font-size: var(--ml);
  letter-spacing: 0.25px;
}
</style>
