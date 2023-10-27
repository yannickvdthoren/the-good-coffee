<template>
  <div :class="{ une: section === 'Une' }">
    <ImagePicture
      :src="content.image.src ? content.image.src : ''"
      :alt="content.image.alt ? content.image.alt : ''"
      class="picture"
      aspectRatio="unset"
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
      <LinkPrimary
        type="nuxt"
        :link="content._path ? content._path : ''"
        class="title"
      >
        <TextH2 v-if="section === 'Une'" fontSize="var(--xxxl)">
          {{ content.title ? content.title : "" }}
        </TextH2>
        <TextH3 fontSize="var(--xxl)" v-else>{{
          content.title ? content.title : ""
        }}</TextH3>
      </LinkPrimary>
      <TextParagraph
        fontSize="var(--ml)"
        letterSpacing="0.25px"
        v-if="excerpt"
        class="desktop"
      >
        {{ content.excerpt ? content.excerpt : "" }}
      </TextParagraph>
      <LinkPrimary
        type="nuxt"
        :link="content._path ? content._path : ''"
        class="link"
      >
        <ButtonReadMore maxWidth="10ch"> Read the post </ButtonReadMore>
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
.details {
  position: relative;
}
.une {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0 calc(5 * var(--margin));
  align-items: center;
  min-height: 100vh;
}
.une .details {
  grid-area: details;
}
.une .picture {
  grid-area: img;
  max-height: 100vh;
  z-index: 0;
}
@media screen and (max-width: 650px) {
  .une {
    grid-template-areas: "details details details details" "img img img img";
    margin-top: 120px;
  }
  .une .title {
    margin: 8px 0 24px;
  }
  .une .link {
    margin-top: 32px;
  }
  .une .picture {
    margin-right: var(--full-bleed);
  }
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
  .une .picture {
    margin-right: calc(var(--full-bleed) / 2);
  }
}
</style>
