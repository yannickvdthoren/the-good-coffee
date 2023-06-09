<template>
  <Head>
    <Title>the good coffee journal. </Title>
  </Head>
  <NuxtLayout>
    <h1>the good coffee journal.</h1>
    <ContentList :path="'/' + $i18n.locale + '/journal'" :sort="[{ date: -1 }]">
      <template #default="{ list }">
        <ul>
          <AppCard
            :content="article"
            v-for="article in list"
            :key="article._path"
          />
        </ul>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </NuxtLayout>
</template>
<style scoped>
@media screen and (max-width: 650px) {
  h1 {
    padding-top: 32px;
    font-size: var(--xl);
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 32px 0;
  }
}
@media screen and (min-width: 651px) {
  h1 {
    padding-top: 80px;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(calc(100% / 3 - 130px), 1fr)
    );
    gap: 130px;
    margin: 80px 0;
    text-align: left;
  }
}
</style>
