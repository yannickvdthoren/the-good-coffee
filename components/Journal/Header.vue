<template>
  <header>
    <ImageFigure
      :src="image.src ? image.src : ''"
      :alt="image.alt ? image.alt : ''"
      :credit="image.credit ? image.credit : ''"
      :link="image.link ? image.link : ''"
      aspectRatio="2.4/1"
      :fullBleed="true"
    />

    <TextH1 fontSize="var(--xxxl)"><slot name="title"></slot></TextH1>
    <MetadataPrimary :tags="tags" :date="date" size="md" />
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
