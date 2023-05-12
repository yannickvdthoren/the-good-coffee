<template>
  <section class="places" v-if="places">
    <ContentRenderer>
      <div class="details">
        <h2>{{ places.title }}</h2>
        <p v-html="places.description"></p>
        <nuxt-link :to="places.url"
          >{{ places.label }} <IconsArrow
        /></nuxt-link>
      </div>
      <picture id="image1">
        <img
          src="~/assets/images/homepage/the-good-coffee-places.png"
          alt="Preview of the good coffee places website"
        />
      </picture>
      <picture id="image2">
        <img
          src="~/assets/images/homepage/the-good-coffee-places-about.png"
          alt="Preview of the good coffee places website"
        />
      </picture>
    </ContentRenderer>
  </section>
</template>
<script setup lang="ts">
const { data: places } = await useAsyncData("places-data", () =>
  queryContent("/en/homepage/places").findOne()
);
</script>
<style scoped>
@media screen and (max-width: 650px) {
  section {
    overflow: hidden;
    display: flex;
    align-items: center;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    padding: 64px 24px;
    gap: 24px;
    background: var(--cyan);
  }
  .details {
    flex: 1 0 70%;
  }
  #image1 {
    flex: 1 0 60%;
  }
  #image2 {
    display: none;
  }
  h2 {
    max-width: 12ch;
  }
  a {
    margin-top: 64px;
  }
  p {
    padding: 32px 0;
  }
}
@media screen and (min-width: 651px) {
  section::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 100px;
    bottom: 100px;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    background: var(--cyan);
  }
  section {
    position: relative;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 0.4fr 0.4fr;
    grid-template-rows: 50px 50px auto 50px 50px;
    grid-template-areas: ". image1 ." ". image1 image2" "text image1 image2" ". image1 image2" ". . image2";
    gap: 0 64px;
  }
  .details {
    grid-area: text;
    padding: 152px 0;
    max-width: 60ch;
  }
  #image1 {
    grid-area: image1;
  }
  #image2 {
    grid-area: image2;
  }
  p {
    padding: 32px 0;
  }
}
</style>
