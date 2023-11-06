<template>
  <GridPrimary section="journal" class="journal">
    <TextH2
      textTransform="uppercase"
      color="var(--darkPink)"
      fontFamily="var(--sans-serif)"
      fontSize="var(--ml)"
    >
      Nos derniers articles
    </TextH2>
    <ContentList :path="'/'" :sort="[{ date: -1 }]">
      <template #default="{ list }">
        <CardArticle
          :content="article"
          v-for="article in list.slice(1, 3)"
          :key="article._path"
          aspectRatio="1.5/1"
          class="articles first"
          metadataSize="md"
          titleSize="var(--xl)"
          borderRadius="8px"
        />
        <CardArticle
          :content="article"
          v-for="article in list.slice(3, 7)"
          :key="article._path"
          aspectRatio="1/1.2"
          class="articles"
          metadataSize="md"
          titleSize="var(--ml)"
          borderRadius="8px"
        />
      </template>
      <template #not-found>
        <TextParagraph> No articles found. </TextParagraph>
      </template>
    </ContentList>
  </GridPrimary>
</template>
<script setup lang="ts">
const { data: journal } = await useAsyncData("journal-data", () =>
  queryContent("/en/homepage/journal").findOne()
);
</script>
<style scoped>
.journal h2 {
  grid-column: 1 / span 4;
  margin: 56px 0 16px;
}

@media screen and (max-width: 650px) {
  .articles {
    grid-column: span 4;
  }
}
@media screen and (min-width: 651px) {
  .articles.first {
    grid-column: span 2;
  }
}
</style>
