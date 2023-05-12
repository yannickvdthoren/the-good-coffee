<template>
  <section class="podcast" v-if="podcast">
    <ContentRenderer>
      <div class="title">
        <h2>{{ podcast.title }}</h2>
        <nuxt-link :to="podcast.url" class="desktop">
          <IconsSpotify /> {{ podcast.label }}
        </nuxt-link>
      </div>
      <picture>
        <img :src="podcast.image" :alt="podcast.alt" />
      </picture>
      <div class="details">
        <h3>{{ podcast.subtitle }}</h3>
        <p v-html="podcast.description"></p>
        <PodcastPlayer :audio="podcast.audio">
          {{ podcast.subtitle }}
        </PodcastPlayer>
      </div>
      <nuxt-link :to="podcast.url" class="mobile">
        <IconsSpotify /> {{ podcast.label }}
      </nuxt-link>
    </ContentRenderer>
  </section>
</template>
<script setup lang="ts">
const { data: podcast } = await useAsyncData("podcast-data", () =>
  queryContent("/en/homepage/podcast").findOne()
);
</script>
<style scoped>
@media screen and (max-width: 650px) {
  section::before {
    content: "";
    grid-area: 2/1/6/4;
    z-index: -1;
    width: 100vw;
    height: 100%;
    margin-left: calc(50% - 50vw);
    background: var(--orange);
  }
  section {
    position: relative;
    display: grid;
    align-items: flex-start;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 1fr;
    grid-template-areas: "image title" "image ." "podcast podcast" "link link" ". .";
    gap: 32px 16px;
    margin: 32px 0 0;
  }
  .title {
    grid-area: title;
  }
  picture {
    grid-area: image;
  }
  .details {
    grid-area: podcast;
    padding-bottom: 24px;
  }
  h3 {
    font-size: var(--ml);
  }
  p {
    margin: 16px 0 24px;
  }
  a {
    grid-area: link;
    justify-self: center;
  }
}
@media screen and (min-width: 651px) {
  section::before {
    content: "";
    position: absolute;
    top: 100px;
    bottom: 100px;
    z-index: -1;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    background: var(--orange);
  }
  section {
    position: relative;
    display: grid;
    align-items: baseline;
    grid-template-columns: 0.4fr 0.6fr 1fr;
    grid-template-rows: 100px auto 100px;
    grid-template-areas: ". image ." "title image podcast" ". image .";
    gap: 0 64px;
    margin: 100px 0;
  }
  .title {
    grid-area: title;
    padding: 64px 0;
  }
  a {
    margin-top: 24px;
    align-items: flex-end;
  }
  picture {
    grid-area: image;
  }
  .details {
    grid-area: podcast;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  p {
    max-width: 60ch;
  }
}
</style>
