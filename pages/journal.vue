<template>
  <Head>
    <Title>the good coffee journal. </Title>
  </Head>
  <NuxtLayout>
    <GridPrimary section="journal" class="journal" :headerPadding="true">
      <div class="header">
        <TextH1>Journal</TextH1>
        <TextParagraph fontSize="var(--ml)"
          >Retrouvez l'ensemble des articles du site sur cette page.
        </TextParagraph>
      </div>
      <ContentList :path="'/'" :sort="[{ date: -1 }]">
        <template #default="{ list }">
          <CardArticle
            :content="article"
            v-for="article in list"
            :key="article._path"
            aspectRatio="1/1.2"
            class="articles"
            metadataSize="md"
            titleSize="var(--ml)"
            borderRadius="8px"
          />
        </template>
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </GridPrimary>
  </NuxtLayout>
</template>
<style scoped>
.journal {
  padding-bottom: 80px;
}
.header {
  grid-column: span 4;
  margin-bottom: 32px;
}
@media screen and (max-width: 650px) {
  .article {
    grid-column: span 4;
  }
}
@media screen and (min-width: 651px) {
}
</style>
