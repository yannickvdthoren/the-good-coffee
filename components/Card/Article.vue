<template>
  <div :class="{ une: section === 'Une' }">
    <ImagePicture
      :src="content.image.src ? content.image.src : ''"
      :alt="content.image.alt ? content.image.alt : ''"
      class="picture"
      aspectRatio="none"
      v-if="section === 'Une'"
    />
    <ImagePicture
      :src="content.image.src ? content.image.src : ''"
      :alt="content.image.alt ? content.image.alt : ''"
      class="picture"
      v-else="section === 'Une'"
    />
    <div class="details">
      <CardMetadata
        :tags="content.tags ? content.tags : ''"
        :date="content.date ? content.date : ''"
      />
      <CardTitle
        :title="content.title ? content.title : ''"
        :section="section"
      />
      <CardExcerpt
        :content="content.excerpt ? content.excerpt : ''"
        v-if="excerpt"
      />
      <nuxt-link :to="content._path ? content._path : ''">Read more</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card Article",
  props: {
    content: Object,
    section: String,
    excerpt: Boolean,
  },
};
</script>
<style scoped>
.une {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  align-items: center;
}
.une .details {
  grid-area: details;
}
.une .picture {
  grid-area: img;
  margin-right: calc(var(--full-bleed) / 2);
  max-height: 100vh;
}
@media screen and (max-width: 650px) {
}
@media screen and (min-width: 651px) {
  .une {
    grid-template-areas: "details details img img";
  }
}
</style>
