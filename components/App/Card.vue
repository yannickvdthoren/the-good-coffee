<template>
  <li>
    <nuxt-link :to="content._path">
      <picture>
        <img :src="content.image.url" />
      </picture>
      <div class="title">
        <p class="date">{{ content.publish }}</p>
        <h3>{{ content.title }}</h3>
      </div>
      <p>{{ content.description }}</p>
    </nuxt-link>
  </li>
</template>
<script setup>
const props = defineProps({
  content: Object,
});
</script>
<style scoped>
@media screen and (max-width: 650px) {
  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 32px;
  }
  a {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "image title title" "image desc desc";
    gap: 8px 16px;
  }
  picture {
    grid-area: image;
    aspect-ratio: 3/4;
  }
  .date {
    margin-bottom: 4px;
    font-size: var(--xs);
    color: var(--lightBlue);
    line-height: 1;
  }
  .title {
    grid-area: title;
    align-self: flex-end;
  }
  p {
    grid-area: desc;
    align-self: flex-start;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: var(--sm);
  }
}
@media screen and (min-width: 651px) {
  a {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .date {
    margin-top: 16px;
    font-size: var(--sm);
    color: var(--lightBlue);
    line-height: 1;
  }
  h3 {
    margin: 0px 0 16px;
  }
}
</style>
