<template>
  <li>
    <a :href="props.anchor">
      {{ props.title }}
    </a>
  </li>
</template>
<script setup>
const props = defineProps({
  title: String,
  anchor: String,
});
</script>
<style scoped>
li {
  max-width: 40ch;
  font-size: var(--sm);
  transition: opacity var(--ease);
}
li:hover a {
  color: var(--darkPink);
}
</style>
