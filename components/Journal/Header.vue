<template>
  <header>
    <ul>
      <li v-for="tag in props.tags">
        {{ tag }}
      </li>
    </ul>
    <h1><slot name="title"></slot></h1>
    <p class="desc"><slot name="desc"></slot></p>
    <p class="date">Published <slot name="date"></slot></p>
    <figure v-if="props.image">
      <img :src="props.image.src" :alt="props.image.alt" />
      <figcaption v-if="props.image.credit">
        Photo by
        <a :href="props.image.link" target="_blank">{{ props.image.credit }}</a>
      </figcaption>
    </figure>
  </header>
</template>
<script setup>
const props = defineProps({
  image: Object,
  tags: Array,
});
</script>
<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}
li {
  padding: 8px;
  color: var(--darkPink);
  background: var(--lightestPink);
  border-radius: var(--border-radius);
  line-height: 1;
  font-size: var(--sm);
}

@media screen and (max-width: 650px) {
  h1 {
    font-size: var(--xl);
    margin: 16px 0;
  }
  .desc {
    font-size: var(--md);
  }
  .date {
    font-size: var(--sm);
    color: var(--lightBlue);
  }
  figure {
    width: 100vw;
    margin: 24px 0;
  }
}
@media screen and (min-width: 651px) {
  h1 {
    margin: 24px 0;
  }
  .desc {
    max-width: 71ch;
    font-size: var(--lg);
  }
  .date {
    font-size: var(--sm);
    color: var(--lightBlue);
  }
  figure {
    position: relative;
    width: 90%;
    aspect-ratio: 16/9;
    overflow: hidden;
  }
  figcaption {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    background: white;
  }
}
</style>
