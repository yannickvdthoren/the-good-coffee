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
