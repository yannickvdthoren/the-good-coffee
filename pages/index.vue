<template>
  <NuxtLayout>
    <SectionMarketBanner class="marketBanner" />
    <SectionUne class="une" />
    <SectionJournal class="journal" />
    <LinkPrimary link="/journal" type="nuxt" class="readMore">
      <ButtonReadMore maxWidth="13ch"> See more articles </ButtonReadMore>
    </LinkPrimary>
  </NuxtLayout>
</template>
<script>
export default {
  name: "index",
};
</script>
<style scoped>
.une {
  order: 1;
}
.marketBanner {
  order: 2;
}
.journal {
  order: 3;
}
.readMore {
  order: 4;
  margin-top: 56px;
  margin-bottom: 80px;
}
</style>
