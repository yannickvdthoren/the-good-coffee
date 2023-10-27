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
      v-else
    />
    <div class="details">
      <MetadataPrimary
        :tags="content.tags ? content.tags : ''"
        :date="content.date ? content.date : ''"
        :size="metadataSize"
      />
      <CardTitle
        :title="content.title ? content.title : ''"
        :section="section"
        class="title"
      />
      <CardExcerpt
        :content="content.excerpt ? content.excerpt : ''"
        v-if="excerpt"
      />
      <LinkPrimary
        type="nuxt"
        :link="content._path ? content._path : ''"
        class="link"
      >
        Read the post
      </LinkPrimary>
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
    metadataSize: String,
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
  .une .title {
    margin: 16px 0 48px;
  }
  .une .link {
    margin-top: 56px;
  }
}
</style>
