<template>
  <li>
    <ImagePicture
      :src="content.image"
      :alt="content.alt"
      borderRadius="10px"
      class="image"
    />
    <div class="details">
      <TextH3 fontSize="var(--lg)">
        {{ content.name }}
      </TextH3>
      <TextParagraph fontSize="var(--sm)" color="var(--white)">
        {{ content.address }}
      </TextParagraph>
    </div>
  </li>
</template>
<script>
export default {
  name: "Card Roaster",
  props: {
    content: Object,
  },
};
</script>
<style scoped>
li {
  flex: 1 0 calc(100% / 6);
  display: grid;
  box-shadow: var(--shadow);
}
.image,
.details {
  grid-area: 1/1/2/2;
}
.image {
  position: relative;
}
.image::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  opacity: 0.3;
}
.details {
  align-self: flex-end;
  z-index: 1;
  padding: 16px;
  color: var(--white);
}
</style>
