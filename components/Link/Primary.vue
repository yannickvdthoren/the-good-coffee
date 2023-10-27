<template>
  <NuxtLink :to="link" v-if="type === 'nuxt'">
    <slot></slot>
    <IconsLink />
  </NuxtLink>
  <a :href="link" v-else>
    <slot></slot>
    <IconsLink />
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
<style scoped>
a {
  display: inline-flex;
  flex-direction: column;
  gap: 0;
  font-size: var(--ml);
  letter-spacing: 0.25px;
}
a svg {
  width: 100%;
  height: auto;
  margin-top: -6px;
  color: var(--pink);
}
@media (hover: hover) {
  a:hover svg {
    color: var(--black);
  }
}
</style>
