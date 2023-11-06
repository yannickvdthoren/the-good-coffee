<template>
  <header>
    <ImageFigure
      :src="image.src ? image.src : ''"
      :alt="image.alt ? image.alt : ''"
      :credit="image.credit ? image.credit : ''"
      :link="image.link ? image.link : ''"
      :fullBleed="true"
    />

    <TextH1 fontSize="var(--xxxl)"><slot name="title"></slot></TextH1>
    <MetadataPrimary :tags="tags" :date="date" size="md" class="metadata" />
  </header>
</template>
<script>
export default {
  name: "Journal Header",
  props: {
    image: Object,
    tags: Object,
    date: String,
  },
};
</script>
<style scoped>
.metadata {
  margin-top: 16px;
}
</style>
