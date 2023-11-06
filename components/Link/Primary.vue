<template>
  <NuxtLink :to="link" v-if="type === 'nuxt'">
    <slot></slot>
  </NuxtLink>
  <a :href="link" v-else>
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: "Link Nuxt",
  props: {
    type: String,
    link: String,
  },
};
</script>
