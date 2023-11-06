<template>
  <ContentList :path="'/'" :sort="[{ date: -1 }]" v-slot="{ list }">
    <GridPrimary section="Une">
      <CardArticle
        :content="article"
        v-for="article in list.slice(0, 1)"
        :key="article._path"
        section="Une"
        :excerpt="true"
        metadataSize="lg"
        :showButton="true"
        aspectRatio="unset"
        titleSize="var(--xxxl)"
      />
    </GridPrimary>
  </ContentList>
</template>
<script>
export default {
  name: "Home Une",
};
</script>
<style scoped>
.une {
  grid-column: span 4;
  min-height: 110vh;
}
</style>
