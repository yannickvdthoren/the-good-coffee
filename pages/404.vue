<template>
  <Head>
    <Title>404 | the good coffee. </Title>
  </Head>
  <NuxtLayout>
    <GridPrimary>
      <div class="title">
        <TextH1> 404 </TextH1>
        <TextParagraph fontSize="var(--ml)">
          La page que vous recherchez n'existe plus ou a été déplacée.
          <br />Vous pouvez revenir à
          <LinkPrimary link="/">la page d'accueil</LinkPrimary> pour découvrir
          encore plus de contenu.
        </TextParagraph>
      </div>
    </GridPrimary>
  </NuxtLayout>
</template>
<script>
export default {
  name: "Page 404",
};
</script>
<style scoped>
.title {
  grid-column: span 4;
  padding: 120px 0 80px;
}
h1 {
  margin-bottom: 32px;
}
a {
  text-decoration: underline;
}
</style>
