<template>
  <p>Contents</p>
  <ul>
    <JournalContent
      v-for="item in list"
      :key="item.anchor"
      :title="item.title"
      :anchor="item.anchor"
    />
  </ul>
</template>
<script setup>
const props = defineProps({
  list: Object,
});
</script>
<style scoped>
p {
  display: inline-block;
  margin-bottom: 16px;
  font-size: var(--md);
  font-family: var(--font-serif);
  color: var(--blue);
  line-height: 1;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 40ch;
}
@media (hover: hover) {
  ul:hover li:not(li:hover) {
    opacity: 0.7;
  }
}
</style>
