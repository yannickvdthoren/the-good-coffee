<template>
  <h2 v-if="section === 'Une'">
    {{ title }}
  </h2>
  <h3 v-else>{{ title }}</h3>
</template>
<script>
export default {
  name: "Card Title",
  props: {
    title: String,
    section: String,
  },
};
</script>
