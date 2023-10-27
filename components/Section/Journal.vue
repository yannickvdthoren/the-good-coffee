<template>
  <section class="journal" v-if="journal">
    <h2>{{ journal.title }}</h2>
    <p>{{ journal.description }}</p>
    <ContentList :path="'/en/journal'" :sort="[{ date: -1 }]">
      <template #default="{ list }">
        <CardArticle
          :content="article"
          v-for="article in list.slice(1, 8)"
          :key="article._path"
        />
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
  .readMore {
    margin-top: 32px;
  }
}
@media screen and (min-width: 651px) {
  section {
    margin: 140px 0;
    display: flex;
    flex-direction: column;
  }
  h2 {
    margin-bottom: 16px;
  }
  p {
    max-width: 60ch;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(calc(100% / 3 - 130px), 1fr)
    );
    gap: 130px;
    margin-top: 80px;
    text-align: left;
  }
  .readMore {
    align-self: center;
    margin-top: 80px;
  }
}
</style>
