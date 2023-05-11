<template>
  <section class="journal" v-if="journal">
    <h2>{{ journal.title }}</h2>
    <p>{{ journal.description }}</p>
    <ContentList :path="'/' + $i18n.locale + '/journal'">
      <template #default="{ list }">
        <ul>
          <li v-for="article in list.slice(0, 3)" :key="article._path">
            <nuxt-link :to="article._path">
              <picture>
                <img :src="article.image" />
              </picture>
              <h3>{{ article.title }}</h3>
              <p>{{ article.description }}</p>
            </nuxt-link>
          </li>
        </ul>
        <nuxt-link :to="journal.url" class="readMore">
          {{ journal.label }} <IconsArrow />
        </nuxt-link>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </section>
</template>
<script setup lang="ts">
const { data: journal } = await useAsyncData("journal-data", () =>
  queryContent("/en/homepage/journal").findOne()
);
</script>
<style scoped>
@media screen and (max-width: 650px) {
  section {
    margin: 64px 0;
  }
  h2 {
    margin-bottom: 16px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 32px;
  }
  ul a {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "image title title" "image desc desc";
    gap: 8px 16px;
  }
  picture {
    grid-area: image;
    aspect-ratio: 3/4;
  }
  h3 {
    grid-area: title;
  }
  ul p {
    grid-area: desc;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: var(--sm);
  }
  .readMore {
    margin-top: 32px;
  }
}
@media screen and (min-width: 651px) {
  section {
    margin: 224px 0;
    display: flex;
    flex-direction: column;
  }
  h2 {
    margin-bottom: 16px;
  }
  ul {
    display: flex;
    gap: 130px;
    margin-top: 80px;
    text-align: left;
  }
  ul a {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .readMore {
    align-self: center;
    margin-top: 80px;
  }
}
</style>
